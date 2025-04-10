import React, { useState, useRef, useEffect } from 'react';

const RecentWorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const carouselRef = useRef(null);
  
  // Handle mouse/touch events for smooth sliding
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
    setScrollPosition(carouselRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
    setScrollPosition(carouselRef.current.scrollLeft);
  };
  
  // Add event listeners to document
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);
  
  // Project data
  const projects = [
    {
      id: 1,
      initials: "SDG",
      initialsColor: "bg-orange-500",
      title: "Same Day Granny Flats",
      description: "A national, well-recognised brand combining corporate scale with local expertise, brought to life through a modern website and a results-driven digital marketing campaign.",
      tags: ["DIGITAL MARKETING", "WEB DESIGN & DEV"],
      image: "/HeroImg.webp"
    },
    {
      id: 2,
      initials: "TT",
      initialsColor: "bg-blue-500",
      title: "TikTok Influencer Campaign",
      description: "Viral social media campaign that increased brand awareness by 240% through strategic influencer partnerships and trending sound utilization.",
      tags: ["SOCIAL MEDIA", "INFLUENCER MARKETING"],
      image: "/HeroImg.webp"
    },
    {
      id: 3,
      initials: "SP",
      initialsColor: "bg-purple-500",
      title: "Spotify Podcast Series",
      description: "Developed a complete podcast identity including cover art, promotional materials, and a content strategy that grew listenership by 300% in three months.",
      tags: ["AUDIO PRODUCTION", "BRAND STRATEGY"],
      image: "/HeroImg.webp"
    },
    {
      id: 4,
      initials: "IG",
      initialsColor: "bg-pink-500",
      title: "Instagram Reels Strategy",
      description: "Content strategy focused on short-form video that increased engagement by 180% and follower growth by 5,000 accounts in a single quarter.",
      tags: ["CONTENT CREATION", "SOCIAL GROWTH"],
      image: "/HeroImg.webp"
    }
  ];
  
  return (
    <section id='Work' className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Recent Work Title */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-6xl font-light">
            <span className="text-blue-200 opacity-80">Recent</span>
            <span className="text-white"> Work</span>
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-900 bg-opacity-50 rounded-lg p-1">
            {/* Filter Options */}
            <div className="flex flex-wrap justify-center p-4 gap-6 text-sm">
              <button 
                className={`${activeFilter === 'All' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('All')}
              >
                All
              </button>
              <button 
                className={`${activeFilter === 'Social Media' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('Social Media')}
              >
                Social Media
              </button>
              <button 
                className={`${activeFilter === 'Content Creation' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('Content Creation')}
              >
                Content Creation
              </button>
              <button 
                className={`${activeFilter === 'Influencer Marketing' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('Influencer Marketing')}
              >
                Influencer Marketing
              </button>
              <button 
                className={`${activeFilter === 'Brand Strategy' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('Brand Strategy')}
              >
                Brand Strategy
              </button>
              <button 
                className={`${activeFilter === 'Video Production' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('Video Production')}
              >
                Video Production
              </button>
              <button 
                className={`${activeFilter === 'Audio Production' ? 'text-white' : 'text-gray-400'} font-light hover:text-white`}
                onClick={() => setActiveFilter('Audio Production')}
              >
                Audio Production
              </button>
            </div>
          </div>
        </div>

        {/* Swipe Indicator */}
        <div className="flex items-center justify-center mb-6 text-gray-400">
          <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1zM4 9a1 1 0 011-1h2a1 1 0 010 2H5a1 1 0 01-1-1zM12 9a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"></path>
          </svg>
          <span className="text-sm font-light">Swipe for more projects</span>
        </div>

        {/* Projects Carousel */}
        <div className="mt-8 relative max-w-7xl mx-auto">
          {/* Left Navigation Arrow - Positioned at left edge */}
          <button 
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-gray-900 bg-opacity-70 text-white rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
            onClick={() => {
              if (carouselRef.current) {
                // Calculate previous card position
                const currentIndex = Math.round(scrollPosition / (carouselRef.current.scrollWidth / projects.length));
                const prevIndex = Math.max(0, currentIndex - 1);
                const newPosition = prevIndex * (carouselRef.current.scrollWidth / projects.length);
                
                carouselRef.current.scrollTo({
                  left: newPosition,
                  behavior: 'smooth'
                });
                setScrollPosition(newPosition);
              }
            }}
            style={{ opacity: scrollPosition > 20 ? 1 : 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow - Positioned at right edge */}
          <button 
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-gray-900 bg-opacity-70 text-white rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
            onClick={() => {
              if (carouselRef.current) {
                // Calculate next card position
                const currentIndex = Math.round(scrollPosition / (carouselRef.current.scrollWidth / projects.length));
                const nextIndex = Math.min(projects.length - 1, currentIndex + 1);
                const newPosition = nextIndex * (carouselRef.current.scrollWidth / projects.length);
                
                carouselRef.current.scrollTo({
                  left: newPosition,
                  behavior: 'smooth'
                });
                setScrollPosition(newPosition);
              }
            }}
            style={{ 
              opacity: carouselRef.current 
                ? scrollPosition < (carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 20) ? 1 : 0.3
                : 1 
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-8"
              style={{ 
                scrollBehavior: isDragging ? 'auto' : 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              onScroll={() => {
                if (carouselRef.current) {
                  setScrollPosition(carouselRef.current.scrollLeft);
                }
              }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-shrink-0 w-full md:w-[90%] lg:w-[80%] xl:w-[70%]"
                >
                  <div className="bg-gradient-to-r from-gray-900 to-green-900 bg-opacity-30 rounded-xl overflow-hidden">
                    <div className="p-8 lg:p-12 flex flex-col lg:flex-row">
                      {/* Left Content */}
                      <div className="lg:w-1/2 flex flex-col justify-between">
                        {/* Logo Circle */}
                        <div className="mb-6">
                          <div className={`${project.initialsColor} text-white rounded-full h-12 w-12 flex items-center justify-center font-bold`}>
                            <span>{project.initials}</span>
                          </div>
                        </div>
                        
                        {/* Project Title and Description */}
                        <div className="mb-8">
                          <h2 className="text-white text-3xl lg:text-4xl font-light mb-4 lg:mb-6">{project.title}</h2>
                          <p className="text-gray-400 font-light leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Project Tags */}
                        <div className="flex flex-wrap gap-3 mt-auto">
                          {project.tags.map((tag, index) => (
                            <div key={index} className="flex items-center text-blue-400 bg-blue-900 bg-opacity-20 px-3 py-1 rounded-full text-xs lg:text-sm">
                              <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                              </svg>
                              <span>{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Content - Project Image */}
                      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="rounded-lg shadow-2xl w-full h-auto" 
                          />
                          
                          {/* View Project Button */}
                          <div className="absolute bottom-4 right-4">
                            <button className="bg-transparent border border-blue-300 text-blue-300 rounded-full px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300">
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {projects.map((project, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  scrollPosition > (index * carouselRef.current?.offsetWidth / projects.length) - 50 && 
                  scrollPosition < ((index + 1) * carouselRef.current?.offsetWidth / projects.length) - 50
                    ? 'bg-blue-300' 
                    : 'bg-gray-600'
                }`}
                onClick={() => {
                  if (carouselRef.current) {
                    const scrollTo = index * (carouselRef.current.scrollWidth / projects.length);
                    carouselRef.current.scrollTo({
                      left: scrollTo,
                      behavior: 'smooth'
                    });
                    setScrollPosition(scrollTo);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for hiding scrollbars */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default RecentWorkSection;