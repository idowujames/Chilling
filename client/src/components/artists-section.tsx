import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Users } from "lucide-react";

export default function ArtistsSection() {
  const artists = [
    {
      name: "T-Classic",
      genre: "Afrobeats",
      achievement: "Breakout hit 'Fall in Love' - major streaming success",
      streams: "50M+ streams",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      name: "Spyro",
      genre: "Afrobeats",
      achievement: "Multiple breakout songs and UK tour success",
      streams: "40M+ streams",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      name: "Baby Boy AV",
      genre: "Hip-Hop/Rap",
      achievement: "Hit single 'Big Thug Boys' and international recognition",
      streams: "30M+ streams",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      name: "Teni",
      genre: "Afropop",
      achievement: "Headline shows across Nigeria and UK tours",
      streams: "100M+ streams",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      name: "Kida Kudz",
      genre: "Afrobeats/Hip-Hop",
      achievement: "Successful headline show in Ibadan and UK presence",
      streams: "25M+ streams",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      name: "Victor AD",
      genre: "Afrobeats",
      achievement: "Headline show in Warri and growing fanbase",
      streams: "35M+ streams",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
  ];

  return (
    <section id="artists" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-accent">
            Our Artist Roster
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the exceptional talent we're proud to represent across multiple genres and markets
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border-border hover:border-primary transition-all duration-300 card-hover overflow-hidden">
                <div className="relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-2 text-foreground">
                    {artist.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {artist.genre}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {artist.achievement}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Music className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Users className="w-4 h-4" />
                      </a>
                    </div>
                    <span className="text-accent text-sm font-semibold">
                      {artist.streams}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
          >
            View Full Roster
          </Button>
        </div>
      </div>
    </section>
  );
}
