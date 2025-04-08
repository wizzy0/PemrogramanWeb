import React from "react";

const AboutUs: React.FC = () => {
   return (
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-black">
         <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
               <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  About Us
               </h2>
               <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a sapien justo. Nulla facilisis tristique
                  imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam
                  porta consectetur lorem sit amet ultricies. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
               </p>
               <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm text-purple-600 border border-purple-300 rounded-full hover:bg-purple-50 transition"
               >
                  Read more →
               </a>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
               <img
                  src="/images/About Us.jpg"
                  alt="About us"
                  className="rounded-2xl w-full h-auto object-cover"
               />
            </div>
         </div>
      </section>
   );
};

export default AboutUs;
