import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "MEDICAPS UNIVERSITY",
    degree: "B.Tech in Computer Science",
    duration: "2016 - 2020",
    location: "Indore, MP",
    grade: "CGPA: 7.77 / 10"
  },
  {
    institution: "CHAMELI DEVI PUBLIC SCHOOL",
    degree: "Class 12th - Science (PCM)",
    duration: "2016",
    location: "Indore, MP",
    grade: "Percentage: 75%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-10 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 z-10 border-4 border-background shadow-lg shadow-accent/50"></div>

                  {/* Content wrapper */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div
                      className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${
                        isLeft ? 'animate-slide-right' : 'animate-slide-left'
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10 border border-accent/30">
                          <GraduationCap className="text-accent" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-accent mb-1">
                            {edu.institution}
                          </h3>
                          <p className="text-foreground font-medium mb-2 text-sm">{edu.degree}</p>
                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <p>{edu.duration} • {edu.location}</p>
                            <p className="text-accent font-semibold">{edu.grade}</p>
                          </div>
                        </div>
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

export default Education;
