"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import MenuOpen from "@/public/images/menuOpen.svg";
import MenuClose from "@/public/images/menuClose.svg";
import RightArrow from "@/public/images/rightArrow.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();

  const getHeaderColor = () => {
    if (pathname === "/") return "bg-[#ECF8F2]";
    return "bg-white";
  };

  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu
  const [aboutDropdown, setAboutDropdown] = useState(false); // About Us dropdown
  const [contactDropdown, setContactDropdown] = useState(false); // Contact Us dropdown
  const [areaDropdown, setAreaDropdown] = useState(false); // Area dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleAboutHover = () => {
    setAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    setAboutDropdown(false);
  };

  const handleContactHover = () => {
    setContactDropdown(true);
  };

  const handleContactLeave = () => {
    setContactDropdown(false);
  };

  const handleAreaHover = () => {
    setAreaDropdown(true);
  };

  const handleAreaLeave = () => {
    setAreaDropdown(false);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div
        className={`pt-[20px] xl:px-[90px] lg:px-[40px] px-5 ${getHeaderColor()} `}
      >
        <div className="hidden 2xl:max-w-[1440px] 2xl:mx-auto lg:flex flex-wrap justify-between text-neutral-dark-gray text-[13px] font-primary ">
          <div className="leading-5 font-normal ">
            <span>Sample@gmail.com</span>
            <span> / </span>
            <span>+04 89 76 4576</span>
          </div>
          <div>
            <span className="font-normal leading-tight uppercase">
              Open from 9am to 5pm - Closed on Weekends
            </span>
          </div>
        </div>
        <div className="w-full 2xl:max-w-[1440px] 2xl:mx-auto h-[0px] opacity-40 border border-neutral-gray mt-2 mb-5 hidden lg:block"></div>

        <nav className="flex items-center justify-between 2xl:max-w-[1440px] 2xl:mx-auto  ">
          <div>
            <Link href="/">
              <Image src={Logo} alt="StomaFlex Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="xl:mr-[140px] lg:mr-[40px] sm:mr-10 mr-4 text-neutral-gray text-base font-normal font-primary leading-normal">
              <ul className="flex gap-5">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li
                  onMouseEnter={handleAboutHover}
                  onMouseLeave={handleAboutLeave}
                  className="relative"
                >
                  <Link href="/about" className="flex items-center">
                    About Us{" "}
                    <svg
                      className="h-5 w-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {aboutDropdown && (
                    <ul
                      className={`absolute w-[160px] left-0 pt-6 z-20  rounded shadow-lg ${getHeaderColor()}`}
                    >
                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/company">Company</Link>
                      </li>
                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/news">News</Link>
                      </li>
                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/event">Event</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={handleContactHover}
                  onMouseLeave={handleContactLeave}
                  className="relative"
                >
                  <Link href="/product" className="flex items-center">
                    Products{" "}
                    <svg
                      className="h-5 w-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {contactDropdown && (
                    <ul className="absolute w-[200px] left-0 pt-6 z-20  rounded shadow-lg">
                      <li
                        className={`flex items-center relative px-3 py-2 ${getHeaderColor()} hover:bg-primary hover:text-white`}
                        onMouseEnter={handleAreaHover}
                        onMouseLeave={handleAreaLeave}
                      >
                        Oral Solid Dosage
                        <svg
                          className="h-5 w-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        {areaDropdown && (
                          <ul
                            className={`absolute left-full -top-2 mt-2 rounded shadow-lg text-black ${getHeaderColor()}`}
                          >
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Antihypertensives
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Antihistamines
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Erectile Dysfunction
                            </li>
                            <li className="px-3 py-2 hover:bg-primary hover:text-white">
                              Lipid Lowering Agents
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="px-[25px] py-3 bg-primary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="">
              {isOpen ? (
                <Image src={MenuClose} alt="Menu Close Icon" />
              ) : (
                <Image src={MenuOpen} alt="Menu Open Icon" />
              )}
            </button>
          </div>
        </nav>
        <div className="w-full h-[0px] opacity-40 border border-[#0000004D] lg:hidden mt-5"></div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`lg:hidden flex items-center flex-col ${getHeaderColor()}`}
          >
            <ul className="flex items-center w-full flex-col gap-4 pt-4 text-black text-base font-normal font-secondary leading-tight">
              <li>
                <Link href="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <div className=" w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative flex flex-col items-center w-full">
                <div className="flex justify-center items-center">
                  <Link
                    href="/about"
                    className="flex items-center"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>

                  <svg
                    onClick={() => toggleAccordion(0)}
                    className="h-5 w-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === 0 && (
                  <div className="w-full">
                    <ul
                      className={`w-full flex flex-col items-center justify-center  ${getHeaderColor()}`}
                    >
                      <div className="w-full h-[0px] opacity-40  border-2 mt-2 border-[#0000004D] "></div>

                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/company">Company</Link>
                      </li>
                      <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/news">News</Link>
                      </li>
                      <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

                      <li className="px-3 py-2 hover:bg-primary hover:text-white ">
                        <Link href="/about/event">Event</Link>
                      </li>
                      <div className="w-full h-[0px] opacity-40  border-2 mt-2 border-[#0000004D] "></div>
                    </ul>
                  </div>
                )}
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative flex flex-col items-center w-full">
                <div className="flex items-center justify-center w-full">
                  <Link
                    href="/contact"
                    className="flex items-center"
                    onClick={handleLinkClick}
                  >
                    Products
                  </Link>
                  <svg
                    onClick={() => toggleAccordion(1)}
                    className="h-5 w-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === 1 && (
                  <div className="w-full">
                    <ul className="  ">
                    <div className="w-full h-[0px] opacity-40  border-2 mt-2 border-[#0000004D] "></div>

                      <li
                        className={`flex flex-col items-center justify-center  px-3 py-2 ${getHeaderColor()}`}
                        onMouseEnter={handleAreaHover}
                        onMouseLeave={handleAreaLeave}
                      >
                        <div className="flex justify-center items-center">
                        Oral Solid Dosage
                        <svg
                          className="h-5 w-5 ml-2"
                          
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        </div>
                        {areaDropdown && (
                          <ul
                            className={` mt-2 flex flex-col items-center justify-center  text-black ${getHeaderColor()}`}
                          >
                            <li className="px-3 py-2">
                              Antihypertensives
                            </li>
                            <li className="px-3 py-2">
                              Antihistamines
                            </li>
                            <li className="px-3 py-2">
                              Erectile Dysfunction
                            </li>
                            <li className="px-3 py-2">
                              Lipid Lowering Agents
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li className="relative">
                <Link href="/contact" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>
            </ul>
            <div className="px-[25px] mt-12 py-3 bg-primary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
