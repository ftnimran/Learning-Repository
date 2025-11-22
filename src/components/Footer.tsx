
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h2 className="text-2xl font-bold mb-4 glow-text">Ravendra Patel</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Backend developer specializing in Laravel, Java, and API development.
              Building robust, scalable solutions for modern web applications.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/RavendraDotJava"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-neon-purple/20 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ravendra-patel-428a18230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-neon-purple/20 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rp7098979@gmail.com"
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-neon-purple/20 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-purple transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-full text-neon-purple mr-3">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:rp7098979@gmail.com" className="text-white hover:text-neon-purple transition-colors duration-300">
                    rp7098979@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-full text-neon-blue mr-3">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/RavendraDotJava" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-purple transition-colors duration-300"
                  >
                    @RavendraDotJava
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-gray-800 rounded-full text-neon-pink mr-3">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/ravendra-patel-428a18230" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-neon-purple transition-colors duration-300"
                  >
                    ravendra-patel-428a18230
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            &copy; {currentYear} Ravendra Patel. All rights reserved.
            <Heart className="w-4 h-4 mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
