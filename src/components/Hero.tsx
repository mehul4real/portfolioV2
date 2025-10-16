import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-slide-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Mehul Saxena</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-6">
            Senior Software Engineer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Tech Lead with 4+ years of experience building scalable full-stack solutions.
          Specialized in React, Node.js, and delivering high-impact features that drive business growth.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            <a href="#experience">View Experience</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-muted-foreground">
          <a href="mailto:mehulsaxena.dev@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={20} />
            <span>mehulsaxena.dev@gmail.com</span>
          </a>
          <a href="tel:7000301634" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={20} />
            <span>7000301634</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
