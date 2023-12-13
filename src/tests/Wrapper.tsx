import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '../redux/slices/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Parameters<typeof configureStore>[0]['preloadedState'];
  store?: EnhancedStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <Router>{/* Wrap with BrowserRouter */}
          {children}
        </Router>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
