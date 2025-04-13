import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  // List of clients to display - keeping original list
  const clients = [
    "5IVE",
    "ELITETRIBE",
    "MARVINS", 
    "CHOCOLATE CITY",
    "ENCORE RECORDINGS"
  ];

  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Duplicate the array to create a seamless loop - keeping the original logic
  const duplicatedClients = [...clients, ...clients];
  
  return (
    <section 
      id="Clients" 
      ref={sectionRef}
      className={`bg-black bg-gradient-to-br from-black via-gray-900 to-black py-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Section Title with animation */}
        <div className={`text-center mb-8 transform ${isVisible ? 'animate-slide-down' : 'translate-y-negative-20 opacity-0'}`}>
          <h2 className="text-5xl font-light">
            <span className="text-white">Clients </span>
            <span className="text-blue-200 opacity-80">& Partners</span>
          </h2>
        </div>
        
        {/* Logos Marquee Container */}
        <div className={`relative overflow-hidden py-6 ${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
          <div className="overflow-hidden whitespace-nowrap">
            <div 
              className="inline-block marquee" 
              style={{
                minWidth: '100%'
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index} 
                  className={`inline-block w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg mx-5 align-middle client-item ${hoveredClient === index ? 'client-hovered' : ''}`}
                  onMouseEnter={() => setHoveredClient(index)}
                  onMouseLeave={() => setHoveredClient(null)}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className={`text-white text-xl font-light transition-colors duration-300 ${hoveredClient === index ? 'text-blue-300' : ''}`}>
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx>{`
        /* Base marquee animation */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee {
          animation: marquee 20s linear infinite;
        }
        
        /* Section fade in animation */
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Title slide down animation */
        .animate-slide-down {
          animation: slideDown 0.8s ease forwards;
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Fade in with delay */
        .animate-fade-in-delay {
          animation: fadeIn 1s ease forwards 0.3s;
        }
        
        /* Negative translate Y utility */
        .translate-y-negative-20 {
          transform: translateY(-20px);
        }
        
        /* Client item hover effect */
        .client-item {
          transition: all 0.3s ease;
        }
        
        .client-hovered {
          transform: scale(1.1);
          background-color: rgba(59, 130, 246, 0.2);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
        
        /* Pause animation on hover */
        .overflow-hidden:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;