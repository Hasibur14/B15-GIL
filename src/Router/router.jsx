import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";





const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children  : [
        {
            path: "/",
            element : <Home/>
        },
        {
            path : "/about",
            element: <About/>
        },
        {
            path: "/blogs",
            element: <Blogs/>
        }
      ]
  
    },
  ]);


  export default router;