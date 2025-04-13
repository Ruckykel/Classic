import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  // Refs for intersection observer
  const statsRef = useRef(null);
  
  // State for number counters
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  
  // State to track if counting has started
  const [countStarted, setCountStarted] = useState(false);
  
  // Controls for stats animation
  const statsControls = useAnimation();

  // Stagger animation effect for children elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const glowAnimation = {
    opacity: [0.1, 0.2, 0.1],
    scale: [1, 1.05, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const imageRevealVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.5
      }
    },
  };
  
  // Setup intersection observer to trigger counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted) {
          statsControls.start("visible");
          startCounting();
          setCountStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsControls, countStarted]);

  // Counter animation function
  const startCounting = () => {
    // Years counter (0 to 5+)
    const yearsTarget = 5;
    const yearsDuration = 1500;
    const yearsIncrement = 20; // ms
    let yearsCurrentCount = 0;
    
    const yearsInterval = setInterval(() => {
      yearsCurrentCount += (yearsIncrement / yearsDuration) * yearsTarget;
      if (yearsCurrentCount >= yearsTarget) {
        setYearsCount(yearsTarget);
        clearInterval(yearsInterval);
      } else {
        setYearsCount(Math.floor(yearsCurrentCount));
      }
    }, yearsIncrement);

    // Projects counter (0 to 150+)
    const projectsTarget = 150;
    const projectsDuration = 2000;
    const projectsIncrement = 20; // ms
    let projectsCurrentCount = 0;
    
    const projectsInterval = setInterval(() => {
      projectsCurrentCount += (projectsIncrement / projectsDuration) * projectsTarget;
      if (projectsCurrentCount >= projectsTarget) {
        setProjectsCount(projectsTarget);
        clearInterval(projectsInterval);
      } else {
        setProjectsCount(Math.floor(projectsCurrentCount));
      }
    }, projectsIncrement);

    // Satisfaction counter (0 to 95%)
    const satisfactionTarget = 95;
    const satisfactionDuration = 1800;
    const satisfactionIncrement = 20; // ms
    let satisfactionCurrentCount = 0;
    
    const satisfactionInterval = setInterval(() => {
      satisfactionCurrentCount += (satisfactionIncrement / satisfactionDuration) * satisfactionTarget;
      if (satisfactionCurrentCount >= satisfactionTarget) {
        setSatisfactionCount(satisfactionTarget);
        clearInterval(satisfactionInterval);
      } else {
        setSatisfactionCount(Math.floor(satisfactionCurrentCount));
      }
    }, satisfactionIncrement);

    // Cleanup functions
    return () => {
      clearInterval(yearsInterval);
      clearInterval(projectsInterval);
      clearInterval(satisfactionInterval);
    };
  };

  return (
    <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black pt-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content - Text */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6"
              variants={itemVariants}
            >
              <span className="text-white">Hi, I'm Anointing David</span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 font-light text-xl leading-relaxed mb-5 max-w-xl"
              variants={itemVariants}
            >
              I specialize in bridging data-driven insights with creative execution to amplify artists, brands, and campaigns.
              With a keen eye on trends and a deep understanding of audience behavior towards the platform, I generate strategies that influence commitment, growth and massive impact.
            </motion.p>
            <motion.p 
              className="text-blue-200 opacity-80 font-light text-xl mb-10"
              variants={itemVariants}
            >
              Creating memories one at a time.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a 
                href="#Work" 
                className="inline-block bg-blue-100 bg-opacity-20 text-white px-8 py-4 rounded-full font-light text-sm hover:bg-opacity-30 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('Work').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(191, 219, 254, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
            </motion.div>
            
            {/* Stats with counter animation */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
              variants={statsVariants}
              initial="hidden"
              animate={statsControls}
              ref={statsRef}
            >
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <motion.div 
                  className="text-3xl font-light text-blue-200 opacity-80 flex items-end"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    } 
                  }}
                >
                  {yearsCount}
                  <span className="text-blue-200 opacity-80">+</span>
                </motion.div>
                <p className="text-gray-500 text-sm mt-1">Years Experience</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <motion.div 
                  className="text-3xl font-light text-blue-200 opacity-80 flex items-end"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    } 
                  }}
                >
                  {projectsCount}
                  <span className="text-blue-200 opacity-80">+</span>
                </motion.div>
                <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <motion.div 
                  className="text-3xl font-light text-blue-200 opacity-80 flex items-end"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6
                    } 
                  }}
                >
                  {satisfactionCount}
                  <span className="text-blue-200 opacity-80">%</span>
                </motion.div>
                <p className="text-gray-500 text-sm mt-1">Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Creator image */}
          <div className="lg:w-1/2 flex justify-start lg:justify-center pl-0 lg:pl-10">
            <div className="relative">
              {/* Circle blurred gradient backgrounds */}
              <motion.div 
                className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"
                animate={glowAnimation}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-10"
                animate={{
                  ...glowAnimation,
                  transition: {
                    ...glowAnimation.transition,
                    delay: 1
                  }
                }}
              ></motion.div>
              
              {/* Creator image */}
              <motion.div 
                className="relative z-10"
                variants={imageRevealVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.img 
                  src="/Classic.jpeg" 
                  alt="Anointing David" 
                  className="rounded-lg shadow-2xl border border-gray-800 h-auto w-auto max-w-md max-h-96 object-cover"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                />
                
                {/* Floating card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-gray-900 bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 shadow-xl"
                  animate={floatingAnimation}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 0.5,
                    y: {
                      delay: 1.5,
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="bg-blue-100 bg-opacity-20 rounded-full p-3"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(191, 219, 254, 0.3)" 
                      }}
                    >
                      <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-white text-sm font-medium">Anointing David</p>
                      <p className="text-gray-400 text-xs">Co-founder of elite tribe</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;