import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12">
          I'm always open to discussing new projects, opportunities, or collaborations.
          Feel free to reach out!
        </p>

        <div className="glass-card rounded-2xl p-8 mb-12 animate-slide-up hover:border-secondary/70 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground shadow-glow w-full md:w-auto transition-all duration-300 hover:scale-105">
              <a href="mailto:mehulsaxena.dev@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                Email Me
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-secondary/10 hover:border-secondary/70 w-full md:w-auto transition-all duration-300 hover:scale-105">
              <a href="tel:7000301634" className="flex items-center gap-2">
                <Phone size={20} />
                Call Me
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
                <span>7000301634</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-muted-foreground text-sm">
          <p>© 2024 Mehul Saxena. Built with passion and code.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
