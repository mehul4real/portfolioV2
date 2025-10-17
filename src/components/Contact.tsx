import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent to-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12">
          Discuss a project or just want to say hi? My Inbox is open for all.
        </p>

        <div className="glass-card rounded-2xl p-8 mb-12 animate-slide-up hover:scale-[1.02] transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow w-full md:w-auto transition-all duration-300 hover:scale-105">
              <a href="mailto:mehulsaxena.dev@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                EMAIL ME 
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary-soft hover:bg-secondary/10 hover:border-secondary-soft w-full md:w-auto transition-all duration-300 hover:scale-105">
              <a href="tel:7000301634" className="flex items-center gap-2">
                <Phone size={20} />
                CALL ME 
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row gap-4 justify-center text-muted-foreground">
              <div className="flex items-center gap-2 justify-center">
                <Mail size={18} className="text-primary" />
                <span>mehulsaxena.dev@gmail.com</span>
              </div>
              <div className="hidden md:block text-muted-foreground/50">|</div>
              <div className="flex items-center gap-2 justify-center">
                <Phone size={18} className="text-primary" />
                <span>+91 7000301634</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mb-12">
          <SocialLinks />
        </div>

        <footer className="text-muted-foreground text-sm">
          <p>Built with passion and code by 🔥 <a href="https://www.linkedin.com/in/mehul4real/" target="_blank" rel="noopener noreferrer">Mehul Saxena</a></p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
