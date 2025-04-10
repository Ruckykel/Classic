import React from 'react';

const About = () => {
  return (
    <section id="About" className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-light">
            <span className="text-white">Our </span>
            <span className="text-blue-200 opacity-80">Story</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content - Text */}
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-light text-white mb-6">
              Meet <span className="text-blue-200 opacity-80">John Doe</span>, 
              <br />Founder & Creative Director
            </h3>
            
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
              With over 15 years of experience in digital marketing and design, John has built BANG Media from the ground up with a single mission: creating digital experiences that truly connect with audiences.
            </p>
            
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
              After working with major brands like Nike, Apple, and Tesla, John recognized that businesses of all sizes deserve exceptional digital presence. This belief led to the formation of BANG Media in 2010, a boutique agency that combines corporate-level expertise with personalized attention.
            </p>
            
            {/* Quote */}
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border-l-4 border-blue-300 mb-10">
              <p className="text-white italic font-light text-xl leading-relaxed mb-4">
                "Great design isn't just about aesthetics—it's about creating meaningful connections between brands and their audiences. That's where the magic happens."
              </p>
              <p className="text-blue-200 font-light">— John Doe</p>
            </div>
            
            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Award-winning</span>
                </div>
                <p className="text-gray-500 font-light pl-11">5x Design Award recipient</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Educator</span>
                </div>
                <p className="text-gray-500 font-light pl-11">Guest lecturer at Design School</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Speaker</span>
                </div>
                <p className="text-gray-500 font-light pl-11">TED talk on Digital Innovation</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Mentor</span>
                </div>
                <p className="text-gray-500 font-light pl-11">Advised 50+ startups</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Creator image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative mt-12 lg:mt-0">
              {/* Circle blurred gradient backgrounds */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
              
              {/* Main image */}
              <div className="relative z-10 mb-6">
                <img 
                  src="/Classic.jpeg" 
                  alt="John Doe - Founder & Creative Director" 
                  className="rounded-lg shadow-2xl border border-gray-800 h-auto max-w-md"
                />
                
                {/* Decorative dot pattern */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gray-900 rounded-lg z-0">
                  <div className="w-full h-full relative">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-4 left-8 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-4 left-12 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-4 left-16 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-8 left-4 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-8 left-8 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-8 left-12 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-8 left-16 w-2 h-2 bg-blue-300 rounded-full"></div>
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

export default About;