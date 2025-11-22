
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const typewriterTexts = [
  "Backend Developer",
  "Laravel Expert",
  "Java Developer",
  "API Developer",
];

const Hero = () => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const text = typewriterTexts[typewriterIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        setTypingSpeed(150);
        
        if (displayText === text) {
          setTypingSpeed(1000);
          setIsDeleting(true);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === "") {
          setIsDeleting(false);
          setTypewriterIndex((typewriterIndex + 1) % typewriterTexts.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typewriterIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-medium text-neon-purple mb-2">Hello, I'm</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block mb-1">Ravendra</span>
                <span className="block glow-text animate-glow">Patel</span>
              </h1>
              <div className="h-12 mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-gray-300 flex items-center">
                  <span className="mr-2">I'm a</span>
                  <span className="text-neon-blue relative after:content-[''] after:absolute after:right-[-4px] after:top-1 after:h-[70%] after:w-[2px] after:bg-neon-blue after:animate-pulse">
                    {displayText}
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 mb-8 max-w-xl">
                Experienced backend developer specializing in Laravel, Java, and API development.
                Building robust, scalable solutions for modern web applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-neon-purple hover:bg-neon-purple/80 text-white px-6 py-5 rounded-md group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-6 py-5 rounded-md"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="md:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-20 blur-lg animate-pulse"></div>
              <div className="w-full h-full rounded-full border-2 border-neon-purple/50 flex items-center justify-center overflow-hidden">
                {/* Using the resume photo */}
                <img 
                  src="/lovable-uploads/dcdb68b3-a673-472f-828a-5a3b6326cdd7.png" 
                  alt="Ravendra Patel" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback in case image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"><span class="text-5xl font-bold text-neon-purple">RP</span></div>';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6 text-neon-blue animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
