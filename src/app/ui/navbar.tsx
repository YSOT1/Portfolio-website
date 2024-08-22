'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-base-200 z-50">
            {/* Logo or Home Link */}
            <Link href="#" className="text-xl font-bold">Home</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                <Link href="#portfolio" className="text-xl hover:text-primary">Portfolio</Link>
                <Link href="#skills" className="text-xl hover:text-primary">Skills</Link>
                <Link href="#contact" className="text-xl hover:text-primary">Contact</Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    !nav ? 'hidden' : 'flex'
                } absolute top-0 left-0 w-full h-screen bg-base-100 flex flex-col justify-center items-center space-y-6`}
            >
                <Link href="#portfolio" className="text-2xl hover:text-primary" onClick={handleClick}>Portfolio</Link>
                <Link href="#skills" className="text-2xl hover:text-primary" onClick={handleClick}>Skills</Link>
                <Link href="#contact" className="text-2xl hover:text-primary" onClick={handleClick}>Contact</Link>
            </div>

            {/* Social Icons (Desktop only) */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 space-y-4">
                <Link href='https://www.linkedin.com/in/yassine-sabri-741345247/' target="_blank" className='flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-gray-300 px-4'>
                    Linkedin <FaLinkedin size={30} />
                </Link>
                <Link href='https://github.com/YSOT1' target="_blank" className='flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 text-gray-300 px-4'>
                    Github <FaGithub size={30} />
                </Link>
            </div>
        </div>
    );
}
