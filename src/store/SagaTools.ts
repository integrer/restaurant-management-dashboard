import { Saga, SagaMiddleware, Task } from 'redux-saga';
import { findLast } from 'ramda';
import { WeakMapCompat } from '@app/utils/collections';
import { createContext, useContext } from 'react';

type BoundRunSaga = SagaMiddleware['run'];

export interface ISagaTools {
  runSaga: BoundRunSaga;
  runSagaExclusive: BoundRunSaga;
}

const findLastRunning = findLast<Task>((task) => task.isRunning());

export const createSagaTools = ({ run: runSagaInner }: SagaMiddleware): ISagaTools => {
  const runningTasks = new WeakMapCompat<Saga, Task[]>();

  const runSaga: BoundRunSaga = (saga, ...args) => {
    const getTasks = () => runningTasks.get(saga);

    const task = runSagaInner(saga, ...args);

    runningTasks.set(saga, [...(getTasks() || Array.prototype), task]);

    task.toPromise().finally(() => {
      const tasks = getTasks();
      if (!tasks) return;
      const exceptCurrent = tasks.filter((t) => t !== task);
      if (exceptCurrent.length) runningTasks.set(saga, exceptCurrent);
      else runningTasks.delete(saga);
    });

    return task;
  };

  const runSagaExclusive: BoundRunSaga = (saga, ...args) => {
    const tasks = runningTasks.get(saga);
    const lastRunning = tasks && findLastRunning(tasks);
    return lastRunning || runSaga(saga, ...args);
  };

  return { runSaga, runSagaExclusive };
};

export const SagaToolsContext = createContext<ISagaTools | null>(null);

export function useSagaTools(): ISagaTools {
  const tools = useContext(SagaToolsContext);
  if (!tools) throw new TypeError('There is no Saga tools in components hierarchy');
  return tools;
}
