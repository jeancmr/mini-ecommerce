import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { EcommerceApp } from './EcommerceApp.tsx';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <EcommerceApp />
    </Provider>
  </StrictMode>
);
