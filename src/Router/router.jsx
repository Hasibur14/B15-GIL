import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import BlogsDetails from "../Pages/Blogs/BlogsDetails";
import Home from "../Pages/Home/Home";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/details-blogs/:id",
        element: <BlogsDetails/>,
        loader: ({ params }) =>
          fetch(`/blogs.json`)
        .then(res => res.json())
        .then(data => data.find(blog => blog.id === Number(params.id) ) )
      }
    ]

  },
]);


export default router;