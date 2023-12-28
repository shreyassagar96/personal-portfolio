"use client";
import React, { useState } from "react";
import Link from "next/link";

import { FiHome } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { HiMenuAlt2 } from "react-icons/hi";

const navData = {
  nav: [
    {
      link: "#home",
      icon: <FiHome />,
    },
    {
      link: "#about",
      icon: <IoPerson />,
    },
    {
      link: "#projects",
      icon: <FaLaptopCode />,
    },
    {
      link: "#contact",
      icon: <GrContact />,
    },
  ],
};

const Navbar = () => {
  const { nav } = navData;

  const [active, setActive] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="w-full flex justify-center">
      <div
        data-aos="slide-right"
        data-aos-delay="200"
        className="sm:cursor-pointer fixed sm:fixed lg:fixed md:fixed xl:fixed top-10 left-10 z-[999] rounded-lg bg-secondary p-2 md:mr-5 sm:mr-4 mb-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={25} className="text-black" />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-secondary  duration-300 md:w-fit ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <Link
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              i === active && "text-black bg-primary-400"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
