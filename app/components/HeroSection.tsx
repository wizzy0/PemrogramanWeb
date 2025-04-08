"use client";
import React from "react";
import SearchBar from "./SearchBar";

const HeroSection: React.FC = () => {
   return (
      <section className="relative rounded-b-3xl overflow-hidden">
         <div className="absolute inset-0 -z-10">
            <div
               className="w-full h-full bg-cover bg-center"
               style={{ backgroundImage: 'url("/images/globe.jpg")' }}
            ></div>
         </div>
         <div className="text-center py-24 px-4">
            <h1 className="text-4xl font-bold mb-6 text-white">
               Discover the most engaging places
            </h1>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full mb-6">
               Explore all destinations
            </button>
            <SearchBar />
         </div>
      </section>
   );
};

export default HeroSection;
