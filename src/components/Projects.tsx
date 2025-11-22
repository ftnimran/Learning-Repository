
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projectsData = [
  {
    id: 1,
    title: "ERP Software",
    description: "Full-featured enterprise resource planning system with inventory management, purchase modules, CRM, and real-time telecalling features.",
    imageUrl: "/placeholder.svg",
    category: "Backend Development",
    technologies: ["Laravel", "MySQL", "PHP", "WhatsApp API", "Data Analysis"],
    keyFeatures: [
      "Inventory Management System (Masters, Item Creation, Price Lists)",
      "Purchase Module (Indent, Purchase Order, MRN, Stocks)",
      "CRM Module (Agreement, Payment, Receipt)",
      "Telecalling Module with Real-Time Leads",
      "WhatsApp messaging API Integration",
      "Data Analysis and Reporting"
    ]
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Secure e-commerce platform with multiple payment gateways and third-party authentication.",
    imageUrl: "/placeholder.svg",
    category: "Web Development",
    technologies: ["Laravel", "MySQL", "JavaScript", "Payment APIs", "OAuth"],
    keyFeatures: [
      "Multiple Payment Gateway Integrations (Stripe, PhonePe, Razorpay, PayPal)",
      "Coupon System Implementation",
      "Social Login Integration (Google, Microsoft, Discord)",
      "Product Management System",
      "Order Processing and Tracking",
      "User Authentication and Authorization"
    ]
  },
  {
    id: 3,
    title: "Property Booking Website",
    description: "Comprehensive property booking platform with payment processing and mobile app APIs.",
    imageUrl: "/placeholder.svg",
    category: "Full Stack",
    technologies: ["Laravel", "MySQL", "JavaScript", "API Development", "Mobile Integration"],
    keyFeatures: [
      "Property Listing and Search Functionality",
      "Booking Management System",
      "Payment Gateway Integrations",
      "User Authentication with Multiple Providers",
      "API Development for Android and iOS Apps",
      "Admin Dashboard for Property Management"
    ]
  },
  {
    id: 4,
    title: "Java Enterprise Applications",
    description: "Enterprise-level Java applications with backend systems and RESTful API development.",
    imageUrl: "/placeholder.svg",
    category: "Java Development",
    technologies: ["Java SE", "Java EE", "Spring Boot", "Hibernate", "REST APIs", "MySQL"],
    keyFeatures: [
      "Backend Logic Implementation",
      "Database Integration and ORM",
      "RESTful API Development",
      "Enterprise-Level Architecture",
      "Debugging and Performance Optimization",
      "Secure Authentication and Authorization"
    ]
  }
];

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border border-gray-800 max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-400">{project.category}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <Code className="w-16 h-16 text-gray-700" />
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
            <ul className="list-disc list-inside text-gray-400">
              {project.keyFeatures.map((feature: string, index: number) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
            <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({ project, onClick }: { project: any; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-lg overflow-hidden card-hover"
    >
      <div className="h-48 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="w-12 h-12 text-gray-700" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-neon-purple text-xs rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <Button 
          onClick={onClick}
          className="w-full bg-gray-800 text-white hover:bg-gray-700"
        >
          View Project
        </Button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Here are some of the key projects I've worked on throughout my career.
            Each project demonstrates my expertise in backend development and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openModal(project)} 
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={modalOpen} 
            onClose={closeModal} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
