import {Link} from "react-router";      // avoids reloading of page
import {useState, useEffect, useContext} from "react";
import { WatchListContext } from "./WatchListContext";

const Navbar = () => {
    const {watchList} = useContext(WatchListContext)
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (e) => {
        if (!e.target.closest("#dropdownMenu") && !e.target.closest("#avatarButton")) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeDropdown);
        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, []);

    return (
        <div
            className="flex justify-between h-[9vh] font-lato bg-gradient-to-bl from-amber-300 to-red-300 space-x-10 items-center">
            {/* Left Section: Logo + Links */}
            <div className="flex items-center px-10">
                {/* Logo */}
                <div className="text-center rounded-br-full p-2 w-[180px] text-lime-400 rounded-tl-full font-thin bg-gray-700 text-2xl">
                    Movies<span className="text-white text-3xl font-bold">Bay</span>
                </div>
            </div>

            {/* Avatar Section */}
            <div className="relative p-14 space-x-14 items-center flex">
                {/* Links */}
                <Link to="/" className="text-gray-700 text-lg font-semibold hover:cursor-pointer hover:text-white duration-200">Movies</Link>
                <Link to="/watchlist" className="text-gray-700 font-semibold text-lg hover:cursor-pointer hover:text-white duration-200">Watchlist</Link>
                <Link to="/popular" className="text-gray-700 font-semibold text-lg hover:cursor-pointer hover:text-white duration-200">Popular</Link>
                <Link to='#' className='text-gray-700 font-semibold text-lg hover:cursor-pointer hover:text-white duration-200'>Contact</Link>

                {/* Avatar */}
                <div className='relative'>
                    <button id="avatarButton" onClick={toggleDropdown}
                        className="w-11 h-11 rounded-full bg-gray-600 text-white flex items-center justify-center focus:border-white focus:border-2 hover:border-2 duration-100 hover:border-white">
                        <span>GB</span>
                    </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div id="dropdownMenu" className="absolute border border-gray-400 right-0 mt-1 -mx-10 w-48 bg-gray-700 rounded-xl">
                        <Link to="/" className="block p-6 py-3 hover:rounded-t-xl text-white hover:bg-gray-600">Profile</Link>
                        <Link to="/register" className="block p-6 py-3 text-white hover:bg-gray-600">Register</Link>
                        <Link to="/watchlist" className="flex relative p-6 py-3 text-white hover:bg-gray-600">Watchlist
                        <span className="grid place-items-center ml-4 bg-red-400 w-11 h-full rounded-full">{watchList.length}</span>
                        </Link>
                        <Link to="/" className="block p-6 py-3 text-white hover:bg-gray-600">Settings</Link>
                        <div className='justify-items-center'>
                            <hr className='border w-full border-gray-500 place-items-center'/>
                        </div>
                        <Link to="/login" className="block p-6 py-3 hover:rounded-b-xl text-red-400 hover:bg-gray-600">Sign out</Link>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
