import { useState, useEffect } from "react";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LangContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { en: "About", ar: "عني", href: "#about" },
  { en: "Services", ar: "الخدمات", href: "#services" },
  { en: "Portfolio", ar: "أعمالي", href: "#portfolio" },
  { en: "Skills", ar: "المهارات", href: "#skills" },
  { en: "Contact", ar: "تواصل", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="#" className="text-xl font-bold gradient-text">
          AT
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.en}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {t(item.en, item.ar)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-sm font-semibold"
            aria-label="Toggle language"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.en}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {t(item.en, item.ar)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
