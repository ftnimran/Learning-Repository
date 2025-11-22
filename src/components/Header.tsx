
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold glow-text"
        >
          Ravendra Patel
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-gray-300 hover:text-white hover:text-shadow-glow transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://github.com/RavendraDotJava"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ravendra-patel-428a18230"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:rp7098979@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white py-2 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-6 py-3">
              <a 
                href="https://github.com/RavendraDotJava" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ravendra-patel-428a18230" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rp7098979@gmail.com"
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
