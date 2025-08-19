import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { BiAccessibility } from "react-icons/bi";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle);
    }

return (
        <nav className="bg-[#F5F0E8] border-b border-[#E0D5C6]">
            <div className="container mx-auto max-w-[1320px] relative px-6 py-4 flex flex-col md:flex md:flex-row items-center justify-between h-auto md:h-[80px] z-50">
                {/* Logo */}
                <a href="#" className="text-[#5C3A21] text-2xl font-bold">
                    <BiAccessibility size={28} className="text-[#8B6B4A]" />
                </a>

                {/* Navigation Links */}
                <ul className={`flex-col ${toggle ? 'flex' : 'hidden'} md:flex md:flex-row items-center text-[#5C3A21] font-medium`}>
                    <li className="my-2 md:mx-4">
                        <a href="#" className="hover:text-[#8B6B4A] transition-colors">Home</a>
                    </li>
                    <li className="my-2 md:mx-4">
                        <a href="#" className="hover:text-[#8B6B4A] transition-colors flex items-center gap-1">Service</a>
                    </li>
                    <li className="my-2 md:mx-4">
                        <a href="#" className="hover:text-[#8B6B4A] transition-colors flex items-center gap-1">Feature</a>
                    </li>
                    <li className="my-2 md:mx-4">
                        <a href="#" className="hover:text-[#8B6B4A] transition-colors flex items-center gap-1">Product</a>
                    </li>
                    <li className="my-2 md:mx-4">
                        <a href="#" className="hover:text-[#8B6B4A] transition-colors flex items-center gap-1">About</a>
                    </li>
                </ul>

                {/* Right Side: Search + Contact us */}
                <div className={`items-center space-x-4 mt-4 md:mt-0 ${toggle ? 'flex' : 'hidden'} md:flex`}>
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-2 px-6 bg-[#5C3A21] text-[#F5F0E8] rounded-md hover:bg-[#8B6B4A] transition-colors font-medium"
                    >
                        Contact us
                    </a>
                </div>

                {/* Hamburger icon (mobile only) */}
                <FaBars 
                    onClick={updateToggle}
                    className="absolute right-5 top-6 cursor-pointer text-xl md:hidden text-[#5C3A21]"
                    aria-label="Toggle menu"
                    role="button"
                />
            </div>
        </nav>
    );
}

export default Navbar;