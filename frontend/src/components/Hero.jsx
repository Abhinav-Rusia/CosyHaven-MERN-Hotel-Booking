import React from "react";
import heroImage2 from "../assets/heroImage2.jpg";
import { assets, cities } from "../assets/assets.js";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-start justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 text-white min-h-screen h-screen overflow-hidden">
      {/* Background image fallback */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage2})` }}
      ></div>

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col gap-3 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full w-fit">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm font-medium text-white">
            Premium Holiday Experience
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-100">
          Book Your Next
          <span className="block text-blue-400">Dream Stay</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-200 max-w-md">
          Discover exceptional hotels and luxury accommodations for your perfect
          getaway.
        </p>

        {/* Responsive Form */}
        <form className="bg-white text-gray-700 rounded-lg px-6 py-4 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mt-2">
          {/* Destination */}
          <div className="flex flex-col min-w-0">
            <label htmlFor="destinationInput" className="flex items-center gap-2 text-sm font-medium">
              <img src={assets.calenderIcon} className="h-4" alt="" />
              Destination
            </label>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="rounded border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none w-full"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Check-in */}
          <div className="flex flex-col min-w-0">
            <label htmlFor="checkIn" className="flex items-center gap-2 text-sm font-medium">
              <img src={assets.calenderIcon} className="h-4" alt="" />
              Check-in
            </label>
            <input
              id="checkIn"
              type="date"
              className="rounded border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none w-full"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col min-w-0">
            <label htmlFor="checkOut" className="flex items-center gap-2 text-sm font-medium">
              <img src={assets.calenderIcon} className="h-4" alt="" />
              Check-out
            </label>
            <input
              id="checkOut"
              type="date"
              className="rounded border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none w-full"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col min-w-0">
            <label htmlFor="guests" className="text-sm font-medium">
              Guests
            </label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="rounded border border-gray-300 px-3 py-1.5 mt-1 text-sm outline-none w-full"
              placeholder="0"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-md bg-black py-3 px-5 text-white text-sm hover:bg-gray-900 transition"
            >
              <img src={assets.searchIcon} className="h-5" alt="searchIcon" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
