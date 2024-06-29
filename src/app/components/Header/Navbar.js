"use client";

import React, { useState, useEffect } from 'react';
import "../style/style.css";
import { IoIosSearch } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { PiCalendarStarFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [hobbiesOpen, setHobbiesOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleExploreToggle = () => setExploreOpen(!exploreOpen);
  const handleHobbiesToggle = () => setHobbiesOpen(!hobbiesOpen);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  };

  // Check if the screen size is mobile on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };
    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobileView) {
      setSearchOpen(false);
      setMenuOpen(false);
    }
  }, [isMobileView]);

  return (
    <div className='Navbar-container'>
      <nav className='nav-main'>
        
        {/* Logo */}
        <div className='logo-main'>
          <img src='HobbyCueLogo.svg' alt='logo' />
        </div>

        {/* Search input */}
        <div className= {`search-input-main ${isMobileView && searchOpen ? 'open' : ''}`}>
          <input type='text' placeholder='search here' /> 
          <button><IoIosSearch color='white' /></button>
        </div>

        {/* Navigation Links */}
        <div className= {`nav-links ${isMenuOpen && isMobileView ? 'open' : ''}`} >
          <div className='dropdown'>
            <MdExplore size={"30px"}/> 
            <button className='dropbtn' onClick={handleExploreToggle}>
                Explore
            </button>
            <IoIosArrowDown/>
            {exploreOpen && (
              <div className='dropdown-content'>
                <a href='#explore1'>Explore Link 1</a>
                <a href='#explore2'>Explore Link 2</a>
                <a href='#explore3'>Explore Link 3</a>
              </div>
            )}
          </div>

          <div className='dropdown'>
            <PiCalendarStarFill size={"30px"}/>
            <button className='dropbtn' onClick={handleHobbiesToggle}>
               Hobbies
            </button>
            <IoIosArrowDown/>
            {hobbiesOpen && (
              <div className='dropdown-content'>
                <a href='#hobby1'>Hobby Link 1</a>
                <a href='#hobby2'>Hobby Link 2</a>
                <a href='#hobby3'>Hobby Link 3</a>
              </div>
            )}
          </div>
          <div className='bookmark'>
            <Link className='bookmark-link' href='/'><FaBookmark size={"20px"}/></Link> 
          </div>

          <div className='cart'>
            <Link  href='/'><PiShoppingCartSimpleFill size={"25px"}/></Link> 
          </div>

          <div className='signin'>
            <Link className='signin-link' href='/' >SignIn </Link>
          </div> 
           
        </div>
        
        <div className='search-bar' onClick={toggleSearch}>
          {searchOpen ? <FaTimes color='grey'/> : <IoIosSearch  color='grey'/>}
        </div>

        {/* Navigation Links 2 */}
        <div className='nav-link2'>
          <div className='dropdown'>
            <button className='dropbtn' onClick={handleHobbiesToggle}>
              <IoMdNotifications size={"30px"}/>
            </button>
            {hobbiesOpen && (
              <div className='dropdown-content'>
                <a href='#hobby1'>notification 1</a>
                <a href='#hobby2'>notification  2</a>
                <a href='#hobby3'>notification  3</a>
              </div>
            )}
          </div>
        </div>

        <div className='hamburger' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes color='grey' /> : <FaBars color='grey' />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
