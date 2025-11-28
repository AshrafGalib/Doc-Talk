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
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';

export const router = createBrowserRouter([
  {
  path : '/',
  Component :Root,
  children :[
    {index:true,
   loader: async () => {
  const res = await fetch('/Doctors.json');
  //if (!res.ok) throw new Error("Failed to load doctors");
  const data = await res.json(); // JSON parse
  return data; // array
    },
    shouldRevalidate: () => true ,  
    Component: Home},
    {path:"/mybookings",Component: Bookings},
    {path:"/blogs",Component: Blogs},
    {path:"/contuctus",Component: ContuctUs},
    {path:"/doctorDetails/:registration_number",
      loader:async()=>{
        const res = await fetch('/Doctors.json')
        const data =await res.json()
        return data
      },
      Component:DoctorDetails
    }
  ]
  },
]);