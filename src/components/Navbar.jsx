import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex items-center shadow-lg backdrop-blur-[3px] backdrop- justify-between px-6 py-2 z-[100] w-full absolute">
      <Link to={"/"}>
        <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
          NOTFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="pr-8 py-4">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-500 hover:bg-red-800 px-6 py-2 rounded-sm">SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
