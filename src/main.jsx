import { StrictMode} from 'react'
//import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import { ToastContainer } from 'react-toastify';
import {
  Route,
  RouterProvider,
  Routes,
} from "react-router"
import { router } from './routes/routes'






ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
  
)
