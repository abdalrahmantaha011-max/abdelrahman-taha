import { useLang } from "@/contexts/LangContext";
import ScrollReveal from "./ScrollReveal";
import { Wind, Palette, Ship } from "lucide-react";

const services = [
  {
    icon: <Wind size={32} />,
    titleEn: "Air Conditioning Companies",
    titleAr: "شركات التكييف",
    descEn: "I create professional, trust-building websites for HVAC businesses. From service listings and maintenance booking to showcasing certifications, I design sites that convert visitors into loyal customers.",
    descAr: "أنشئ مواقع احترافية لشركات التكييف والتبريد. من قوائم الخدمات وحجز الصيانة إلى عرض الشهادات، أصمم مواقع تحول الزوار إلى عملاء مخلصين.",
  },
  {
    icon: <Palette size={32} />,
    titleEn: "Interior Design Firms",
    titleAr: "شركات التصميم الداخلي",
    descEn: "Visually rich, gallery-driven websites that showcase portfolios beautifully. I build elegant layouts that reflect the creativity and sophistication of interior design brands.",
    descAr: "مواقع غنية بصرياً تعرض أعمال التصميم الداخلي بشكل جميل. أبني تخطيطات أنيقة تعكس الإبداع والرقي لعلامات التصميم الداخلي.",
  },
  {
    icon: <Ship size={32} />,
    titleEn: "Export & Import Businesses",
    titleAr: "شركات الاستيراد والتصدير",
    descEn: "Bilingual, globally-ready websites for trade companies. I create multilingual platforms that showcase products, facilitate inquiries, and build international credibility.",
    descAr: "مواقع ثنائية اللغة وجاهزة عالمياً لشركات التجارة. أنشئ منصات متعددة اللغات تعرض المنتجات وتسهل الاستفسارات وتبني المصداقية الدولية.",
  },
];

const ServicesSection = () => {
  const { t } = useLang();

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("My ", "خدماتي ")}<span className="gradient-text">{t("Services", "المتخصصة")}</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t(
              "Specialized web solutions tailored for industries I know best.",
              "حلول ويب متخصصة مصممة للصناعات التي أعرفها جيداً."
            )}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="glass-card-hover p-8 h-full group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {t(service.titleEn, service.titleAr)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(service.descEn, service.descAr)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
