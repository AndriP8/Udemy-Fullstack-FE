import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import jobReducer from '../feature/job/JobSlice';

export { render } from '@testing-library/react';

export function renderWithRedux(
  ui,
  {
    preloadState,
    store = configureStore({ reducer: { jobs: jobReducer }, preloadState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...render });
}
