import React, { lazy, Suspense } from 'react';
import { Store } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CircularProgress, CssBaseline } from '@mui/material';
import { AppAction, AppState } from '@app/store';
import { ISagaTools, SagaToolsContext } from '@app/store/SagaTools';
import LayoutBackground from '@app/components/LayoutBackground';

const DashboardPage = lazy(() => import('./pages/Dashboard'));

export interface IAppProps {
  store: Store<AppState, AppAction> & ISagaTools;
}

export default function App({ store }: IAppProps) {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <SagaToolsContext.Provider value={store}>
          <CssBaseline />
          <LayoutBackground>
            <Suspense fallback={<CircularProgress />}>
              <Routes>
                <Route path='/' element={<DashboardPage />} />
              </Routes>
            </Suspense>
          </LayoutBackground>
        </SagaToolsContext.Provider>
      </ReduxProvider>
    </BrowserRouter>
  );
}
