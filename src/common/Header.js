// src/components/Header.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Icons from "../components/Icons";
import { nav } from "../data/Data";
import NavItem from "../components/NavItem";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileNav = (
    <div
      className={`${
        menuOpen ? "fixed inset-0 bg-gray-800 bg-opacity-50 z-50" : "hidden"
      } sm:hidden`}
      onClick={handleToggleMenu}
      style={{ zIndex: "9999" }}
    ></div>
  );

  return (
    <>
      <div className={`w-full bg-white sticky top-0 z-10 drop-shadow-md ${menuOpen ? "" : ""}`}>
        <div className="flex items-center p-2 pl-5 pr-4">
          {/* Logo Section */}
          <div className="flex-none">
            <Link to={"/"} className="font-bold text-3xl">
              Fabelley
              <span className="text-yellow-500"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden ml-auto">
            {menuOpen ? <FaTimes onClick={handleToggleMenu} /> : <FaBars onClick={handleToggleMenu} />}
          </div>

          {/* Centered Navigation Items (Desktop) */}
          <div className="hidden sm:flex flex-1 justify-center items-center">
            <ul className="flex font-semibold uppercase space-x-4">
              {nav.map((items, index) => (
                <NavItem key={index} to={items.path} label={items.text} />
              ))}
              <li>
                <Link to="/style-quiz" className="font-semibold uppercase">
                  Style Quiz
                </Link>
              </li>
             
              
              <li>
                <Link to="/blogs" className="font-semibold uppercase">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/know-your-body-type" className="font-semibold uppercase bg-wine-600 text-white px-4 py-2 rounded">
                  Know Your Body Type
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Items (Mobile) */}
          {mobileNav}
          <div
            className={`${
              menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
            } sm:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white overflow-y-auto transition-transform ease-in-out duration-300`}
            style={{ zIndex: "11111" }}
          >
            <FaTimes onClick={handleToggleMenu} className="absolute top-3 right-3" />
            <ul className="flex flex-col p-4 m-8 font-bold">
              {nav.map((list, key) => (
                <div className="mb-3" key={key}>
                  <NavItem to={list.path} label={list.text} />
                </div>
              ))}
              <div className="mb-3">
                <Link to="/style-quiz" className="font-bold text-lg">
                  Style Quiz
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/detect-body-type" className="font-bold text-lg">
                  Detect Body Type
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/blogs" className="font-bold text-lg">
                  Blogs
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/know-your-body-type" className="font-bold text-lg bg-wine-600 text-white px-4 py-2 rounded">
                  Know Your Body Type
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/login" className="font-bold text-lg">
                  Login
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/signup" className="font-bold text-lg">
                  Sign Up
                </Link>
              </div>
            </ul>
          </div>

          {/* Login/Signup Links (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4 ml-4">
            <Link to="/login" className="font-bold text-lg">
              Login
            </Link>
            <Link to="/signup" className="font-bold text-lg">
              Sign Up
            </Link>
          </div>

          {/* Icons */}
          <div className="ml-auto">
            <Icons />
          </div>
          
        </div>
      </div>
    </>
  );
}
