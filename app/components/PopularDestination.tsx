"use client";
import React from "react";

interface Destination {
   image: string;
   title: string;
   subtitle: string;
}

interface PopularDestinationProps {
   destinations: Destination[];
}

const PopularDestination: React.FC<PopularDestinationProps> = ({
   destinations,
}) => {
   return (
      <div className="bg-white py-10 px-6">
         <h2 className="text-black text-2xl font-bold mb-15 text-left max-w-6xl mx-auto">
            Popular Destinations
         </h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {destinations.map((item, index) => (
               <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2"
               >
                  <img
                     src={item.image}
                     alt={item.title}
                     className="w-full h-35 object-cover rounded-xl"
                  />
                  <h4 className="font-semibold text-md text-gray-900">
                     {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PopularDestination;
