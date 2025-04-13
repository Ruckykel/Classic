import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black pt-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content - Text */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              <span className="text-white">Hi, I'm Anointing David</span>
            </h1>
            <p className="text-gray-400 font-light text-xl leading-relaxed mb-5 max-w-xl">
              I specialize in bridging data-driven insights with creative execution to amplify artists, brands, and campaigns.
              With a keen eye on trends and a deep understanding of audience behavior towards the platform, I generate strategies that influence commitment, growth and massive impact.
            </p>
            <p className="text-blue-200 opacity-80 font-light text-xl mb-10">
              Creating memories one at a time.
            </p>
            <div>
              <a 
                href="#Work" 
                className="inline-block bg-blue-100 bg-opacity-20 text-white px-8 py-4 rounded-full font-light text-sm hover:bg-opacity-30 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('Work').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <p className="text-3xl font-light text-blue-200 opacity-80">5+</p>
                <p className="text-gray-500 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-blue-200 opacity-80">150+</p>
                <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-light text-blue-200 opacity-80">95%</p>
                <p className="text-gray-500 text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Creator image */}
          <div className="lg:w-1/2 flex justify-start lg:justify-center pl-0 lg:pl-10">
            <div className="relative">
              {/* Circle blurred gradient backgrounds */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
              
              {/* Creator image */}
              <div className="relative z-10">
                <img 
                  src="/Classic.jpeg" 
                  alt="Anointing David" 
                  className="rounded-lg shadow-2xl border border-gray-800 h-auto w-auto max-w-md max-h-96 object-cover"
                />
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-gray-900 bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 bg-opacity-20 rounded-full p-3">
                      <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Anointing David</p>
                      <p className="text-gray-400 text-xs">Co-founder of elite tribe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;