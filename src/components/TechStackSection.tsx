import { useLang } from "@/contexts/LangContext";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Git & GitHub", level: 82 },
  { name: "Responsive Design", level: 93 },
  { name: "SEO", level: 78 },
  { name: "Framer Motion", level: 75 },
];

const TechStackSection = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("Tech ", "المهارات ")}<span className="gradient-text">{t("Stack", "التقنية")}</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t(
              "Technologies and tools I use to bring ideas to life.",
              "التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع."
            )}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={0.05 * i}>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
