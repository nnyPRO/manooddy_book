"use client";
{
  /* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=FreeMono:wght@400;700&display=swap"
/>; */
}
// import 'package:google_fonts/google_fonts.dart';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-[#FFACCA] fixed top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/" prefetch={false}>
              <h2 className="text-3xl text-[#712573] font-bold hover:text-[#b763b9]">
                manooddyBook
              </h2>
              {/* HAMBURGER BUTTON FOR MOBILE */}
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border hover:scale-110 hover:bg-[#c9a5c9]"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/Icon/Close.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                    // className="hover:invert-34 hover:sepia-44 hover:saturate-1070 hover:hue-rotate-253 hover:brightness-98 hover:contrast-105"
                  />
                ) : (
                  <Image
                    src="/Icon/Hamburger.svg"
                    alt="Hamburger menu"
                    width={30}
                    height={30}
                    priority
                    // className="hover:invert-34 hover:sepia-44 hover:saturate-1070 hover:hue-rotate-253 hover:brightness-98 hover:contrast-105"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-xl text-[#712573] py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#D996DB]  border-purple-900  md:hover:text-[#D996DB] md:hover:bg-transparent">
                  Home
                </li>
              </Link>
              <Link href="/cart" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-xl text-[#712573] py-5 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#D996DB]  border-purple-900  md:hover:text-[#D996DB] md:hover:bg-transparent">
                  Cart
                </li>
              </Link>
              <Link href="/chat" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-xl text-[#712573] py-5 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#D996DB]  border-purple-900  md:hover:text-[#D996DB] md:hover:bg-transparent">
                  Chat
                </li>
              </Link>
              <Link href="/profile" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-xl text-[#712573] py-5 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#D996DB]  border-purple-900  md:hover:text-[#D996DB] md:hover:bg-transparent">
                  Profile
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
