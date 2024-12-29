import Logo from "../assets/cinema_logo.png";
import { Link } from "react-router";    // avoids reloading of page

const Navbar = () => {
  return (
    <div className="flex border-2 border-b-4 space-x-10 items-center p-3 m-3">
      <img className="w-[50px] ml-5 " src={Logo} alt='Logo' />
      <Link to="/" className="text-blue-500 text-2xl font-bold hover:cursor-pointer hover:scale-110 duration-200">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold hover:cursor-pointer hover:scale-110 duration-200">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
