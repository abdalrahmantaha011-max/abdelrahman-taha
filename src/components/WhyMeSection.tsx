import { useLang } from "@/contexts/LangContext";
import ScrollReveal from "./ScrollReveal";
import { Zap, Search, Shield } from "lucide-react";

const reasons = [
  {
    icon: <Zap size={28} />,
    titleEn: "Lightning Fast",
    titleAr: "سرعة فائقة",
    descEn: "Optimized websites that load in under 2 seconds, keeping visitors engaged and reducing bounce rates.",
    descAr: "مواقع محسّنة تُحمَّل في أقل من ثانيتين، مما يبقي الزوار مهتمين ويقلل معدلات الارتداد.",
  },
  {
    icon: <Search size={28} />,
    titleEn: "SEO Optimized",
    titleAr: "تحسين محركات البحث",
    descEn: "Built with best SEO practices from the ground up, helping your business rank higher on Google.",
    descAr: "مبنية بأفضل ممارسات تحسين محركات البحث، مما يساعد عملك على الظهور في أعلى نتائج جوجل.",
  },
  {
    icon: <Shield size={28} />,
    titleEn: "Professional & Reliable",
    titleAr: "احترافي وموثوق",
    descEn: "Clean, production-ready code with consistent communication and on-time delivery — every time.",
    descAr: "كود نظيف وجاهز للإنتاج مع تواصل مستمر وتسليم في الوقت المحدد — في كل مرة.",
  },
];

const WhyMeSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("Why ", "لماذا ")}<span className="gradient-text">{t("Choose Me", "تختارني")}</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t(
              "What sets me apart as your go-to web developer.",
              "ما يميزني كمطور الويب المفضل لديك."
            )}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="glass-card-hover p-8 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary mx-auto flex items-center justify-center mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {t(reason.titleEn, reason.titleAr)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(reason.descEn, reason.descAr)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
