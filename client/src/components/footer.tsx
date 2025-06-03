import { Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-montserrat font-bold text-accent mb-4 flex items-center">
              <Music className="mr-2 h-8 w-8" />
              ELITE
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Professional music management services dedicated to elevating artists and building lasting careers in the entertainment industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Artist Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Brand Partnerships</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tour Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Music Licensing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Los Angeles, CA</li>
              <li>Nashville, TN</li>
              <li>+1 (555) 123-4567</li>
              <li>
                <a href="mailto:info@elitemusicmanagement.com" className="hover:text-primary transition-colors">
                  info@elitemusicmanagement.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Elite Music Management. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
