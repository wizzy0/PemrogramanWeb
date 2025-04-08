// components/Activities.tsx

import React from "react";

const activities = [
   { image: "/images/Sailing.jpg", title: "Sailing" },
   { image: "/images/Climbing.jpg", title: "Climbing" },
   { image: "/images/Skiing.jpg", title: "Skiing" },
   { image: "/images/Hiking.jpg", title: "Hiking" },
];

const Activities: React.FC = () => {
   return (
      <section className="bg-white text-black px-6 md:px-12 lg:px-24 py-12">
         <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">Activities</h2>
            <a
               href="#"
               className="text-sm text-purple-600 hover:underline flex items-center gap-1"
            >
               View all <span className="text-xs">➜</span>
            </a>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
               <div key={index} className="rounded-xl overflow-hidden bg-white">
                  <img
                     src={activity.image}
                     alt={activity.title}
                     className="w-full h-80 object-cover rounded-xl"
                  />
                  <p className="mt-2 text-sm text-left font-medium">
                     {activity.title}
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Activities;
