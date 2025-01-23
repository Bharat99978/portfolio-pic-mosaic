import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            भारत सिंग
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            Developer & Designer
          </p>
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
              I am a passionate developer and designer with a focus on creating beautiful and functional digital experiences. My work combines modern technology with timeless design principles.
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
                <div
                  key={skill}
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <p className="text-lg font-semibold">{skill}</p>
                </div>
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
            <a
              href="mailto:contact@example.com"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;