export class CancelError extends TypeError {}

export const delay = (timeMs: number, signal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new CancelError());
      return;
    }

    let resolved = false;

    const timeout = setTimeout(() => {
      resolved = true;
      resolve();
    }, timeMs);

    signal?.addEventListener('abort', () => {
      if (resolved) return;
      clearTimeout(timeout);
      reject(new CancelError());
    });
  });
