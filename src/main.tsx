import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import globalStore from './redux/store.ts';
import { fetchUserThunk } from './redux/usersSlice.ts';

globalStore.dispatch(fetchUserThunk());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </StrictMode>,
);
