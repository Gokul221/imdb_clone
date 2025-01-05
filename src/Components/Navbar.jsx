import Logo from "../assets/cinema_logo.png";
import {Link} from "react-router";    // avoids reloading of page

const Navbar = () => {
    return (
        <div className="flex h-[9vh] bg-gradient-to-t from-amber-700 to-amber-400 border-t-2 border-t-gray-600 space-x-10 items-center">
            <img className="w-[50px] ml-5 " src={Logo} alt='Logo'/>
            <Link to="/"
                  className="text-white hover:cursor-pointer hover:text-gray-700 hover:scale-110 duration-200">
                Movies
            </Link>
            <Link to="/watchlist"
                  className="text-white hover:cursor-pointer hover:text-gray-700 hover:scale-110 duration-200">
                Watchlist
            </Link>
            <Link to='/popular'
                  className="text-white hover:cursor-pointer hover:text-gray-700 hover:scale-110 duration-200">
                Popular
            </Link>
        </div>
    );
};

export default Navbar;
