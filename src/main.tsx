import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from './tools/desing.ts';
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <Router>
      <App />
    </Router>
  </ConfigProvider>
)