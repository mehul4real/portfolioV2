import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "FLAT WHITE CAPITAL (INDIAGOLD)",
    position: "Senior Software Engineer",
    duration: "September 2021 - Present",
    location: "Gurugram, HR India",
    secondLocation: "August 2022 - June 2025 | Onsite - Abu Dhabi, UAE",
    achievements: [
      "Leading end-to-end development of Indiagold's digital gold loan platform, including backend, frontend, gateway, and integrations",
      "Tech Lead for 25+ feature releases; managed timelines, delivery ownership, and post-release monitoring",
      "Reduced data fetch time from 1.5s to under 100ms and database size from 20GB+ to <1MB through Experian integration",
      "Engineered configurable processing fee system generating 10 crore INR+ in profit",
      "Developed Renew/Rebook automation enabling 600 crore INR+ AUM within 6 months of release",
      "Built multiple internal dashboards and lender tools (React + Next.js) for operational efficiency"
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Java", "Spring Boot", "SQL", "AWS"]
  },
  {
    company: "LIGHTSTONE LABS (EASYLOKAL)",
    position: "Full Stack Developer",
    duration: "November 2020 - August 2021",
    location: "Gurugram, HR",
    achievements: [
      "Solely handled frontend architecture of EasyLokal; set up project from scratch with responsive design",
      "Led end-to-end delivery as the only frontend developer under tight deadlines",
      "Maintained accelerated release cadence for investor demos",
      "Managed and maintained other company projects including KrishiYog"
    ],
    tech: ["Vue.js", "Vuetify"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full transform -translate-x-1/2 z-10 shadow-glow border-4 border-background"></div>

                  {/* Content */}
                  <div className={`grid md:grid-cols-2 gap-8 items-start ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                    {/* Spacer for alternating layout */}
                    <div className={`hidden md:block ${isLeft ? 'md:order-1' : 'md:order-2'}`}></div>
                    
                    {/* Card */}
                    <div className={`glass-card rounded-2xl p-6 md:p-8 hover:border-secondary/70 transition-all duration-500 hover:shadow-glow group ${
                      isLeft ? 'animate-slide-right md:order-2' : 'animate-slide-left md:order-1'
                    }`} style={{ animationDelay: `${index * 0.2}s` }}>
                      {/* Company Icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="text-primary-foreground" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold text-foreground">{exp.position}</p>
                        </div>
                      </div>

                      <div className="mb-4 text-sm text-muted-foreground space-y-1">
                        <p className="font-medium text-primary">{exp.duration}</p>
                        <p className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </p>
                        {exp.secondLocation && (
                          <p className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.secondLocation}
                          </p>
                        )}
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                            <span className="text-secondary mt-1 font-bold">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/40 hover:border-secondary/60 hover:scale-105 transition-all duration-300"
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
