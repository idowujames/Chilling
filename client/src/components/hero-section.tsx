import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>
      <div className="floating-shapes"></div>
      <div className="absolute inset-0 geometric-bg"></div>
      <div className="absolute inset-0 premium-grid"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Music PR & Talent{" "}
            <span className="gradient-text">
              Management
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Over 5 years of excellence in the Nigerian music industry. Elevating careers through strategic PR, tour management, and industry leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-effect"
                onClick={() => scrollToSection("#artists")}
              >
                View Our Artists
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 music-wave w-32 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
