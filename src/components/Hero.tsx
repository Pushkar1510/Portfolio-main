import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Database, BarChart2, Code, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
          <motion.div 
            animate={{ 
              y: [0, 20, 0], 
              rotate: [0, 5, 0] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-32 h-32 md:w-64 md:h-64 rounded-full bg-indigo-400/30"
          />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 dark:opacity-10">
          <motion.div 
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, -5, 0] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-40 h-40 md:w-80 md:h-80 rounded-full bg-purple-400/30"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex gap-3">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"
              >
                <Database size={24} />
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"
              >
                <BarChart2 size={24} />
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"
              >
                <Code size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Pushkar Gharat
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl text-indigo-600 dark:text-indigo-400 font-medium mb-6 h-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Data Analytics Engineer', 
                2000,
                'Data Engineer', 
                2000,
                'Machine Learning Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Turning complex data into actionable insights and building robust data pipelines
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View my work
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
      </motion.a>
    </section>
  );
};

export default Hero;