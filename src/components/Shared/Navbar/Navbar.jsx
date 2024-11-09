import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-neutral-200 shadow-xl">
            <div className="container mx-auto">
                <div className="navbar ">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/blogs'>
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;