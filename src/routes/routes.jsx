import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Bookings from '../pages/Bookings/Bookings';
import Blogs from '../pages/Blogs/Blogs';
import ContuctUs from '../pages/ContuctUs/ContuctUs';

export const router = createBrowserRouter([
  {
  path : '/',
  Component :Root,
  children :[
    {index:true,
    loader:()=>fetch('Doctors.json'),    
    Component: Home},
    {path:"/mybookings",Component: Bookings},
    {path:"/blogs",Component: Blogs},
    {path:"/contuctus",Component: ContuctUs}
  ]
  },
]);