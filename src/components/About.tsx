
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 rounded-lg relative">
              <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-neon-purple flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-6">Backend Developer</h3>
              <p className="text-gray-400 mb-6">
                Experienced backend developer with expertise in Laravel, Java, and modern web technologies. 
                Passionate about building robust, scalable systems and APIs that power seamless user experiences.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">Bhopal, MP, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">rp7098979@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+91 7898244625</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="w-5 h-5 text-neon-purple mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-gray-400">3+ Years</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate backend developer with a strong foundation in building robust web applications and APIs. With over 3 years of experience, I've developed expertise in Laravel, Java, and various other technologies that power modern web solutions.
            </p>
            <p className="text-gray-300 mb-4">
              My professional journey includes working on diverse projects ranging from ERP systems and CRM modules to e-commerce platforms and property booking websites. I specialize in creating secure payment integrations, developing real-time modules, and building scalable backend architectures.
            </p>
            <p className="text-gray-300 mb-6">
              What drives me is the challenge of solving complex problems and creating efficient, maintainable systems. I'm constantly expanding my knowledge and staying up-to-date with the latest industry standards to deliver high-quality solutions.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">Laravel</span>
              <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-sm">API Development</span>
              <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">MySQL</span>
              <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-sm">PHP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
