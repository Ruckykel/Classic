import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="relative bg-black bg-gradient-to-br from-black via-gray-900 to-black py-24">
      {/* Background image for mobile */}
      <div className="absolute inset-0 w-full h-full lg:hidden">
        <img 
          src="Classic1.jpeg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-6xl font-light mb-10">
              <span className="text-white">LET'S </span>
              <span className="text-white">WORK</span>
              <br />
              <span className="text-blue-200 opacity-80">TOGETHER</span>
            </h2>
            
            <p className="text-gray-400 font-light text-xl leading-relaxed mb-12 max-w-md">
              Have a project in mind or want to discuss your digital needs? 
              I'm here to help turn your vision into reality.
            </p>
            
            {/* Contact Person Info */}
            <div className="flex items-start mb-12">
              <div className="mr-6">
                <img 
                  src="Classic2.jpeg" 
                  alt="Anointing David" 
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-white text-2xl font-light mb-2">ANOINTING DAVID</h3>
                <p className="text-gray-400 font-light mb-1">Okonkwoanointing1@gmail.com</p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12 flex space-x-6">
              <a href="https://www.facebook.com/share/16KNLyMQoD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/davee0clock" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@rizzzzdave" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-200 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.23 0 .45.03.68.08V9.4a6.17 6.17 0 00-1-.08A6.26 6.26 0 004 15.58a6.26 6.26 0 009.39 5.43 6.12 6.12 0 002.27-4.8V10.1a8.19 8.19 0 004.44 1.29v-3.4a4.83 4.83 0 01-1.76-.35z" />
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <div className="mt-16 text-gray-600 font-light text-sm">
              © 2024 Anointing David. All rights reserved.
            </div>
          </div>
          
          {/* Right Column - Image (only visible on desktop) */}
          <div className="hidden lg:block lg:w-1/2 lg:pl-16">
            <div className="w-full h-full relative">
              <img 
                src="Classic1.jpeg" 
                alt="Anointing David" 
                className="w-full h-auto rounded-xl object-cover shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-lg opacity-10 filter blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-500 rounded-lg opacity-10 filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;