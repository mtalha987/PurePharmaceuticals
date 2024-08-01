"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/public/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="xl:px-[90px] lg:px-10 px-5 xs:px-1 pt-10 bg-[#ECF8F2]">
      <div className="flex justify-between items-center">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="hidden lg:flex gap-44 items-center">
          <div>
            <ul className="flex gap-7 text-black text-base font-normal font-['Arial'] leading-[16.86px]">
              <li>Home</li>
              <li>About Us</li>
              <li>Product</li>
            </ul>
          </div>
          <div>
            <button className="h-[41px] px-[19px] py-3 rounded-lg border border-black justify-center items-center gap-1 inline-flex text-black text-base font-normal font-['Arial'] leading-[16.86px]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden mt-5">
          <ul className="flex flex-col gap-4 text-black text-base font-normal font-['Arial'] leading-[16.86px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li>
              <button className="h-[41px] px-[19px] py-3 rounded-lg border border-black justify-center items-center gap-1 inline-flex text-black text-base font-normal font-['Arial'] leading-[16.86px]">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
            <div className="h-[0px] border border-neutral-800 mt-7"></div>

    </div>
  );
};

export default Header;
