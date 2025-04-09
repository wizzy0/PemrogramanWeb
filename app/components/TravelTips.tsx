"use client";
import React from "react";
import Image from "next/image";
import { CalendarDays, User, MessageCircle } from "lucide-react";

type Tip = {
   image: string;
   title: string;
   description: string;
   date: string;
   author: string;
   comments: number;
};

type TravelTipsProps = {
   tips: Tip[];
};

const TravelTips: React.FC<TravelTipsProps> = ({ tips }) => {
   return (
      <section className="bg-white py-12">
         <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-semibold text-black px-8">
                  Travel Tips and Advice
               </h2>
               <button className="text-sm text-purple-600 hover:underline px-8">
                  View all →
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
               {tips.map((tip, index) => (
                  <div
                     key={index}
                     className="flex bg-white shadow-sm rounded-xl overflow-hidden border"
                  >
                     <div className="w-1/3">
                        <Image
                           src={tip.image}
                           alt={tip.title}
                           width={300}
                           height={350}
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                           <h3 className="text-base font-semibold text-black mb-2">
                              {tip.title}
                           </h3>
                           <p className="text-sm text-gray-600 line-clamp-4">
                              {tip.description}
                           </p>
                        </div>
                        <div className="flex gap-4 items-center text-xs text-gray-500 mt-4">
                           <div className="flex items-center gap-1">
                              <CalendarDays size={14} /> {tip.date}
                           </div>
                           <div className="flex items-center gap-1">
                              <User size={14} /> {tip.author}
                           </div>
                           <div className="flex items-center gap-1">
                              <MessageCircle size={14} /> {tip.comments}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default TravelTips;
