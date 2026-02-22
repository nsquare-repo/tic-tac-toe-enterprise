import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Critical Failure: Root element not found. Check index.html.");
}
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
