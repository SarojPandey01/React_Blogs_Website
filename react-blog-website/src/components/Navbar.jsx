import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook , FaDribbble, FaTwitter, FaBars, FaXmark} from "react-icons/fa6";
 //react icons


const Navbar = () => {

    const [isMenuOpen, setIsMenuopen]=useState(false);
    const toggleMenu = ()=>{
        setIsMenuopen(!isMenuOpen);
    }
    //navIems
    const navItems = [
        {path:"/", link:"Home"},
        {path:"/services", link:"services"},
        {path:"/about", link:"About"},
        {path:"/blogs", link:"Blogs"},
        {path:"/contact", link:"Contact"},
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center '>
            <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>SP</span></a>


            {/* navitems for lg device */}
            <ul className='md:flex gap-12 text-lg hidden '>
                {
                    navItems.map(({path,link})=> <li className='text-white' key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons  */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-orange-500'><FaFacebook />
                </a>
                <a href="/" className='hover:text-orange-500'><FaDribbble />
                </a>
                <a href="/" className='hover:text-orange-500'><FaTwitter />
                </a>
                <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200  ease-in'>Log In</button>
            </div>


            {/* mibile menu buttob display mobilt screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5' />
                    }
                    
                    </button>
            </div>


        </nav>
    </header>
  
  )
}

export default Navbar