import { useLang } from "@/contexts/LangContext";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Monitor } from "lucide-react";

const projects = [
  {
    titleEn: "CoolAir HVAC",
    titleAr: "كول إير للتكييف",
    descEn: "A full-featured website for an air conditioning company, complete with service pages, booking system, and responsive design.",
    descAr: "موقع متكامل لشركة تكييف، مع صفحات خدمات ونظام حجز وتصميم متجاوب.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    image: "/image-1.webp", // ضع الصورة في مجلد public/projects
    link: "https://cool-air-liart.vercel.app" // رابط المشروع الحقيقي
  },
  {
    titleEn: "Gravity for Technical Services",
    titleAr: "جرافيتي للخدمات التقنية",
    descEn: "A complete website for a service company, with service pages, a booking system, and a responsive design.",
    descAr: "موقع متكامل لشركة خدمات، مع صفحات خدمات ونظام حجز وتصميم متجاوب.",
    stack: ["React", "Framer Motion", "CSS3"],
    image: "/image-2.webp",
    link: "https://gravity-tech.vercel.app"
  },
  {
    titleEn: "Global Trade Hub",
    titleAr: "مركز التجارة العالمية",
    descEn: "A bilingual export/import platform with product catalogs, inquiry forms, and SEO optimization.",
    descAr: "منصة استيراد وتصدير ثنائية اللغة مع كتالوجات منتجات ونماذج استفسار وتحسين محركات البحث.",
    stack: ["React", "Tailwind", "i18n"],
    image: "/image-3.webp",
    link: "https://wtc-global.vercel.app"
  },
];

const PortfolioSection = () => {
  const { t } = useLang();

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("My ", "أعمالي ")}<span className="gradient-text">{t("Portfolio", "المميزة")}</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t(
              "A showcase of recent projects built with modern technologies.",
              "عرض لأحدث المشاريع المبنية بتقنيات حديثة."
            )}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="glass-card-hover overflow-hidden group h-full flex flex-col">
                {/* تم تعديل هذا الجزء لعرض صورة حقيقية */}
                <div className="h-48 overflow-hidden border-b border-border/40 relative">
                  <img 
                    src={project.image} 
                    alt={project.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // في حال لم يجد الصورة، يعرض أيقونة افتراضية
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('bg-secondary/50', 'flex', 'items-center', 'justify-center');
                    }}
                  />
                  {/* Overlay يظهر عند التحويم */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Monitor className="text-white" size={32} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {t(project.titleEn, project.titleAr)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {t(project.descEn, project.descAr)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* الزرار الآن يحول العميل للمشروع مباشرة في صفحة جديدة */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium transition-all"
                  >
                    {t("Visit Website", "زيارة الموقع")} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;