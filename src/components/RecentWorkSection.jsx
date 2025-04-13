import React, { useState, useRef, useEffect } from 'react';

const RecentWorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('All'); // Kept for future expansion if needed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Project data with multiple images per project
  const projects = [
    {
      id: 1,
      initials: "OS",
      initialsColor: "bg-purple-500",
      title: "Osogeme - Viral Music Campaign",
      description: "Achieved over 1 million streams across platforms for the hit song 'Osogeme' by Wademix & CupidSZN. Featured on Nigeria's Viral 50 Spotify playlist and generated 50k+ TikTok videos.",
      tags: ["MUSIC MARKETING", "VIRAL CAMPAIGN"],
      images: ["/osogeme.jpeg", "/osogeme1.jpeg", "/osogeme2.jpeg"]
    },
    {
      id: 2,
      initials: "DP",
      initialsColor: "bg-orange-500",
      title: "Dey Play - Artist Promotion",
      description: "Successfully promoted 'Dey Play' by Bims, resulting in 340k+ streams and 35k+ TikTok videos within just 4 days of release. Created strategic social media templates that amplified reach.",
      tags: ["ARTIST PROMOTION", "SOCIAL MEDIA"],
      images: ["/deyplay.jpeg", "/deyplay1.jpeg"]
    },
    {
      id: 3,
      initials: "SW",
      initialsColor: "bg-green-500",
      title: "Swayvee - CapCut Template Campaign",
      description: "Developed a viral TikTok template for Swayvee's 'US' that gained 441k CapCut uses and 37k+ TikTok sound uses in just 5 days, demonstrating exceptional growth metrics.",
      tags: ["TIKTOK MARKETING", "CONTENT CREATION"],
      images: ["/swayvee.jpeg"]
    },
    {
      id: 4,
      initials: "DX",
      initialsColor: "bg-green-400",
      title: "Dxtiny - Babcook Template",
      description: "Created a viral TikTok and CapCut template 'Babcook' that accumulated 33.3k CapCut uses and 7k+ TikTok sound uses in just 4 days, showing rapid adoption across platforms.",
      tags: ["TIKTOK MARKETING", "CONTENT CREATION"],
      images: ["/dxtiny.jpeg"]
    },
    {
      id: 5,
      initials: "TT",
      initialsColor: "bg-pink-500",
      title: "Toyin Tomato - Streaming Growth",
      description: "Led the campaign for Toyin Tomato (ITAM) that reached 1 million+ Spotify streams in just 2 weeks. The song appeared on 6 Spotify viral charts and generated 80k+ TikTok videos.",
      tags: ["STREAMING PROMOTION", "DIGITAL MARKETING"],
      images: ["/tomato.jpeg", "/tomato1.jpeg", "/tomato2.jpeg"]
    }
  ];
  
  // Handler for next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handler for previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  
  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  // Open modal with project details
  const openModal = (project, imageIndex = 0) => {
    setModalProject(project);
    setModalImageIndex(imageIndex);
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
    // Allow body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };
  
  // Change image in modal
  const changeModalImage = (direction) => {
    if (!modalProject) return;
    
    if (direction === 'next') {
      setModalImageIndex((prevIndex) => 
        prevIndex === modalProject.images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setModalImageIndex((prevIndex) => 
        prevIndex === 0 ? modalProject.images.length - 1 : prevIndex - 1
      );
    }
  };
  
  // Direct selection of image in modal
  const selectModalImage = (index) => {
    setModalImageIndex(index);
  };
  
  // For keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          changeModalImage('prev');
          break;
        case 'ArrowRight':
          changeModalImage('next');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, modalProject]);
  
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

        {/* Filter Tabs - Simplified */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4">
            <h3 className="text-center text-white text-lg font-light">
              Elite Tribe Music Promotions
            </h3>
          </div>
        </div>

        {/* Navigation Instructions */}
        <div className="flex items-center justify-center mb-6 text-gray-400">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1z"></path>
          </svg>
          <span className="text-sm font-light">Use arrows to navigate projects</span>
        </div>

        {/* Projects Carousel */}
        <div className="mt-8 relative max-w-7xl mx-auto">
          {/* Left Navigation Arrow */}
          <button 
            className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 text-white rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
            onClick={goToPrevSlide}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Navigation Arrow */}
          <button 
            className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 text-white rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
            onClick={goToNextSlide}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Single Project Display */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="transition-all duration-500 ease-in-out"
            >
              {/* Current Project */}
              <div className="w-full mx-auto max-w-4xl">
                <div className="bg-gradient-to-r from-gray-900 to-green-900 bg-opacity-30 rounded-xl overflow-hidden">
                  <div className="p-8 lg:p-12 flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="lg:w-1/2 flex flex-col justify-between">
                      {/* Logo Circle */}
                      <div className="mb-6">
                        <div className={`${projects[currentIndex].initialsColor} text-white rounded-full h-12 w-12 flex items-center justify-center font-bold`}>
                          <span>{projects[currentIndex].initials}</span>
                        </div>
                      </div>
                      
                      {/* Project Title and Description */}
                      <div className="mb-8">
                        <h2 className="text-white text-3xl lg:text-4xl font-light mb-4 lg:mb-6">{projects[currentIndex].title}</h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                          {projects[currentIndex].description}
                        </p>
                      </div>
                      
                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {projects[currentIndex].tags.map((tag, index) => (
                          <div key={index} className="flex items-center text-blue-400 bg-blue-900 bg-opacity-20 px-3 py-1 rounded-full text-xs lg:text-sm">
                            <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                            </svg>
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Content - Project Image Gallery */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
                      <div className="relative w-full">
                        {/* Main Image */}
                        <div 
                          className="cursor-pointer"
                          onClick={() => openModal(projects[currentIndex])}
                        >
                          <img 
                            src={projects[currentIndex].images[0]} 
                            alt={projects[currentIndex].title} 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]" 
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <div className="text-white">
                              <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
                                <path fillRule="evenodd" d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                              </svg>
                              <p className="text-sm mt-2">Click to view gallery</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Thumbnail Preview if more than one image */}
                        {projects[currentIndex].images.length > 1 && (
                          <div className="flex mt-3 space-x-2 justify-center">
                            {projects[currentIndex].images.map((image, idx) => (
                              <div 
                                key={idx}
                                className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer ${idx === 0 ? 'ring-2 ring-blue-400' : 'opacity-70 hover:opacity-100'}`}
                                onClick={() => openModal(projects[currentIndex], idx)}
                              >
                                <img 
                                  src={image} 
                                  alt={`${projects[currentIndex].title} - ${idx + 1}`} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* View Project Button */}
                        <div className="absolute bottom-4 right-4">
                          <button 
                            className="bg-transparent border border-blue-300 text-blue-300 rounded-full px-4 py-2 lg:px-6 lg:py-3 text-xs lg:text-sm hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300"
                            onClick={() => openModal(projects[currentIndex])}
                          >
                            View Campaign Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {projects.map((project, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-blue-300' : 'bg-gray-600'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal for displaying project gallery */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={closeModal}>
          <div className="relative max-w-6xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button 
              className="absolute top-2 right-2 z-20 bg-gray-800 text-white rounded-full p-2"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Main image container */}
            <div className="relative h-full">
              <img 
                src={modalProject.images[modalImageIndex]} 
                alt={modalProject.title}
                className="mx-auto max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Project details */}
              <div className="bg-gray-900 bg-opacity-80 p-4 rounded-b-lg absolute bottom-0 left-0 right-0">
                <h3 className="text-white text-xl font-light">{modalProject.title}</h3>
                <p className="text-gray-300 text-sm">{modalProject.description}</p>
              </div>
              
              {/* Navigation arrows if more than one image */}
              {modalProject.images.length > 1 && (
                <>
                  <button 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
                    onClick={(e) => { e.stopPropagation(); changeModalImage('prev'); }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
                    onClick={(e) => { e.stopPropagation(); changeModalImage('next'); }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Thumbnail navigation */}
              {modalProject.images.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {modalProject.images.map((image, idx) => (
                    <div 
                      key={idx}
                      className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${
                        idx === modalImageIndex 
                          ? 'ring-2 ring-blue-400 opacity-100' 
                          : 'opacity-50 hover:opacity-80'
                      }`}
                      onClick={() => selectModalImage(idx)}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentWorkSection;