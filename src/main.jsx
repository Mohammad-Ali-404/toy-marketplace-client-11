/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl	mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
  </div>
)
