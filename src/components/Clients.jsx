import React, { useEffect } from 'react';

const Clients = () => {
  // This effect sets up the infinite scrolling animation
  useEffect(() => {
    const setupMarquee = () => {
      const marquees = document.querySelectorAll('.marquee-content');
      
      marquees.forEach(marquee => {
        // Clone the content for a seamless loop
        const content = marquee.innerHTML;
        marquee.innerHTML = content + content;
      });
    };
    
    setupMarquee();
  }, []);

  return (
    <section id="Clients" className="bg-black bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-light">
            <span className="text-white">Clients </span>
            <span className="text-blue-200 opacity-80">& Partners</span>
          </h2>
        </div>
        
        {/* Logos Marquee Container - Single Line */}
        <div className="relative overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content flex space-x-12 py-4 animate-marquee">
              {/* Client Logos - Single Row */}
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">ICTIVITY</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">BIGWHEEL</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">COFFEE BROS</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">MARITIEM</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">DOIJER&KALFF</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">DE KLUIS</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">TECH CORP</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">FUSION</div>
              </div>
              <div className="flex-shrink-0 w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center px-5">
                <div className="text-white text-xl font-light">NEXUS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee-container {
          overflow: hidden;
          width: 100%;
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
          min-width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Clients;