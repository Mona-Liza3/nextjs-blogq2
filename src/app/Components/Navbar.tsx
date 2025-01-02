

"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800  md:border-pink-4 text-white p-4 md:flex md:justify-between md:items-center">
        <div className="container mx-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl text-white font-bold italic">
            Creative<span className="text-pink-400 italic">Corner</span>
          </Link>
          

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row  md:static absolute  top-[60px] md:top-auto left-0 bg-gray-800 md:bg-transparent w-full md:w-auto p-4 md:p-4 gap-4`}
          >
            <Link href="/" className="mx-2 hover:text-pink-300 ">
              Home
            </Link>
            <Link href="/About" className="mx-2 hover:text-pink-300 ">
              About
            </Link>
            <Link href="/Shop" className="mx-2 hover:text-pink-300">
              Services
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex z-[10] relative items-center hover:text-pink-300">
            <button className=""
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              <GiHamburgerMenu className="hover:text-pink-300  mr-2" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
