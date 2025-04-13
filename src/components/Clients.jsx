import React from 'react';

const Clients = () => {
  // List of clients to display
  const clients = [
    "5IVE",
    "ELITETRIBE",
    "MARVINS", 
    "CHOCOLATE CITY",
    "ENCORE RECORDINGS"
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];
  
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
        
        {/* Logos Marquee Container */}
        <div className="relative overflow-hidden py-6">
          <div className="overflow-hidden whitespace-nowrap">
            <div 
              className="inline-block animate-marquee" 
              style={{
                animation: 'marquee 20s linear infinite',
                minWidth: '100%'
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index} 
                  className="inline-block w-40 h-16 bg-gray-900 bg-opacity-50 rounded-lg mx-5 align-middle"
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="text-white text-xl font-light">{client}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `
      }} />
    </section>
  );
};

export default Clients;