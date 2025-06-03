import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { number: "20+", label: "Artists Managed" },
    { number: "10+", label: "Major Tours" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Successful Campaigns" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
              alt="Tunde Chilin Portrait"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-accent">
              Meet Your Manager
            </h2>
            <h3 className="text-2xl font-montserrat font-semibold mb-4 text-primary">
              Tunde Chilin
            </h3>
            <p className="text-lg text-secondary-foreground mb-6 leading-relaxed">
              With over 5 years in the Nigerian music industry, Tunde has emerged as a versatile professional excelling in Music PR, Tour Management, Talent Management, and executive positions. His journey demonstrates unwavering passion for music and relentless pursuit of excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-accent transition-colors text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
