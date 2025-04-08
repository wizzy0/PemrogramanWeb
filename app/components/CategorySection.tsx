import React from "react";

interface CategoryItem {
   image: string;
   title: string;
   subtitle?: string;
}

interface CategorySectionProps {
   title: string;
   items: CategoryItem[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, items }) => {
   return (
      <section className="py-10 px-6 bg-black">
         <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item, index) => (
               <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow"
               >
                  <img
                     src={item.image}
                     alt={item.title}
                     className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                     <h4 className="font-semibold text-sm text-gray-900">
                        {item.title}
                     </h4>
                     {item.subtitle && (
                        <p className="text-xs text-gray-500">{item.subtitle}</p>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default CategorySection;
