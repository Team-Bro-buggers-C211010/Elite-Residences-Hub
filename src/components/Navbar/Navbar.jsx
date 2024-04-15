import { NavLink } from "react-router-dom";
import mainLogo from "../../images/Main-Logo.png";
const Navbar = () => {
    const navLinks = <>
        <NavLink to="/" className={({ isActive, isTransitioning }) =>
            isActive ? "border-t-2 border-[#71b100] text-[#8cbd52]" : "hover:border-t-2 hover:border-[#71b100] hover:text-[#8cbd52] "
        }>Home</NavLink>
        <NavLink to="/update-profile" className={({ isActive, isTransitioning }) =>
            isActive ? "border-t-2 border-[#71b100] text-[#8cbd52]" : "hover:border-t-2 hover:border-[#71b100] hover:text-[#8cbd52] "
        }>Update Profile</NavLink>
        <NavLink to='/profile' className={({ isActive, isTransitioning }) =>
            isActive ? "border-t-2 border-[#71b100] text-[#8cbd52]" : "hover:border-t-2 hover:border-[#71b100] hover:text-[#8cbd52] "
        }>My Profile</NavLink>
    </>
    return (
        <div className="bg-white w-full z-50 fixed top-0 shadow-2xl">
            <div className="navbar container mx-auto">
                <div className="navbar-start text-[#838383]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-black hover:bg-transparent hover:border hover:border-[#8cbd52]"><img className="w-7 h-7" src={mainLogo} alt="" /> <span className="text-[#71b100]"> Elite Residences</span> Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-x-6 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-x-1">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <NavLink to="/signout" className="btn text-white bg-[#82b440] hover:border hover:border-[#82b440] hover:text-[#82b440] hover:bg-transparent">Sign Out</NavLink>
                    <NavLink to="/signin" className="btn text-white bg-[#82b440] hover:border hover:border-[#82b440] hover:text-[#82b440] hover:bg-transparent">Sign In</NavLink>
                    <NavLink to="/register" className="btn text-white bg-[#82b440] hover:border hover:border-[#82b440] hover:text-[#82b440] hover:bg-transparent">Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;