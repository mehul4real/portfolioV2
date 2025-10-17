import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  const mousePosition = useMousePosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 197, 253, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateParallax = (depth: number) => {
    const x = (mousePosition.x - window.innerWidth / 2) * depth;
    const y = (mousePosition.y - window.innerHeight / 2) * depth;
    return { x, y };
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.6) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Interactive animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs with parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 hero-orb-1 rounded-full blur-3xl animate-float transition-transform duration-300 ease-out"
          style={{ 
            animationDelay: '0s',
            transform: `translate(${calculateParallax(0.02).x}px, ${calculateParallax(0.02).y}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 hero-orb-2 rounded-full blur-3xl animate-float transition-transform duration-300 ease-out"
          style={{ 
            animationDelay: '2s',
            transform: `translate(${calculateParallax(0.03).x}px, ${calculateParallax(0.03).y}px)`
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 hero-orb-3 rounded-full blur-3xl animate-float transition-transform duration-300 ease-out"
          style={{ 
            animationDelay: '4s',
            transform: `translate(${calculateParallax(0.025).x}px, ${calculateParallax(0.025).y}px)`
          }}
        />
        
        {/* Geometric shapes with parallax and interactive hover */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 border-2 border-primary-soft rotate-45 animate-float bg-shape pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-150 hover:rotate-[75deg] hover:border-primary hover:-translate-y-4"
          style={{ 
            animationDelay: '1s',
            transform: `translate(${calculateParallax(0.04).x}px, ${calculateParallax(0.04).y}px) rotate(45deg)`
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary-soft rounded-full animate-float bg-shape pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-150 hover:border-secondary hover:translate-x-4"
          style={{ 
            animationDelay: '3s',
            transform: `translate(${calculateParallax(0.035).x}px, ${calculateParallax(0.035).y}px)`
          }}
        />
        <div 
          className="absolute top-1/3 left-1/2 w-16 h-16 hero-shape rotate-12 animate-float bg-shape pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-[1.8] hover:rotate-[120deg] hover:-translate-x-6"
          style={{ 
            animationDelay: '2.5s',
            transform: `translate(${calculateParallax(0.045).x}px, ${calculateParallax(0.045).y}px) rotate(12deg)`
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-accent-soft rounded-lg rotate-45 animate-float bg-shape pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-150 hover:rotate-[100deg] hover:rounded-full hover:border-accent hover:translate-y-6"
          style={{ 
            animationDelay: '3.5s',
            transform: `translate(${calculateParallax(0.038).x}px, ${calculateParallax(0.038).y}px) rotate(45deg)`
          }}
        />
        
        {/* Additional interactive elements */}
        <div 
          className="absolute top-40 left-1/3 w-12 h-12 border-2 border-primary-soft rounded-full animate-float bg-shape pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-[2] hover:shadow-glow hover:translate-x-8"
          style={{ 
            animationDelay: '1.5s',
            transform: `translate(${calculateParallax(0.05).x}px, ${calculateParallax(0.05).y}px)`
          }}
        />
        <div 
          className="absolute bottom-40 right-1/3 w-14 h-14 border-2 border-secondary-soft rotate-45 animate-float bg-shape pointer-events-auto cursor-pointer transition-all duration-500 hover:scale-[1.7] hover:rotate-[150deg] hover:-translate-y-8"
          style={{ 
            animationDelay: '2.8s',
            transform: `translate(${calculateParallax(0.042).x}px, ${calculateParallax(0.042).y}px) rotate(45deg)`
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-slide-up">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl mb-4">
            <span className="opacity-70 font-normal">Hi there, I'm </span>
            <span className="gradient-text font-medium">Mehul Saxena</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-normal text-muted-foreground mb-6">
            Senior Software Engineer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A passionate Full-Stack Developer 🚀  with 5 years of experience building scalable solutions, pushing boundaries, 
          optimizing performance, and enhancing user experiences. Let's build something extraordinary together! ⚡
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105">
            <a href="#contact">GET IN TOUCH</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="transition-all duration-300 hover:scale-105">
            <a target="_blank" href="https://drive.google.com/file/d/1PCxqRj-WQIkkaBqhzwMe7YKn4YeiajQQ/view?usp=sharing" download>SEE MY RESUME</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-muted-foreground mb-6">
          <a href="mailto:mehulsaxena.dev@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={20} />
            <span>mehulsaxena.dev@gmail.com</span>
          </a>
          <a href="tel:7000301634" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone size={20} />
            <span>+91 7000301634</span>
          </a>
        </div>
        
        <SocialLinks />
      </div>
      
      {/* Fade transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
