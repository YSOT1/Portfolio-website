'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
export default function NavBar() {
    
        const [nav, setNav] = useState(false);
        const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4  ">
            <Link href="#" className="btn btn-ghost text-xl">Home</Link>
            <div className="navbar bg-base-200 justify-end ">
                <div className="navbar-center ">
                    <Link href="#portfolio" className="btn btn-ghost text-xl">Portfolio</Link>
                    <Link href="#skills" className="btn btn-ghost text-xl">Skills</Link>
                    <Link href="#contact" className="btn btn-ghost text-xl">Contact</Link>
                </div>
            </div>
            
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <Link
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/yassine-sabri-741345247/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={40} />
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <Link
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/YSOT1'
              target="_blank"
            >
              Github <FaGithub size={40} />
            </Link>
          </li>
        </ul>
      </div>
        </div>

    );
}
