import React from 'react';

const Navbar = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="absolute top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* Logo Image */}
              <img 
                src="/Anointing.svg" 
                alt="BANG Media Logo" 
                className="h-10 mr-2"
              />
            </div>
          </div>
          
          {/* Get In Touch Button */}
          <button 
            className="bg-blue-100 bg-opacity-20 text-white px-6 py-3 rounded-full font-light text-sm hover:bg-opacity-30 transition-all duration-300"
            onClick={scrollToContact}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;