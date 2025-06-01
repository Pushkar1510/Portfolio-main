import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Database } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/pushkargharat', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/pushkar-gharat', label: 'LinkedIn' },
    { icon: <Mail size={18} />, url: 'mailto:pushkar.gharat@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <motion.a 
              href="#home" 
              className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <Database className="h-5 w-5" />
              <span>Pushkar Gharat</span>
            </motion.a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Data Analytics Engineer | Data Engineer
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Pushkar Gharat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;