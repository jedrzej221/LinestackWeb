import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Smooth scroll setup
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach((link) =>
      link.addEventListener("click", handleScroll)
    );

    return () => {
      menuLinks.forEach((link) =>
        link.removeEventListener("click", handleScroll)
      );
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-auto bg-white/80 backdrop-blur- shadow-lg rounded-full px-8 py-3 z-50">
        <div className="flex items-center justify-between space-x-6">
          <span className="text-gray-800 text-xl font-semibold">AlphaSnap</span>
          <button
            className="sm:hidden block focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-800"></span>
          </button>
          <ul className="hidden sm:flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">AlphaSnap</h1>
        <p className="text-xl mb-8">
          Redefining financial solutions with cutting-edge technology.
        </p>
        <a
          href="#services"
          className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Explore More
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          AlphaSnap specializes in delivering tailored solutions that combine
          finance expertise with state-of-the-art technology.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-purple-700 to-blue-600 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#F3F4F6] p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                Custom Software Development
              </h3>
              <p className="text-gray-700">
                Tailored software solutions to meet your unique business requirements.
              </p>
            </div>
            <div className="bg-[#F3F4F6] p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                Dedicated IT Team
              </h3>
              <p className="text-gray-700">
                A specialized team of experts fully focused on your projects.
              </p>
            </div>
            <div className="bg-[#F3F4F6] p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                AI Solutions Development
              </h3>
              <p className="text-gray-700">
                Creating intelligent systems to automate and enhance processes.
              </p>
            </div>
            <div className="bg-[#F3F4F6] p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                IT Consulting
              </h3>
              <p className="text-gray-700">
                Professional advice to improve your IT infrastructure and strategy.
              </p>
            </div>
            <div className="bg-[#F3F4F6] p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                Web Application Development
              </h3>
              <p className="text-gray-700">
                Building responsive and scalable web apps to grow your business.
              </p>
            </div>
            <div className="bg-[#F3F4F6] p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">
                Mobile Application Development
              </h3>
              <p className="text-gray-700">
                Crafting user-friendly mobile apps for iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-purple-700 to-blue-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8">We’d love to discuss your next project.</p>
        <a
          href="mailto:jedrzej.maciejewski@linestack.eu"
          className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        <p>&copy; Copyright 2025 AlphaSnap Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
