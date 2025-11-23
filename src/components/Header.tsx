import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-8 py-1 flex items-center justify-between">
        {/* Signature Name */}
        <a className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">Mehul Saxena</span>
          <span className="grey-color">/&gt;</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-normal text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} className="text-primary" />
            ) : (
              <Sun size={18} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={16} className="text-primary" />
            ) : (
              <Sun size={16} className="text-primary" />
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button className="text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
