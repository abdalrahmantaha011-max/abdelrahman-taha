import { useLang } from "@/contexts/LangContext";
import { 
  Heart, 
  Github, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://web.facebook.com/profile.php?id=61577189342339", 
      label: "Facebook",
      color: "hover:text-blue-600",
      external: true 
    },
    { 
      icon: Github, 
      href: "https://github.com/abdalrahmantaha011-max", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
      external: true 
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/201033892534", 
      label: "WhatsApp",
      color: "hover:text-green-600",
      external: true 
    },
    { 
      icon: Mail, 
      href: "mailto:abdalrahmantaha011@gmail.com", 
      label: "Email",
      color: "hover:text-red-500",
      external: false // mailto links لا تفتح في تاب جديد
    },
  ];

  const quickLinks = [
    { href: "#about", label: t("About", "من نحن"), external: false },
    { href: "#portfolio", label: t("portfolio", "أعمالي"), external: false },
    { href: "#Services", label: t("Services", "الخدمات"), external: false },
    { href: "#Skills", label: t("Skills", "المهارات"), external: false },
    { href: "#contact", label: t("Contact", "اتصل بنا"), external: false },
  ];

  // روابط خارجية تفتح في تاب جديد
  const legalLinks = [
    { href: "/privacy", label: t("Privacy Policy", "سياسة الخصوصية"), external: false },
    { href: "/terms", label: t("Terms of Service", "شروط الخدمة"), external: false },
    { href: "/sitemap", label: t("Sitemap", "خريطة الموقع"), external: false },
  ];

  // رابط واتساب للتكرار في قسم الاتصال
  const whatsappLink = "https://wa.me/201033892534";

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              Abdelrahman Taha
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              {t(
                "Full-stack developer passionate about creating innovative web solutions and delivering exceptional user experiences.",
                "مطور ويب متكامل شغوف بإنشاء حلول ويب مبتكرة وتقديم تجارب مستخدم استثنائية."
              )}
            </p>
            {/* Social Links - Improved Design */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className={`p-2.5 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              {t("Quick Links", "روابط سريعة")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Professional Icons */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
              {t("Contact Info", "معلومات الاتصال")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{t("Beni Suef, Egypt", "بني سويف، مصر")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:abdalrahmantaha011@gmail.com"
                  className="hover:text-foreground transition-colors hover:underline"
                >
                  abdalrahmantaha011@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="tel:+201234567890"
                  className="hover:text-foreground transition-colors hover:underline"
                >
                  01033892534
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors hover:underline"
                >
                  {t("WhatsApp", "واتساب")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Abdelrahman Taha.{" "}
              {t("Built with", "صُنع بـ")}{" "}
              <Heart size={14} className="text-primary fill-primary animate-pulse" />{" "}
              {t("and React.", "و React.")}
            </p>
            
            {/* Legal Links */}
            <div className="flex gap-4 text-xs text-muted-foreground">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;