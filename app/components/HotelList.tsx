"use client";
import React from "react";
import { Star } from "lucide-react";

interface Hotel {
   image: string;
   name: string;
   location: string;
   rating: number;
}

interface HotelListProps {
   hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
   return (
      <section className="bg-white py-10 px-6 text-black">
         <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-semibold">Hotels and Restaurants</h2>
               <button className="text-sm text-purple-600 hover:underline flex items-center gap-1">
                  View all <span>→</span>
               </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
               {hotels.map((hotel, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                     <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-40 object-cover rounded-t-xl"
                     />
                     <div className="p-4">
                        <h3 className="text-md font-semibold mb-1">
                           {hotel.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                           {hotel.location}
                        </p>
                        <div className="flex items-center space-x-1">
                           {Array.from({ length: hotel.rating }, (_, i) => (
                              <Star
                                 key={i}
                                 size={14}
                                 className="text-yellow-500 fill-yellow-500"
                              />
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default HotelList;
