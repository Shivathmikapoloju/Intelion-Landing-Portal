 
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-6xl font-extrabold mb-4">Welcome to Intelion</h1>
      <p className="text-lg text-gray-200 mb-6">Empowering Financial Innovation for a Digital World</p>
      <a href="#features" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Explore More</a>
    </section>
  );
};

export default Hero;

