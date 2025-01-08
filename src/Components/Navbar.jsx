import {Link} from "react-router";      // avoids reloading of page
import React from "react";

const Navbar = () => {
    return (
        <div
            className="flex h-[9vh] bg-gradient-to-bl from-amber-300 to-red-300 space-x-10 items-center">
            <div
                className='ml-8 text-center rounded-br-full p-2 w-[180px] text-lime-400 rounded-tl-full font-thin bg-gray-700 text-2xl'>
                Movies<span className='text-white text-3xl font-bold '>Bay</span>
            </div>
            <Link to="/"
                  className="text-gray-700 hover:cursor-pointer hover:scale-110 duration-200">
                Movies
            </Link>
            <Link to="/watchlist"
                  className="text-gray-700 hover:cursor-pointer hover:scale-110 duration-200">
                Watchlist
            </Link>
            <Link to='/popular'
                  className="text-gray-700 hover:cursor-pointer hover:scale-110 duration-200">
                Popular
            </Link>

            {/*Avatar*/}
            {/*<Link to='#'>*/}
            {/*    <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">*/}
            {/*        <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"*/}
            {/*             xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"*/}
            {/*                  clipRule="evenodd"></path>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</Link>*/}
        </div>
    );
};

export default Navbar;
