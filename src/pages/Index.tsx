import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Twitter, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi' | 'mr' | 'gu'>('en');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const translations = {
    en: {
      role: "Developer & Designer",
      about: "About Me",
      aboutText: "I am a passionate developer and designer with a focus on creating beautiful and functional digital experiences.",
      skills: "Skills",
      contact: "Get in Touch",
      contactText: "Interested in working together? Let's connect!",
      emailMe: "Email Me"
    },
    hi: {
      role: "डेवलपर और डिजाइनर",
      about: "मेरे बारे में",
      aboutText: "मैं एक जुनूनी डेवलपर और डिजाइनर हूं जो सुंदर और कार्यात्मक डिजिटल अनुभवों को बनाने पर ध्यान केंद्रित करता है।",
      skills: "कौशल",
      contact: "संपर्क करें",
      contactText: "साथ में काम करने में रुचि है? आइए जुड़ें!",
      emailMe: "ईमेल करें"
    },
    mr: {
      role: "डेव्हलपर आणि डिझायनर",
      about: "माझ्याबद्दल",
      aboutText: "मी एक उत्साही डेव्हलपर आणि डिझायनर आहे जो सुंदर आणि कार्यात्मक डिजिटल अनुभव तयार करण्यावर लक्ष केंद्रित करतो.",
      skills: "कौशल्ये",
      contact: "संपर्क साधा",
      contactText: "एकत्र काम करण्यात रस आहे? चला कनेक्ट करूया!",
      emailMe: "ईमेल करा"
    },
    gu: {
      role: "ડેવલપર અને ડિઝાઈનર",
      about: "મારા વિશે",
      aboutText: "હું એક ઉત્સાહી ડેવલપર અને ડિઝાઈનર છું જે સુંદર અને કાર્યાત્મક ડિજિટલ અનુભવો બનાવવા પર ધ્યાન કેન્દ્રિત કરે છે.",
      skills: "કૌશલ્યો",
      contact: "સંપર્ક કરો",
      contactText: "સાથે કામ કરવામાં રસ છે? ચાલો જોડાઈએ!",
      emailMe: "ઇમેઇલ કરો"
    }
  };

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

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' }
  ];

  const handleLanguageChange = (lang: 'en' | 'hi' | 'mr' | 'gu') => {
    setCurrentLanguage(lang);
  };

  const handleContactClick = () => {
    window.location.href = `mailto:jhdkhhgv@gmail.com`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code as 'en' | 'hi' | 'mr' | 'gu')}
            className={`px-3 py-1 rounded-md transition-colors ${
              currentLanguage === lang.code
                ? 'bg-primary text-primary-foreground'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>

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
          <p className="text-xl md:text-2xl text-secondary mb-8">
            {translations[currentLanguage].role}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{translations[currentLanguage].about}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {translations[currentLanguage].aboutText}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{translations[currentLanguage].skills}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{translations[currentLanguage].contact}</h2>
            <p className="text-lg text-gray-300 mb-8">
              {translations[currentLanguage].contactText}
            </p>
            <Button
              onClick={handleContactClick}
              className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
              {translations[currentLanguage].emailMe}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;