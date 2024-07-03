import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
    // Optionally, redirect to home or login page
  };

  useEffect(() => {
    const name = localStorage.getItem("userName");
    console.log(name);
    if (name) {
      setUserName(name);
    }
  }, []);


  return (
    <nav className="bg-white px-2 py-2.5 w-full rounded shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/#" className="block pt-1">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-full h-14"
            />
          </Link>
        </a>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg hover:bg-gray-100 focus:outline-none md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className={`w-full md:block md:w-auto ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <ListItem to="/">Home</ListItem>
            <ListItem to="/about">About</ListItem>
            <ListItem to="/quiz">Career Quiz</ListItem>
            <ListItem to="/resources">Resources</ListItem>
            <ListItem to="/expert">Talk to an Expert</ListItem>
            <ListItem to="/blog">Blog</ListItem>
          </ul>
        </div>

        <div className="hidden justify-end gap-8 sm:flex lg:pr-0">
          {userName ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-base rounded-md font-medium text-dark bg-dark text-white bg-primary hover:bg-primary/90 px-4 py-2"
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Welcome, {userName}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</Link>
                  
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-200">Log Out</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/signin"
                className="px-7 py-3 text-base rounded-md font-medium text-dark  bg-dark text-white bg-primary hover:bg-primary/90"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = ({ children, to }) => {
  return (
    <li>
      <Link to={to} className="block text-center py-2 text-base pr-4 pl-3 text-black hover:text-primary font-semibold">
        {children}
      </Link>
    </li>
  );
};
