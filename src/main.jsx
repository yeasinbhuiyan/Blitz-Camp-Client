import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './AuthProviders/AuthProviders'
import {  HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import router from './Routers/router'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>

      <QueryClientProvider client={queryClient}>
     
    <RouterProvider router={router}></RouterProvider>

    </QueryClientProvider>

      </HelmetProvider>

    </AuthProvider>
  </React.StrictMode>,
)
