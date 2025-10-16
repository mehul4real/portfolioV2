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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-10 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-background shadow-lg shadow-primary/50"></div>

                  {/* Content wrapper */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div
                      className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                        isLeft ? 'animate-slide-right' : 'animate-slide-left'
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                            <Briefcase className="text-primary" size={20} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary mb-1">
                              {exp.company}
                            </h3>
                            <p className="text-base font-semibold text-foreground">{exp.position}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground ml-11">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-primary" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-secondary" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        {exp.secondLocation && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground ml-11 mt-1">
                            <MapPin size={14} className="text-secondary" />
                            <span>{exp.secondLocation}</span>
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4 ml-11">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-secondary mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 ml-11">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
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
