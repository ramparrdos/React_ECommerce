import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const [menuOpen, setMenu] = useState(false);

    return(
        <nav className="bg-gray-100 flex flex-wrap justify-between items-center w-full z-50 px-4 sm:px-10 py-8">
            <div className="text-2xl sm:text-3xl font-semibold">React E-Commerce</div>
            <button className="sm:hidden text-gray-900 focus:outline-none" onClick={() => setMenu(!menuOpen)}>
                <MenuIcon/>
            </button>
            
            <div className={`${menuOpen ? "block" : "hidden"} w-full sm:flex sm:space-x-10 sm:w-auto mt-4 sm:mt-0 text-xl`}>
                <Link to="/dashboard" className="block py-2 sm:py-0">Dashboard</Link>
                <Link to="/" className="block py-2 sm:py-0">Shop</Link>
                <Link to="/login" className="block py-2 sm:py-0">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;