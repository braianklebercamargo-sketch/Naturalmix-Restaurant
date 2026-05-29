import { useState, useEffect } from "react";
import { Menu, X, Leaf, Smartphone, Printer } from "lucide-react";

interface NavbarProps {
  currentView: "landing" | "menu" | "admin";
  onViewChange: (view: "landing" | "menu" | "admin") => void;
  onScrollToSection: (sectionId: string) => void;
}

export function Navbar({ currentView, onViewChange, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active highlighting
      if (currentView === "landing") {
        const sections = ["inicio", "diferenciais", "destaques", "sobre", "como-funciona", "faq"];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onViewChange("landing");
    // Small delay to allow react to switch view and mount elements if needed
    setTimeout(() => {
      onScrollToSection(sectionId);
    }, 100);
  };

  const navLinks = [
    { id: "diferenciais", label: "Diferenciais" },
    { id: "destaques", label: "Mais Pedidos" },
    { id: "sobre", label: "Sobre Nós" },
    { id: "como-funciona", label: "Como Funciona" },
    { id: "faq", label: "Dúvidas" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 print:hidden ${currentView === "admin" ? "hidden" : ""} ${
        isScrolled || currentView === "menu"
          ? "bg-white/95 backdrop-blur-md border-b border-stone-100 py-4 shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-stone-100 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick("inicio")} 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
        >
          <img src="/logo-removebg-preview.png" alt="Naturalmix" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          <span className="text-lg sm:text-xl font-serif text-stone-800 group-hover:text-stone-900 transition-colors tracking-widest font-semibold">
            Natural<span className="text-[#34d399] font-light">mix</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-8 px-4 lg:px-8">
          {navLinks.map((link) => (
            <button
               key={link.id}
               onClick={() => handleNavClick(link.id)}
               className={`text-[10px] xl:text-xs uppercase tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-200 hover:text-[#34d399] font-medium cursor-pointer ${
                 currentView === "landing" && activeSection === link.id
                   ? "text-[#34d399] font-bold"
                   : "text-stone-500"
               }`}
            >
              {link.label}
            </button>
          ))}

          {/* Divider */}
          <div className="h-4 w-[1px] bg-stone-200" />

          {/* Cardapio Tab button */}
          <button
            onClick={() => {
              onViewChange("menu");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-[10px] xl:text-xs uppercase tracking-[0.1em] xl:tracking-[0.2em] px-3 xl:px-5 py-2 xl:py-2.5 border transition-all duration-300 font-bold cursor-pointer rounded-full ${
              currentView === "menu"
                ? "bg-[#34d399] text-white border-[#34d399]"
                : "text-[#34d399] border-[#34d399]/40 hover:border-[#34d399] hover:bg-emerald-50"
            }`}
          >
            Cardápio
          </button>
        </div>

        {/* WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {currentView === "menu" && (
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2.5 border border-stone-200 hover:border-[#34d399]/50 text-stone-600 hover:text-[#34d399] rounded-full transition-colors text-[10px] uppercase tracking-wider font-bold bg-white shadow-sm cursor-pointer"
              title="Salvar como PDF"
            >
              <Printer size={13} />
              <span>PDF</span>
            </button>
          )}
          <a
            href="https://wa.me/5554991498811"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#34d399] text-white hover:bg-[#34d399] px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-full shadow-sm shadow-[#34d399]/20 hover:-translate-y-0.5"
          >
            <Smartphone size={12} />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {currentView === "menu" && (
            <button
              onClick={() => window.print()}
              className="px-3 py-2 border border-stone-200 text-stone-600 rounded-full bg-white hover:text-[#34d399] shadow-sm"
            >
              <Printer size={14} />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-600 hover:text-stone-900 p-2 border border-stone-200 rounded-full bg-white shadow-sm"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-stone-100 py-6 px-6 shadow-xl flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-xs uppercase tracking-[0.25em] py-2 transition-all ${
                currentView === "landing" && activeSection === link.id
                  ? "text-[#34d399] font-bold border-l-2 border-[#34d399] pl-3"
                  : "text-stone-600 hover:text-stone-900 pl-3"
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="h-[1px] bg-stone-200 my-1" />

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onViewChange("menu");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-center text-xs uppercase tracking-[0.2em] py-3 border transition-colors ${
              currentView === "menu"
                ? "bg-[#34d399] text-white border-[#34d399] font-bold"
                : "text-[#34d399] border-[#34d399]/30 bg-white hover:bg-emerald-50 font-bold"
            }`}
          >
            Cardápio Digital
          </button>

          <a
            href="https://wa.me/5554991498811"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#34d399] text-white py-3 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-md"
          >
            <Smartphone size={13} />
            <span>Chamar WhatsApp (54 99149-8811)</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onViewChange("admin");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-center text-[10px] uppercase tracking-[0.2em] py-3 text-stone-400 hover:text-[#34d399] transition-colors font-medium mt-2"
          >
            Acesso Admin
          </button>
        </div>
      )}
    </nav>
  );
}
