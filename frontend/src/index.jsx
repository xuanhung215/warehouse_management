import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // File CSS cấu hình reset margin/padding cơ bản (bạn có thể tự tạo)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);