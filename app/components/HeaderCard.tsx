import React from "react";

interface HeaderCardProps {
   image: string;
   title: string;
   description: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
   image,
   title,
   description,
}) => {
   return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
         <img src={image} alt={title} className="w-full h-40 object-cover" />
         <div className="p-4">
            <h3 className="text-md font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-xs text-gray-600">{description}</p>
         </div>
      </div>
   );
};

export default HeaderCard;
