const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vuetify"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Java", "Spring Boot", "SQL", "API Integration"]
  },
  {
    category: "Tools & Platforms",
    skills: ["AWS", "Vercel", "AWS Amplify", "Figma", "Metabase", "Firebase"]
  },
  {
    category: "Integrations",
    skills: ["Docupilot", "Experian", "Google SSO", "HyperTrack", "Legality"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 animate-slide-up hover:border-secondary/70 transition-all duration-500 hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-accent/20 border border-primary/30 hover:border-secondary/60 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
