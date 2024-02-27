import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="content">
        <RouterProvider router = {router} />
      </div>
  </React.StrictMode>,
)
