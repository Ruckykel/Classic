import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // State for hover effects
  const [buttonHovered, setButtonHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPosition(currentScrollPos);
      
      // Hide navbar when scrolled down, only show at the very top
      if (currentScrollPos > 50) {
        setIsVisible(false);
        setHasScrolled(true);
      } else {
        setIsVisible(true);
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        !isVisible ? '-translate-y-full' : 'translate-y-0'
      } ${
        hasScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo with animation */}
          <div 
            className="flex-shrink-0 transform transition-all duration-500 opacity-100 translate-x-0"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className="flex items-center relative">
              {/* Logo pulse effect */}
              <div 
                className={`absolute inset-0 bg-blue-400 bg-opacity-20 rounded-full filter blur-md scale-90 transition-all duration-300 ${
                  logoHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
                }`}
              ></div>
              
              {/* Logo Image */}
              <img 
                src="/Anointing.svg" 
                alt="BANG Media Logo" 
                className={`h-10 mr-2 relative z-10 transition-transform duration-300 ${
                  logoHovered ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>
          
          {/* Get In Touch Button with animation */}
          <div className="transform transition-all duration-500 opacity-100 translate-x-0">
            <button 
              className={`relative overflow-hidden bg-blue-100 bg-opacity-20 text-white px-6 py-3 rounded-full font-light text-sm transition-all duration-300 ${
                buttonHovered ? 'bg-opacity-30 pl-8' : ''
              }`}
              onClick={scrollToContact}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              {/* Button hover effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent opacity-20 transform transition-transform duration-500 ${
                  buttonHovered ? 'translate-x-0' : '-translate-x-full'
                }`}
              ></div>
              
              {/* Button text */}
              <span className="relative z-10">
                {/* Icon that appears on hover */}
                <span 
                  className={`inline-block mr-1 transition-all duration-300 ${
                    buttonHovered ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-4 scale-0'
                  }`}
                >
                  <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Progress bar indicating scroll position */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
        style={{
          width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
          opacity: hasScrolled ? 0.6 : 0,
          transition: 'width 0.2s ease, opacity 0.3s ease'
        }}
      ></div>
    </nav>
  );
};

export default Navbar;