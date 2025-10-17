import { GraduationCap } from "lucide-react";
import Fade from 'react-reveal/Fade';

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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium mb-20 text-center">
          <span className="gradient-text">Education</span> 
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:transform md:-translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-20">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative pl-8 md:pl-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1/2 ring-4 ring-background"></div>

                  {/* Content */}
                  <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Fade left={isLeft} right={!isLeft} duration={800} delay={index * 200}>
                      <div className="glass-card rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                          <GraduationCap className="text-primary" size={22} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-primary mb-1">
                            {edu.institution} 
                          </h3>
                          <p className="text-foreground font-normal mb-3 text-base">{edu.degree} </p>
                          <div className="flex flex-col gap-1.5 text-base text-muted-foreground">
                            <p>{edu.duration} • {edu.location} </p>
                            <p className="text-primary/90 font-normal">{edu.grade} </p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </Fade>
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
