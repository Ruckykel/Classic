import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Variants for staggered animations
  const sectionVariants = {
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

  // Variants for the experience highlights grid
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
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

  // Animation for the quote block
  const quoteVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 }
    }
  };

  // Dot pattern animation
  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 1 + (custom * 0.1),
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <section id="About" className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-6xl font-light">
            <motion.span 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our 
            </motion.span>
            {" "}
            <motion.span 
              className="text-blue-200 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Story
            </motion.span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content - Text */}
          <motion.div 
            className="lg:w-1/2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              className="text-4xl font-light text-white mb-6"
              variants={itemVariants}
            >
              Meet <span className="text-blue-200 opacity-80">Anointing David</span>, 
              <br />Founder & Community Lead
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 font-light text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              A seasoned social media strategist and influencer with six years of invaluable experience.
              Throughout my career, I've been dedicated to nurturing the creative talents of aspiring artists 
              and effectively leveraging social media to engage, inspire, and influence a wide audience.
            </motion.p>
            
            <motion.p 
              className="text-gray-400 font-light text-lg leading-relaxed mb-8"
              variants={itemVariants}
            >
              A community lead at Tekart and co-founder at 5ivehq, I specialize in bridging data-driven insights 
              with creative execution to amplify artists, brands, and campaigns. With a keen eye on trends and a 
              deep understanding of audience behavior, I generate strategies that influence commitment, growth and massive impact.
            </motion.p>
            
            {/* Quote */}
            <motion.div 
              className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border-l-4 border-blue-300 mb-10"
              variants={quoteVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.p 
                className="text-white italic font-light text-xl leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                "A listener is always wiser than a constant speaker."
              </motion.p>
              <motion.p 
                className="text-blue-200 font-light mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
              >
                — Anointing David
              </motion.p>
              <motion.p 
                className="text-white italic font-light text-xl leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                "Push every P like it's your last."
              </motion.p>
              <motion.p 
                className="text-blue-200 font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                — Anointing David
              </motion.p>
            </motion.div>
            
            {/* Experience Highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-2">
                  <motion.div 
                    className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(191, 219, 254, 0.3)" 
                    }}
                  >
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <span className="text-white text-lg font-light">Strategist</span>
                </div>
                <p className="text-gray-500 font-light pl-11">6+ years of experience</p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-2">
                  <motion.div 
                    className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(191, 219, 254, 0.3)" 
                    }}
                  >
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </motion.div>
                  <span className="text-white text-lg font-light">Dancer</span>
                </div>
                <p className="text-gray-500 font-light pl-11">Professional dancer & teacher</p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-2">
                  <motion.div 
                    className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(191, 219, 254, 0.3)" 
                    }}
                  >
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <span className="text-white text-lg font-light">Leader</span>
                </div>
                <p className="text-gray-500 font-light pl-11">Community lead at Tekart</p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-2">
                  <motion.div 
                    className="w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mr-3"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(191, 219, 254, 0.3)" 
                    }}
                  >
                    <svg className="w-4 h-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </motion.div>
                  <span className="text-white text-lg font-light">Founder</span>
                </div>
                <p className="text-gray-500 font-light pl-11">Co-founder of elite tribe & 5ivehq</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Creator image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative mt-12 lg:mt-0">
              {/* Circle blurred gradient backgrounds */}
              <motion.div 
                className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"
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
              
              {/* Main image */}
              <div className="relative z-10 mb-6">
                <motion.img 
                  src="/Classic4.jpeg" 
                  alt="Anointing David - Founder & Community Lead" 
                  className="rounded-lg shadow-2xl border border-gray-800 h-auto max-w-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                />
                
                {/* Decorative dot pattern */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-gray-900 rounded-lg z-0"
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-full relative">
                    {[...Array(8)].map((_, i) => {
                      const row = Math.floor(i / 4);
                      const col = i % 4;
                      return (
                        <motion.div 
                          key={i}
                          className="absolute w-2 h-2 bg-blue-300 rounded-full"
                          style={{ 
                            top: `${row * 4 + 4}px`, 
                            left: `${col * 4 + 4}px` 
                          }}
                          variants={dotVariants}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;