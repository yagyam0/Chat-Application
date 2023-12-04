import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import RootLayout from '../Components/RootLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Login from '../Pages/Login';

const AllRoutes = () => {      
      // You can do this:
      const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
          </Route>
        )
      );
      
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AllRoutes;