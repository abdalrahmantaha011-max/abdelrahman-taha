import { ArrowDown, Download } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block glass-card px-4 py-2 mb-6"
            >
              <span className="text-sm text-primary font-medium">
                {t("Web Developer", "مطور ويب")}
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-foreground">{t("Abdelrahman Taha", "عبدالرحمن طه")}</span>
              <br />
              <span className="gradient-text">
                {t(
                  "Crafting High-Performance Web Experiences",
                  "تصميم مواقع ويب عالية الأداء"
                )}
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              {t(
                "I build modern, fast, and scalable websites that help businesses grow and reach their full potential online.",
                "أبني مواقع حديثة وسريعة وقابلة للتطوير تساعد الشركات على النمو والوصول إلى إمكاناتها الكاملة عبر الإنترنت."
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                {t("Get In Touch", "تواصل معي")}
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-xl font-semibold text-foreground hover:border-primary/40 transition-all duration-300"
              >
                {t("View Work", "شاهد أعمالي")}
                <ArrowDown size={16} />
              </a>
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full glass-card border-2 border-primary/30 overflow-hidden animate-pulse-glow">
                <img 
                  src="/download.webp"
                  alt={t("Abdelrahman Taha", "عبدالرحمن طه")}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-float" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;