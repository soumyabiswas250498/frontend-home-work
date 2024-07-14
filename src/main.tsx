import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { api } from './redux/apiSlice.ts';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Toaster } from 'sonner';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
      <Toaster position="bottom-right" expand={true} duration={6000} richColors closeButton />
    </ApiProvider>

  </React.StrictMode>,
)
