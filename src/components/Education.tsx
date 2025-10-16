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
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-primary transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full transform -translate-x-1/2 z-10 shadow-glow border-4 border-background"></div>

                  {/* Content */}
                  <div className={`grid md:grid-cols-2 gap-8 items-start ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                    {/* Spacer for alternating layout */}
                    <div className={`hidden md:block ${isLeft ? 'md:order-1' : 'md:order-2'}`}></div>
                    
                    {/* Card */}
                    <div className={`glass-card rounded-2xl p-6 md:p-8 hover:border-accent/70 transition-all duration-500 hover:shadow-glow group ${
                      isLeft ? 'animate-slide-right md:order-2' : 'animate-slide-left md:order-1'
                    }`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="text-primary-foreground" size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                            {edu.institution}
                          </h3>
                          <p className="text-foreground font-medium mb-3">{edu.degree}</p>
                          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                            <p className="font-medium">{edu.duration} • {edu.location}</p>
                            <p className="text-accent font-semibold text-base">{edu.grade}</p>
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
