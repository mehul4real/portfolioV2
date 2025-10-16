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
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{edu.institution}</h3>
                  <p className="text-muted-foreground mb-2">{edu.degree}</p>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <p>{edu.duration} • {edu.location}</p>
                    <p className="text-primary font-medium">{edu.grade}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
