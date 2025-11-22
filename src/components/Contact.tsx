
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-neon-purple" />,
    title: "Email",
    value: "rp7098979@gmail.com",
    link: "mailto:rp7098979@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5 text-neon-blue" />,
    title: "Phone",
    value: "+91 7898244625",
    link: "tel:+917898244625"
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-neon-pink" />,
    title: "GitHub",
    value: "RavendraDotJava",
    link: "https://github.com/RavendraDotJava"
  }
];

const Contact = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-lg card-hover"
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-800 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <a 
                        href={info.link} 
                        className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      className={`bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-white`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className={`bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className={`bg-gray-800/50 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} text-white`}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className={`bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-gray-700'} text-white resize-none`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-neon-purple hover:bg-neon-purple/80 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
