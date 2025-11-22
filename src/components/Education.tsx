
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Java SE & Java EE Certification",
    institution: "Innovative Biz Technology PVT. LTD",
    location: "Bhopal, MP",
    period: "2022 - 2023",
    description: "Professional certification focusing on Java Standard Edition and Enterprise Edition technologies, frameworks, and best practices.",
  },
  {
    id: 2,
    degree: "MBA (Finance)",
    institution: "APS UNIVERSITY",
    location: "REWA, MP",
    period: "2020 - 2022",
    description: "Master's degree in Business Administration with specialization in Finance, providing a strong foundation in business principles and financial management."
  },
  {
    id: 3,
    degree: "Bachelor of Commerce with Computer Application",
    institution: "APS UNIVERSITY",
    location: "REWA, MP",
    period: "2017 - 2020",
    description: "Undergraduate degree combining commerce knowledge with computer applications, introducing the foundations of programming and business systems."
  }
];

const EducationCard = ({ data, index }: { data: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-start">
        <div className="hidden md:flex items-center justify-center h-24 w-24 rounded-full bg-neon-purple/20 border border-neon-purple/30 shrink-0 mr-6">
          <GraduationCap className="h-10 w-10 text-neon-purple" />
        </div>
        
        <div className="glass-card p-6 rounded-lg w-full card-hover">
          <h3 className="text-xl font-bold text-white mb-1">{data.degree}</h3>
          <p className="text-neon-purple mb-3">{data.institution}</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-neon-blue mr-2" />
              <span className="text-gray-400 text-sm">{data.period}</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-neon-blue mr-2" />
              <span className="text-gray-400 text-sm">{data.location}</span>
            </div>
          </div>
          
          <p className="text-gray-300">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
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
          <h2 className="section-title">Education & Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            My educational background combines formal academic qualifications with
            specialized technical certifications in software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-[11.5rem] top-6 bottom-0 w-1 bg-gradient-to-b from-neon-purple via-neon-blue to-transparent"></div>

          <div className="space-y-16">
            {educationData.map((education, index) => (
              <EducationCard key={education.id} data={education} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="glass-card p-8 rounded-lg border border-neon-purple/30">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-neon-purple/20 rounded-lg mr-4">
                <Award className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white">Achievements</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="h-2 w-2 bg-neon-purple rounded-full mt-2 mr-3"></div>
                <p className="text-gray-300">Achieved 5-star rating in Java and Problem Solving at HackerRank.</p>
              </li>
              <li className="flex">
                <div className="h-2 w-2 bg-neon-purple rounded-full mt-2 mr-3"></div>
                <p className="text-gray-300">Solved over 60 questions of Data Structures using Java at HackerRank.</p>
              </li>
              <li className="flex">
                <div className="h-2 w-2 bg-neon-purple rounded-full mt-2 mr-3"></div>
                <p className="text-gray-300">Successfully implemented complex payment gateway integrations for multiple e-commerce platforms.</p>
              </li>
              <li className="flex">
                <div className="h-2 w-2 bg-neon-purple rounded-full mt-2 mr-3"></div>
                <p className="text-gray-300">Developed high-performance APIs that handle thousands of daily requests with minimal latency.</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
