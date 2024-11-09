

const Blogs = () => {

    return (
        <div className="grid grid-cols-3 gap-10 my-40">
            {
                blogs?.map(blog => (
                    <div key={blog.id} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <img className="object-cover w-full h-56" src={blog.image} alt="avatar" />

                        <div className="py-5 text-center">
                            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{blog.name}</a>
                            <span className="text-sm text-gray-700 dark:text-gray-200">{blog.title}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;

const blogs = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        name: "Anim",
        title: "Developer"
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        name: "Nazmul",
        title: "Developer"
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        name: "Rafi",
        title: "Developer"
    }

]