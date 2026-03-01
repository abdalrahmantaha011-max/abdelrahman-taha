import { useLang } from "@/contexts/LangContext";
import ScrollReveal from "./ScrollReveal";
import { Send, MessageCircle, Facebook, Github } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { t } = useLang();
  
  // حالة الإرسال للتحكم في شكل الزرار ورسائل النجاح
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // اتبع الخطوات في ردي السابق للحصول على الرابط الخاص بك من Formspree
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgejzlz";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        // إعادة حالة الزرار بعد 5 ثوانٍ
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("Get In ", "تواصل ")}<span className="gradient-text">{t("Touch", "معي")}</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t(
              "Ready to start your project? Let's talk about your vision.",
              "مستعد لبدء مشروعك؟ لنتحدث عن رؤيتك وكيف يمكنني مساعدتك."
            )}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* فورم التواصل */}
          <ScrollReveal delay={0.1}>
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5 border border-white/10 shadow-xl"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("Your Name", "اسمك الكريم")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder={t("John Doe", "محمد احمد")}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("Email Address", "بريدك الإلكتروني")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("Message", "تفاصيل المشروع")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"
                  placeholder={t("Tell me about your project...", "أخبرني عن فكرة موقعك وماذا تحتاج بالضبط...")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 ${
                  status === "sending" 
                  ? "bg-muted text-muted-foreground cursor-not-allowed" 
                  : "bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                }`}
              >
                {status === "sending" ? t("Sending...", "جاري الإرسال...") : (
                  <>
                    {t("Send Message", "إرسال الرسالة")}
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* رسائل التنبيه بعد الإرسال */}
              {status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center text-sm animate-bounce">
                  {t("Message sent! I'll get back to you soon.", "تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت.")}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-center text-sm">
                  {t("Error sending message. Try WhatsApp?", "عذراً، حدث خطأ. هل تود المحاولة عبر واتساب؟")}
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* روابط التواصل الاجتماعي */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="flex flex-col justify-center space-y-6 h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{t("Contact Info", "معلومات التواصل")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    "I am always open to discussing new projects and opportunities.",
                    "أنا متاح دائماً لمناقشة المشاريع الجديدة والفرص البرمجية."
                  )}
                </p>
              </div>

              {/* واتساب */}
              <a
                href="https://wa.me/201033892534" // ضع رقمك هنا بالكود الدولي
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex items-center gap-5 group transition-transform hover:-translate-y-1"
              >
                <div className="p-4 rounded-2xl bg-green-500/10 text-green-500">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">{t("Fast response", "الرد السريع")}</p>
                </div>
              </a>

              {/* فيسبوك */}
              <a
                href="https://web.facebook.com/profile.php?id=61577189342339"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex items-center gap-5 group transition-transform hover:-translate-y-1"
              >
                <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-600">
                  <Facebook size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Facebook</h4>
                  <p className="text-sm text-muted-foreground">{t("View my updates", "تابع أعمالي الجديدة")}</p>
                </div>
              </a>

              {/* جيت هب */}
              <a
                href="https://github.com/abdalrahmantaha011-max"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex items-center gap-5 group transition-transform hover:-translate-y-1"
              >
                <div className="p-4 rounded-2xl bg-foreground/10 text-foreground">
                  <Github size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">GitHub</h4>
                  <p className="text-sm text-muted-foreground">{t("Open source projects", "مشاريع مفتوحة المصدر")}</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;