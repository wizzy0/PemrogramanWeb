"use client";
import React from "react";
import {
   FaMapMarkerAlt,
   FaCalendarAlt,
   FaUsers,
   FaSuitcase,
   FaSearch,
} from "react-icons/fa";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
   return (
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-6xl mx-auto mt-6">
         <div className="flex items-center gap-4">
            <div className="flex-grow flex gap-4">
               <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <input
                     type="text"
                     placeholder="Location"
                     className="w-full focus:outline-none text-black"
                  />
               </div>
               <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                  <FaSuitcase className="text-gray-500" />
                  <input
                     type="text"
                     placeholder="Activity"
                     className="w-full focus:outline-none text-black"
                  />
               </div>
               <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <input
                     type="text"
                     placeholder="When"
                     className="w-full focus:outline-none text-black"
                  />
               </div>
               <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                  <FaUsers className="text-gray-500" />
                  <input
                     type="text"
                     placeholder="Guests"
                     className="w-full focus:outline-none text-black"
                  />
               </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
               <FaSearch />
            </button>
         </div>
      </div>
   );
};

export default SearchBar;
