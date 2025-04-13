import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  // State for animations based on scroll position
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // State for hover effects
  const [hoveredSocial, setHoveredSocial] = useState(null);
  
  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Once visible, no need to observe anymore
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
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

  return (
    <section 
      id="Contact" 
      ref={sectionRef}
      className="relative bg-black bg-gradient-to-br from-black via-gray-900 to-black py-24 overflow-hidden"
    >
      {/* Background image for mobile */}
      <div className="absolute inset-0 w-full h-full lg:hidden">
        <img 
          src="Classic1.jpeg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
      </div>
      
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-animation opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Text Content */}
          <div className={`lg:w-1/2 mb-12 lg:mb-0 ${isVisible ? 'animate-fade-slide-right' : 'opacity-0 translate-x-negative-20'}`}>
            <h2 className="text-6xl font-light mb-10 text-reveal">
              <span className="text-white reveal-text">LET'S </span>
              <span className="text-white reveal-text animation-delay-300">WORK</span>
              <br />
              <span className="text-blue-200 opacity-80 reveal-text animation-delay-600">TOGETHER</span>
            </h2>
            
            <p className={`text-gray-400 font-light text-xl leading-relaxed mb-12 max-w-md ${isVisible ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
              Have a project in mind or want to discuss your digital needs? 
              I'm here to help turn your vision into reality.
            </p>
            
            {/* Contact Person Info with animations */}
            <div className={`flex items-start mb-12 ${isVisible ? 'animate-fade-in animation-delay-1000' : 'opacity-0'}`}>
              <div className="mr-6 profile-image-container">
                <img 
                  src="Classic2.jpeg" 
                  alt="Anointing David" 
                  className="w-24 h-24 rounded-lg object-cover profile-image"
                />
              </div>
              <div>
                <h3 className="text-white text-2xl font-light mb-2">ANOINTING DAVID</h3>
                <p className="text-gray-400 font-light mb-1 hover-reveal-container">
                  <span className="hover-reveal-text">Okonkwoanointing1@gmail.com</span>
                </p>
              </div>
            </div>
            
            {/* Social Media Links with hover animations */}
            <div className={`mt-12 flex space-x-6 ${isVisible ? 'animate-fade-slide-up animation-delay-1200' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="https://www.facebook.com/share/16KNLyMQoD/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 hover:text-blue-200 transition-colors duration-300 social-icon-container ${hoveredSocial === 'facebook' ? 'social-hovered' : ''}`}
                onMouseEnter={() => setHoveredSocial('facebook')}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className="w-6 h-6 social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <span className="social-tooltip">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/davee0clock" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 hover:text-blue-200 transition-colors duration-300 social-icon-container ${hoveredSocial === 'instagram' ? 'social-hovered' : ''}`}
                onMouseEnter={() => setHoveredSocial('instagram')}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className="w-6 h-6 social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="social-tooltip">Instagram</span>
              </a>
              <a 
                href="https://www.tiktok.com/@rizzzzdave" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 hover:text-blue-200 transition-colors duration-300 social-icon-container ${hoveredSocial === 'tiktok' ? 'social-hovered' : ''}`}
                onMouseEnter={() => setHoveredSocial('tiktok')}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <svg className="w-6 h-6 social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.23 0 .45.03.68.08V9.4a6.17 6.17 0 00-1-.08A6.26 6.26 0 004 15.58a6.26 6.26 0 009.39 5.43 6.12 6.12 0 002.27-4.8V10.1a8.19 8.19 0 004.44 1.29v-3.4a4.83 4.83 0 01-1.76-.35z" />
                </svg>
                <span className="social-tooltip">TikTok</span>
              </a>
            </div>
            
            {/* Copyright with subtle animation */}
            <div className={`mt-16 text-gray-600 font-light text-sm copyright ${isVisible ? 'animate-fade-in animation-delay-1400' : 'opacity-0'}`}>
              © 2024 Anointing David. All rights reserved.
            </div>
          </div>
          
          {/* Right Column - Image with animations (only visible on desktop) */}
          <div className={`hidden lg:block lg:w-1/2 lg:pl-16 ${isVisible ? 'animate-fade-slide-left' : 'opacity-0 translate-x-20'}`}>
            <div className="w-full h-full relative">
              <div className="image-container">
                <img 
                  src="Classic1.jpeg" 
                  alt="Anointing David" 
                  className="w-full h-auto rounded-xl object-cover shadow-2xl main-image"
                />
              </div>
              
              {/* Animated decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-lg opacity-10 filter blur-xl glow-element blue-glow"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-500 rounded-lg opacity-10 filter blur-xl glow-element gray-glow"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        /* Basic fade-in animations */
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        
        /* Slide-in animations */
        .animate-fade-slide-right {
          animation: fadeSlideRight 1s ease forwards;
        }
        
        .animate-fade-slide-left {
          animation: fadeSlideLeft 1s ease forwards;
        }
        
        .animate-fade-slide-up {
          animation: fadeSlideUp 1s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeSlideRight {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeSlideLeft {
          from { 
            opacity: 0;
            transform: translateX(30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeSlideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Animation delays */
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        
        .animation-delay-1400 {
          animation-delay: 1400ms;
        }
        
        /* Transform utilities */
        .translate-x-negative-20 {
          transform: translateX(-20px);
        }
        
        .translate-x-20 {
          transform: translateX(20px);
        }
        
        .translate-y-8 {
          transform: translateY(8px);
        }
        
        /* Text reveal animation */
        .text-reveal {
          overflow: hidden;
          position: relative;
        }
        
        .reveal-text {
          display: inline-block;
          transform: translateY(100%);
          opacity: 0;
          animation: revealText 1s ease forwards;
        }
        
        @keyframes revealText {
          from {
            transform: translateY(50%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Profile image animation */
        .profile-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }
        
        .profile-image {
          transition: transform 0.6s ease;
        }
        
        .profile-image-container:hover .profile-image {
          transform: scale(1.1);
        }
        
        /* Email hover effect */
        .hover-reveal-container {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }
        
        .hover-reveal-text {
          position: relative;
          display: inline-block;
        }
        
        .hover-reveal-text::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #60a5fa;
          transition: width 0.3s ease;
        }
        
        .hover-reveal-container:hover .hover-reveal-text {
          color: #93c5fd;
        }
        
        .hover-reveal-container:hover .hover-reveal-text::after {
          width: 100%;
        }
        
        /* Social icon animations */
        .social-icon-container {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .social-icon {
          transition: transform 0.3s ease;
        }
        
        .social-icon-container:hover .social-icon {
          transform: translateY(-3px);
        }
        
        .social-hovered {
          transform: translateY(-3px);
        }
        
        /* Social tooltip */
        .social-tooltip {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: rgba(30, 41, 59, 0.9);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .social-icon-container:hover .social-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        /* Main image effects */
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .image-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .main-image {
          transition: transform 8s ease;
        }
        
        .image-container:hover .main-image {
          transform: scale(1.05);
        }
        
        /* Glow elements animation */
        .glow-element {
          transition: all 3s ease-in-out;
        }
        
        .blue-glow {
          animation: pulsateBlue 4s infinite alternate;
        }
        
        .gray-glow {
          animation: pulsateGray 5s infinite alternate;
        }
        
        @keyframes pulsateBlue {
          0% {
            opacity: 0.1;
            filter: blur(15px);
            transform: translateY(0) translateX(0);
          }
          100% {
            opacity: 0.2;
            filter: blur(20px);
            transform: translateY(-10px) translateX(10px);
          }
        }
        
        @keyframes pulsateGray {
          0% {
            opacity: 0.1;
            filter: blur(15px);
            transform: translateY(0) translateX(0);
          }
          100% {
            opacity: 0.15;
            filter: blur(25px);
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        /* Background gradient animation */
        .bg-gradient-animation {
          background: linear-gradient(45deg, #000000, #0a0a18, #0f172a, #020617);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
        
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Copyright subtle animation */
        .copyright {
          position: relative;
        }
        
        .copyright::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #4b5563;
          transition: width 0.8s ease;
        }
        
        .copyright:hover::after {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Contact;