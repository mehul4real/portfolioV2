import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mehul4real",
      hoverColor: "hover:text-secondary",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mehulsaxena.dev@gmail.com",
      hoverColor: "hover:text-primary",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/whoisMehul",
      hoverColor: "hover:text-accent",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mehul4real",
      hoverColor: "hover:text-primary",
    },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 rounded-full glass-card transition-all duration-300 hover:scale-110 hover:shadow-glow ${link.hoverColor} group`}
          aria-label={link.name}
        >
          <link.icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
