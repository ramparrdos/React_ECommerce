import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="bg-gray-100 flex justify-between items-center w-full z-50 px-10 py-8">
            <div className="text-3xl font-semibold">React E-Commerce</div>
            <div className="space-x-10 text-xl">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Shop</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;