import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import PopularDestination from "./components/PopularDestination";
import HotelList from "./components/HotelList";
import TravelTips from "./components/TravelTips";
import Activities from "./components/Activities";
import AboutUs from "./components/AboutUs";

const Page: React.FC = () => {
   const navLinks = ["Home", "Destinations", "Hotels", "Tips", "About"];

   const popularDestinations = [
      { image: "/images/Bali.jpg", title: "Bali", subtitle: "Indonesia" },
      { image: "/images/Tokyo.jpg", title: "Tokyo", subtitle: "Japan" },
      { image: "/images/Paris.jpg", title: "Paris", subtitle: "France" },
      { image: "/images/NY.jpg", title: "New York", subtitle: "USA" },
      { image: "/images/Rome.jpg", title: "Rome", subtitle: "Italy" },
      { image: "/images/London.jpg", title: "London", subtitle: "UK" },
   ];

   const hotels = [
      {
         image: "/images/Hotel1.jpg",
         name: "Monastero Santa Rosa Hotel",
         location: "Salerno, Italy",
         rating: 5,
      },
      {
         image: "/images/hotel2.jpg",
         name: "Grand Hotel Tremezzo",
         location: "Lake Como, Italy",
         rating: 5,
      },
      {
         image: "/images/Hotel3.jpg",
         name: "The Oberoi Udaivilas, Udaipur",
         location: "Udaipur, India",
         rating: 5,
      },
      {
         image: "/images/hotel4.jpg",
         name: "AKA Beverly Hills",
         location: "Los Angeles, United States",
         rating: 5,
      },
   ];

   const travelTips = [
      {
         image: "/images/Ice Cream.jpg",
         title: "East Village Ice Cream Crawl",
         description:
            "Get ready for a sweet adventure like no other! Join us on the East Village Ice Cream Crawl, a 1.5-mile walking tour through one of the most vibrant neighborhoods in the city. Over the course of 1.5 hours",
         date: "Today",
         author: "Maria Philips",
         comments: 2,
      },
      {
         image: "/images/Bridge.jpg",
         title: "Brooklyn Bridge cinematic photo walk",
         description:
            "Capture the magic of New York like never before with this cinematic photo walk across the iconic Brooklyn Bridge. This experience takes place at Brooklyn Bridge Park and the bridge itself, offering breathtaking views of the Manhattan skyline",
         date: "Today",
         author: "James Caldwel",
         comments: 17,
      },
   ];

   return (
      <div>
         <NavBar logo="/images/logo.jpg" links={navLinks} />
         <HeroSection />
         <PopularDestination destinations={popularDestinations} />
         <HotelList hotels={hotels} />
         <TravelTips tips={travelTips} />
         <Activities />
         <AboutUs />
      </div>
   );
};

export default Page;
