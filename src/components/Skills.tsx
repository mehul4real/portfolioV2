import Fade from 'react-reveal/Fade';

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
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-transparent to-card/30">
      <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-medium mb-16 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Fade bottom duration={1000} distance="20px" delay={index * 200} key={index}>
              <div
                className="glass-card rounded-2xl p-6 animate-slide-up hover:scale-[1.02] transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              <h3 className="text-xl font-medium mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
