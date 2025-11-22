
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "Backend Developer",
    company: "Shaligram Developer",
    location: "Bhopal, MP",
    period: "2024 - Present",
    description: "Working on ERP Software development with focus on inventory management, purchase modules, CRM modules, and telecalling integration.",
    responsibilities: [
      "Developing Inventory Management system with masters, item creation, and price list functionality",
      "Building Purchase Module with indent, purchase order, MRN, and stocks tracking",
      "Implementing CRM Module with agreement, payment, and receipt management",
      "Creating Telecalling Module with real-time leads and WhatsApp API integration",
      "Performing data analysis to extract valuable insights"
    ]
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Dezven Software Solution",
    location: "Bhopal, MP",
    period: "2023 - 2024",
    description: "Led backend development for e-commerce platforms and property booking websites with secure payment integrations.",
    responsibilities: [
      "Integrated multiple payment gateways including Stripe, PhonePe, Razorpay, and PayPal",
      "Implemented coupon system for promotional offers",
      "Developed login integrations with Google, Microsoft, and Discord",
      "Built APIs for Android and iOS applications",
      "Created database structures and optimized queries for performance"
    ]
  },
  {
    id: 3,
    title: "Internship",
    company: "Innovative Biz Technology PVT. LTD",
    location: "Bhopal, MP",
    period: "2021 - 2022",
    description: "Developed and maintained Java-based applications focusing on backend logic and API development.",
    responsibilities: [
      "Built backend systems using Java SE and EE frameworks",
      "Implemented database integrations with proper ORM solutions",
      "Developed RESTful APIs for frontend consumption",
      "Gained hands-on experience in enterprise-level application architecture",
      "Learned debugging techniques and performance optimization"
    ]
  }
];

const ExperienceCard = ({ data, index }: { data: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative p-6 glass-card rounded-lg card-hover"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <div className="p-4 bg-gray-800/50 rounded-lg mb-4">
            <h3 className="text-xl font-bold text-white">{data.title}</h3>
            <p className="text-neon-purple">{data.company}</p>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-neon-blue mr-2" />
              <span className="text-gray-400">{data.period}</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-neon-blue mr-2" />
              <span className="text-gray-400">{data.location}</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <p className="text-gray-300 mb-4">{data.description}</p>
          
          <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {data.responsibilities.map((item: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceTimeline = () => {
  return (
    <div className="relative mt-12">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-purple z-0"></div>
      
      {/* Experience Cards */}
      <div className="relative z-10">
        {experienceData.map((experience, index) => (
          <div key={experience.id} className="mb-12 relative">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full bg-neon-purple border-4 border-gray-900 z-20"></div>
            
            {/* Content */}
            <div className={`relative ${index % 2 === 0 ? 'md:pr-12 md:ml-auto md:text-right' : 'md:pl-12'} md:w-1/2`}>
              <ExperienceCard data={experience} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            My professional journey has equipped me with diverse experience in backend development,
            API creation, and building scalable solutions for various business needs.
          </p>
        </motion.div>

        <div className="hidden md:block">
          <ExperienceTimeline />
        </div>

        <div className="md:hidden space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.id} data={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
