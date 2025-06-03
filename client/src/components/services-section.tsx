import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Music, Mic, Video, Trophy, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Handshake,
      title: "Music PR & Promotion",
      description: "Strategic PR campaigns leveraging traditional and digital media to maximize exposure and engagement.",
    },
    {
      icon: Mic,
      title: "Tour Management",
      description: "Complete tour logistics from UK to Nigeria, ensuring seamless operations and unforgettable experiences.",
    },
    {
      icon: Trophy,
      title: "Talent Management",
      description: "Comprehensive artist development through The Chills Brand, nurturing careers and artistic visions.",
    },
    {
      icon: Video,
      title: "Industry Executive",
      description: "Operations leadership and strategic guidance backed by experience at top music industry companies.",
    },
  ];

  const features = [
    "Strategic career roadmapping",
    "Industry relationship building",
    "Brand identity development",
    "Revenue stream optimization",
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-accent">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic music industry solutions from PR campaigns to tour management and talent development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary border-border hover:border-primary transition-all duration-300 card-hover h-full">
                <CardContent className="p-8 text-center">
                  <service.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-montserrat font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-accent mr-4" />
                <h3 className="text-2xl font-montserrat font-bold text-accent">
                  Career Development
                </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive career development program includes strategic planning, brand building, 
                industry networking, and continuous growth opportunities tailored to each artist's unique journey.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional Recording Studio"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
