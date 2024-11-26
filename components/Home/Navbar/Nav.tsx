"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

export const navLinks = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/about", label: "About" },
  { id: 3, url: "#", label: "Sponsors" },
  { id: 4, url: "#", label: "Events" },
  { id: 5, url: "#", label: "Activity" },
  { id: 6, url: "#", label: "Contact" },
];

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) setNavBg(true);
      if (window.scrollY < 100) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-blue-100 shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/nonBg-logo.png"
            alt="Logo"
            className="h-10 md:h-12"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10 ml-15 ">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Burger Menu */}
        <HiBars3
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
