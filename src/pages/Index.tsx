import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Twitter, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Bharat99978",
      color: "hover:text-[#333]"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/freefireindia899h/?hl=ur",
      color: "hover:text-[#E1306C]"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://x.com/FireBharat",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "WhatsApp",
      icon: <Phone className="w-6 h-6" />,
      url: "https://wa.me/+919322461670",
      color: "hover:text-[#25D366]"
    }
  ];

  const handleContactClick = () => {
    window.location.href = `mailto:jhdkhhgv@gmail.com`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img
            src="/lovable-uploads/bd77f65c-520d-48ab-8374-5320e075ddee.png"
            alt="MRK Logo"
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            भारत सिंग
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">
            Developer & Designer
          </p>

          {/* Social Media Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-6 mt-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 hover:scale-110 ${link.color}`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate developer and designer with a focus on creating beautiful and functional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {["React", "TypeScript", "Next.js", "Vite", "UI/UX Design", "Node.js"].map((skill) => (
                <motion.div
                  key={skill}
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-lg font-semibold">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              Interested in working together? Let's connect!
            </p>
            <Button
              onClick={handleContactClick}
              className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Email Me
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;