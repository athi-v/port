import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f1f5f9] text-[#0f172a]">
      <div>
        <h1 className="text-3xl font-bold py-4">
          <Link to="/">
            {" "}
            Athenk<span className="underline text-teal-600">osi</span>
          </Link>
        </h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* hambuger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars fontSize={20} /> : <FaTimes fontSize={20} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f1f5f9] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/skills">
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/projects">
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="/contact">
              Contact
            </Link>
          </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/athi-v/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
