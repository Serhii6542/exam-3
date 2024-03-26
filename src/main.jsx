import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'
import { RouterProvider } from 'react-router-dom' 
import router from './router.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/hamburgers.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
