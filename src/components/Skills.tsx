
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Server, Database, Code, Globe, HardDrive, 
  Terminal, BarChart
} from "lucide-react";

const skillsData = [
  {
    category: "Backend Technologies",
    icon: <Server className="w-6 h-6 text-neon-purple" />,
    skills: [
      { name: "PHP", level: 90 },
      { name: "Java", level: 85 },
      { name: "Node.js", level: 75 },
    ]
  },
  {
    category: "Frameworks",
    icon: <Code className="w-6 h-6 text-neon-blue" />,
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Spring Boot", level: 80 },
      { name: "Express.js", level: 70 },
    ]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6 text-neon-pink" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 60 },
    ]
  },
  {
    category: "Frontend Skills",
    icon: <Globe className="w-6 h-6 text-neon-purple" />,
    skills: [
      { name: "HTML & CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 65 },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: <HardDrive className="w-6 h-6 text-neon-blue" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Ubuntu", level: 75 },
    ]
  },
  {
    category: "API Development",
    icon: <Terminal className="w-6 h-6 text-neon-pink" />,
    skills: [
      { name: "RESTful APIs", level: 90 },
      { name: "API Integration", level: 85 },
      { name: "Swagger/OpenAPI", level: 70 },
    ]
  },
];

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-neon-purple">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: {
              width: `${skill.level}%`,
              transition: { duration: 1, delay: delay, ease: "easeOut" }
            }
          }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ data, index }: { data: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-lg card-hover"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 bg-background rounded-lg">{data.icon}</div>
        <h3 className="text-lg font-semibold">{data.category}</h3>
      </div>
      <div>
        {data.skills.map((skill: any, idx: number) => (
          <SkillBar key={skill.name} skill={skill} delay={idx * 0.1} />
        ))}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const statsData = [
    { value: 60, label: "Data Structures Problems", icon: <BarChart className="w-5 h-5 text-neon-purple" /> },
    { value: 5, label: "Star Rating in Java", icon: <Code className="w-5 h-5 text-neon-blue" /> },
    { value: 15, label: "Completed Projects", icon: <Terminal className="w-5 h-5 text-neon-pink" /> },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center card-hover"
        >
          <div className="mx-auto bg-gray-900 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            {stat.icon}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {stat.value}+
          </motion.div>
          <p className="text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            I've developed a diverse skill set throughout my career as a backend developer,
            focusing on building robust, scalable, and efficient applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.category} data={skill} index={index} />
          ))}
        </div>

        <Stats />
      </div>
    </section>
  );
};

export default Skills;
