import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);  

    useEffect(() => {
        fetch("/blogs.json")
        .then(res => res.json())
        .then( data => setBlogs(data))
    }, [])

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-10 my-40">
                {
                    blogs?.map(blog => (
                        <div key={blog.id} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img className="object-cover w-full h-56" src={blog.image} alt="avatar" />

                            <div className="py-5 text-center">
                                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{blog.name}</a>
                                <span className="text-sm text-gray-700 dark:text-gray-200">{blog.title}</span>
                            </div>
                            <Link to={`/details-blogs/${blog.id}`}>
                                <button className="btn  bg-green-500 text-white hover:bg-green-700">Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;


