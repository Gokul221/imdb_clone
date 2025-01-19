/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Login({ onSwitch }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    // Send data to backend for registration
  };

  return (
    <section className="justify-items-center m-20 font-lato">
      <div className="rounded-xl shadow-slate-400/30 shadow-[0_10px_20px_rgba(0,0,0,0.2)] w-[28rem]">
        <h2 className="text-xl m-6 pl-7 pt-12">Sign In</h2>
        <form className="justify-items-center flex-col" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="absolute bg-white px-1 pr-1 text-sm -top-2.5 left-8 text-gray-400">Email</label>
            <input
              className="rounded-full px-5 mb-8 border border-gray-300 w-[22rem] h-[50px]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label className="absolute bg-white px-1 pr-1 text-sm -top-2.5 left-8 text-gray-400">Password</label>
            <input
              className="rounded-full text-gray-700 px-5 mb-8 border border-gray-300 w-[22rem] h-[50px]"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* <button type="submit">Register</button> */}
        </form>
        <div className="flex relative w-full bg-[#f2f2f2] rounded-bl-xl rounded-br-xl rounded-tl-[200px_70px] mt-12 h-[9rem] items-center justify-center">
          <button type="submit" className="absolute rounded-full -top-8 right-14 bg-[#e32249] hover:bg-[#b01b39] shadow-[0_10px_19px_-16px_rgba(0,0,0,1)] w-[60px] h-[60px]">
            <FontAwesomeIcon icon={faPaperPlane} className= "relative text-white mt-1" />
          </button>
          <div className="">
          <p className="text-gray-500">
          Forgot Password?
          <Link to='/login' className="text-[#e32249] hover:text-[#b01b39]" onClick={onSwitch}> Click to Reset</Link>
        </p>
        <p className="text-gray-500 text-center">
          Already a user?
          <Link to='/register' className="text-[#e32249] hover:text-[#b01b39]" onClick={onSwitch}> Sign Up</Link>
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}
  

export default Login;
