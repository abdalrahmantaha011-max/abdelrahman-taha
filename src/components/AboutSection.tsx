import { useLang } from "@/contexts/LangContext";
import ScrollReveal from "./ScrollReveal";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const { t } = useLang();

  const highlights = [
    {
      icon: <Code2 size={24} className="text-primary" />,
      title: t("Clean Code", "برمجة احترافية"),
      desc: t("Writing maintainable, scalable code", "كتابة كود نظيف، معايير قياسية وقابل للتطوير"),
    },
    {
      icon: <Lightbulb size={24} className="text-primary" />,
      title: t("Problem Solver", "حلول ذكية"),
      desc: t("Creative solutions for complex challenges", "تحويل التحديات المعقدة إلى تجارب رقمية بسيطة"),
    },
    {
      icon: <Rocket size={24} className="text-primary" />,
      title: t("Performance", "أداء فائق"),
      desc: t("Optimized for speed and efficiency", "مواقع محسنة للسرعة القصوى لضمان أفضل تجربة مستخدم"),
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("About ", "لماذا تختار ")}<span className="gradient-text">{t("Me", "عبدالرحمن طه؟")}</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "With 2 years of dedicated web development experience, I specialize in crafting high-performance digital solutions that drive real business growth. My mission is to build more than just websites; I create strategic online presences that are visually stunning and technically superior.",
                  "بخبرة تمتد لسنتين في تطوير الويب، أتخصص في صياغة حلول رقمية عالية الأداء تحقق نمواً حقيقياً للأعمال. رسالتي هي بناء ما هو أكثر من مجرد مواقع؛ أنا أنشئ حضوراً استراتيجياً متفوقاً تقنياً وجذاباً بصرياً."
                )}
              </p>
              <p>
                {t(
                  "I focus on delivering bespoke web experiences tailored to meet the highest industry standards. From seamless user interfaces to robust backend logic, every project I undertake is built with precision, ensuring a perfect balance between aesthetics and functionality.",
                  "أركز على تقديم تجارب ويب مخصصة تلبي أعلى المعايير المهنية. من واجهات المستخدم السلسة إلى المنطق البرمجي القوي، يتم بناء كل مشروع بدقة لضمان التوازن المثالي بين الجمال والأداء الوظيفي."
                )}
              </p>
              <p>
                {t(
                  "My philosophy is built on writing clean, future-proof code and implementing modern SEO strategies. This commitment ensures that your platform is not only ready for today’s market but is also scalable and optimized for long-term search engine visibility and speed.",
                  "تعتمد فلسفتي على كتابة كود نظيف وقابل للتطوير مع تطبيق أحدث استراتيجيات تحسين محركات البحث (SEO). هذا الالتزام يضمن أن منصتك ليست جاهزة لسوق اليوم فحسب، بل هي أيضاً قابلة للتوسع ومحسنة للظهور والسرعة على المدى الطويل."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={i} delay={0.15 * (i + 1)} direction="right">
                <div className="glass-card-hover p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;