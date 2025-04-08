"use client";
import React from "react";

interface NavBarProps {
   logo: string;
   links: string[];
}

const NavBar: React.FC<NavBarProps> = ({ logo, links }) => {
   return (
      <nav className="bg-black text-white py-4">
         <div className="max-w-6xl mx-auto flex justify-center items-center relative">
            <div className="absolute left-0">
               <img src={logo} alt="Logo" className="h-10" />
            </div>
            <ul className="flex gap-8">
               {links.map((link, i) => (
                  <li key={i} className="hover:text-purple-400 cursor-pointer">
                     {link}
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default NavBar;
