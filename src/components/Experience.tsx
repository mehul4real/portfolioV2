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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{exp.company}</h3>
                  <p className="text-xl font-semibold mb-2">{exp.position}</p>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <p className="font-medium">{exp.duration}</p>
                  <p className="flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    {exp.location}
                  </p>
                  {exp.secondLocation && (
                    <p className="flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {exp.secondLocation}
                    </p>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30"
                  >
                    {tech}
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

export default Experience;
