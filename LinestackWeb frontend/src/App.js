import React from "react";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-auto bg-white/80 backdrop-blur-lg shadow-lg rounded-full px-8 py-3 z-50">
        <div className="flex items-center justify-between space-x-8">
          <h1 className="text-lg font-bold text-blue-600">Linestack</h1>
          <ul className="flex space-x-6">
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
                href="#case-studies"
                className="text-gray-800 hover:text-blue-600 transition duration-300"
              >
                Case Studies
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
        <h1 className="text-5xl font-extrabold mb-6">Linestack</h1>
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
          Linestack specializes in delivering tailored solutions that combine
          finance expertise with state-of-the-art technology.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
              <p className="text-gray-600">
                Streamlined data management for better insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Visualization</h3>
              <p className="text-gray-600">
                Transforming complex data into actionable visuals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Automation</h3>
              <p className="text-gray-600">
                Empowering businesses with cutting-edge automation tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Discover how Linestack delivers impactful solutions for financial
            challenges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold mb-2">Financial Platforms</h3>
              <p className="text-gray-600">
                Developing innovative financial systems and tools.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold mb-2">Automated Solutions</h3>
              <p className="text-gray-600">
                Streamlined processes for increased efficiency.
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
          href="mailto:contact@linestack.eu"
          className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2024 Linestack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;