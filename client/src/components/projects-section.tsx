import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Music, Users, MapPin } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "T-Classic's 'Fall in Love'",
      description: "Comprehensive PR campaign that catapulted T-Classic into the spotlight, generating widespread buzz and marking a pivotal moment in his career.",
      impact: "50M+ streams",
      type: "Music PR Campaign",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Spyro's Breakout Singles",
      description: "Strategic media placements and innovative marketing strategies that propelled Spyro's breakout songs to critical acclaim and fan recognition.",
      impact: "Multiple hit singles",
      type: "Music PR Campaign",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Baby Boy AV's 'Big Thug Boys'",
      description: "Instrumental PR campaign leveraging influencer partnerships and engaging content creation to establish Baby Boy AV as a rising talent.",
      impact: "International recognition",
      type: "Music PR Campaign",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Kida Kudz Homecoming Concert",
      description: "Complete tour management for Kida Kudz's headline show in Ibadan, coordinating logistics and securing sponsorships for a memorable event.",
      impact: "Sold-out show",
      type: "Tour Management",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Teni's Abuja Headline Show",
      description: "Seamless tour management ensuring exceptional logistics and unforgettable performances, further solidifying Teni's status as a music powerhouse.",
      impact: "Major venue success",
      type: "Tour Management",
      image: "https://images.unsplash.com/photo-1598387993441-a364b5591fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Victor AD's Warri Homecoming",
      description: "Tour management for Victor AD's homecoming celebration in Warri, showcasing meticulous attention to detail and hands-on approach.",
      impact: "Hometown triumph",
      type: "Tour Management",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-accent">
            Major Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Key campaigns and tours that have shaped careers and created lasting impact in the Nigerian music industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary border-border hover:border-primary transition-all duration-300 card-hover overflow-hidden h-full">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-accent text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      {project.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-montserrat font-bold mb-6 text-accent">
              Industry Leadership
            </h3>
            <p className="text-lg text-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Beyond individual projects, Tunde has held executive positions at leading industry organizations, 
              including Head of Operations at Azuri Music, Head of PR & Marketing at DSE Africa, 
              and Associate Producer at TooXclusive, bringing strategic vision and operational excellence to every role.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">TooXclusive</div>
                <div className="text-sm text-muted-foreground">Associate Producer</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">DSE Africa</div>
                <div className="text-sm text-muted-foreground">Head of PR & Marketing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Longitude Africa</div>
                <div className="text-sm text-muted-foreground">Head of Operations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Azuri Music</div>
                <div className="text-sm text-muted-foreground">Head of Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}