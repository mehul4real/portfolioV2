import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "FLAT WHITE CAPITAL (INDIAGOLD)",
    position: "Senior Software Engineer",
    duration: "September 2021 - Present",
    location: "Gurugram, HR India",
    secondLocation: "August 2022 - June 2025 | Onsite - Abu Dhabi, UAE",
    achievements: [
      "Leading end-to-end development of Indiagold's digital gold loan platform",
      "Tech Lead for 25+ feature releases; managed timelines and delivery ownership",
      "Reduced data fetch time from 1.5s to <100ms and database from 20GB+ to <1MB",
      "Engineered fee system generating 10 crore INR+ in profit",
      "Developed automation enabling 600 crore INR+ AUM within 6 months",
      "Built multiple internal dashboards and tools for operational efficiency"
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Java", "Spring Boot", "SQL", "AWS"]
  },
  {
    company: "LIGHTSTONE LABS (EASYLOKAL)",
    position: "Full Stack Developer",
    duration: "November 2020 - August 2021",
    location: "Gurugram, HR",
    achievements: [
      "Solely handled frontend architecture from scratch with responsive design",
      "Led end-to-end delivery as the only frontend developer",
      "Maintained accelerated release cadence for investor demos",
      "Managed multiple company projects including KrishiYog"
    ],
    tech: ["Vue.js", "Vuetify"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:transform md:-translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative pl-8 md:pl-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1/2 ring-4 ring-background"></div>

                  {/* Content */}
                  <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      {/* Company & Position */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold text-foreground mb-3">{exp.position}</p>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={16} className="text-primary/70" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-primary/70" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        {exp.secondLocation && (
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                            <MapPin size={16} className="text-primary/70" />
                            <span>{exp.secondLocation}</span>
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary/90 border border-primary/10 hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
