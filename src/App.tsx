import { useState, useEffect } from "react";
import { catalogData as initialCatalogData } from "./data";
import { CatalogItem } from "./components/CatalogItem";
import { QRCodeSection } from "./components/QRCodeSection";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { KeyFeatures } from "./components/KeyFeatures";
import { Highlights } from "./components/Highlights";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { AdminPanel } from "./components/AdminPanel";
import { Category } from "./types";
import { Search, RotateCcw, Smartphone, Printer, Globe, ShoppingBag, Eye, Star, MapPin } from "lucide-react";

export default function App() {
  const [view, setView] = useState<"landing" | "menu" | "admin">("landing");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize catalog data from localStorage or initial configuration
  const [catalogData, setCatalogData] = useState<Category[]>(() => {
    const saved = localStorage.getItem("naturalmix_catalog_v3");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialCatalogData;
      }
    }
    return initialCatalogData;
  });

  // Save to localStorage when catalogData changes
  useEffect(() => {
    localStorage.setItem("naturalmix_catalog_v3", JSON.stringify(catalogData));
  }, [catalogData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Filter items based on active states for the SCREEN menu view
  const categoryFiltered = selectedCategory === "Todos"
    ? catalogData
    : catalogData.filter(cat => cat.title === selectedCategory);

  const finalFilteredData = categoryFiltered.map(cat => {
    const matchedProducts = cat.products.filter(prod => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;
      return (
        prod.name.toLowerCase().includes(query) ||
        (prod.description && prod.description.toLowerCase().includes(query))
      );
    });
    return {
      ...cat,
      products: matchedProducts
    };
  }).filter(cat => cat.products.length > 0);

  const hasResults = finalFilteredData.some(cat => cat.products.length > 0);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 flex flex-col print:block print:min-h-0 print:h-auto print:overflow-visible">
      
      {/* Floating Header Navbar */}
      <Navbar 
        currentView={view} 
        onViewChange={setView} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* ==================== LANDING PAGE VIEW ==================== */}
      <div className={view === "landing" ? "block print:hidden" : "hidden"}>
        {/* Immersive Hero Header */}
        <Hero onViewChange={setView} onScrollToSection={handleScrollToSection} />

        {/* Our Pillars / Diferenciais */}
        <KeyFeatures />

        {/* Teaser Highlights */}
        <Highlights onViewChange={setView} onSetCategoryFilter={setSelectedCategory} />

        {/* Storytelling / Sobre Nós */}
        <About />

        {/* Service walkthrough / Como Funciona */}
        <HowItWorks />

        {/* Client Social Proof / Depoimentos */}
        <Testimonials />

        {/* Expansible Frequently Asked Questions */}
        <FAQ />

        {/* Beautiful Landing-focused Footer */}
        <footer className="bg-stone-50 border-t border-stone-100 py-16 sm:py-20 px-6 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 text-left">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 flex flex-col items-start sm:col-span-2 md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-removebg-preview.png" alt="Naturalmix" className="w-10 h-10 object-contain" />
                <span className="text-xl font-serif text-stone-800 tracking-widest font-semibold">
                  Natural<span className="text-[#34d399] font-light">mix</span>
                </span>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed max-w-sm mb-6">
                Unindo nutrição saudável, frescor inigualável e o cuidado de preparos 100% gourmet artesanais para facilitar sua rotina com sabor e bem-estar de verdade.
              </p>
              <div className="flex gap-4">
                <span className="text-[10px] uppercase tracking-wider text-[#34d399] font-bold border-b border-emerald-100 hover:border-[#34d399] transition-colors cursor-pointer">@naturalmix</span>
                <span className="text-[10px] uppercase tracking-wider text-[#34d399] font-bold border-b border-emerald-100 hover:border-[#34d399] transition-colors cursor-pointer">Rio Grande do Sul</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 flex flex-col items-start gap-3 sm:col-span-1 md:col-span-3">
              <h4 className="text-[#34d399] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Seções Rápidas</h4>
              <button onClick={() => handleScrollToSection("diferenciais")} className="text-stone-500 hover:text-stone-800 transition-colors text-xs font-medium">Diferenciais</button>
              <button onClick={() => handleScrollToSection("destaques")} className="text-stone-500 hover:text-stone-800 transition-colors text-xs font-medium">Mais Pedidos</button>
              <button onClick={() => handleScrollToSection("sobre")} className="text-stone-500 hover:text-stone-800 transition-colors text-xs font-medium">Sobre Nós</button>
            </div>

            {/* Column 3: Contact/Schedule */}
            <div className="md:col-span-5 flex flex-col items-start sm:col-span-1 md:col-span-5">
              <h4 className="text-[#34d399] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Central de Atendimento</h4>
              <ul className="space-y-2 text-xs text-stone-500">
                <li className="flex items-center gap-2"><Smartphone size={13} className="text-[#34d399]" /> <span className="font-medium text-stone-800">(54) 99149-8811</span></li>
                <li className="flex items-center gap-2"><MapPin size={13} className="text-[#34d399]" /> <span className="font-medium text-stone-800">Passo Fundo - Atendimento Local</span></li>
                <li className="italic text-[11px] text-stone-400 pt-2 border-t border-stone-200 mt-2">"Encomendas do Catálogo Geral: Antecipe com antecedência."</li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">© 2026 Naturalmix. Todos os Direitos Reservados.</span>
            <div className="flex gap-4">
              <span onClick={() => { setView("admin"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-[10px] uppercase tracking-widest text-stone-300 hover:text-[#34d399] font-medium cursor-pointer transition-colors">Admin</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-300 font-medium">Privacidade</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-300 font-medium">Termos</span>
            </div>
          </div>
        </footer>
      </div>

       {/* ==================== SCREEN DIGITAL MENU VIEW ==================== */}
       <div className={view === "menu" ? "block print:block" : "hidden print:block"}>
        
        {/* Menu Header (Cover / Intro Card) */}
        <header className="relative pt-36 pb-16 px-6 border-b border-stone-100 mb-8 mx-auto w-full max-w-6xl print:block print:pt-4 print:pb-8 print:border-none bg-white">
          <button 
            onClick={() => window.print()}
            className="no-print absolute top-24 right-6 flex items-center gap-2 px-4 py-2 border border-stone-200 text-stone-600 rounded-full hover:bg-stone-50 hover:text-[#34d399] transition-colors uppercase tracking-widest text-[9px] font-bold bg-white z-10 shadow-sm"
            title="Salvar como PDF"
          >
            <Printer size={14} />
            <span className="hidden md:inline">Exportar Cardápio (PDF)</span>
            <span className="inline md:hidden">PDF</span>
          </button>
 
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-50 via-white to-white pointer-events-none print:hidden opacity-70" />
          
          <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
            <img src="/logo-removebg-preview.png" alt="Naturalmix Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4 print:hidden" />
            <img src="/logo-removebg-preview.png" alt="Naturalmix Logo" className="w-20 h-20 mb-4 hidden print:block" />
            <div className="mb-3">
               <span className="text-[#34d399] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold px-2">Cardápio Oficial Interativo</span>
            </div>
 
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-stone-800 italic mb-3 sm:mb-4 tracking-tight print:text-4xl font-normal">
              Natural<span className="text-[#34d399]">mix</span>
            </h1>
            
            <p className="text-stone-500 max-w-2xl text-[9px] sm:text-[10px] uppercase tracking-widest leading-relaxed mb-6 sm:mb-8 print:mb-2 print:text-stone-500">
              Marmitaria e Alimentação Saudável. Ingredientes selecionados, preparo com carinho artesanal. Faça as suas escolhas abaixo.
            </p>
 
            <button 
              onClick={() => {
                setView("landing");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="no-print inline-flex items-center gap-2 px-5 py-2.5 border border-stone-200 text-stone-600 hover:text-[#34d399] hover:border-emerald-100 rounded-full bg-white transition-all text-[10px] uppercase tracking-widest font-bold shadow-sm"
            >
              <Globe size={11} />
              <span>Voltar para a Página Inicial</span>
            </button>
          </div>
        </header>

        {/* Dynamic Controls Section (Search & Category filter) - Hidden during PRINT entirely */}
        <section className="no-print max-w-6xl w-full mx-auto px-6 mb-12">
          <div className="p-4 sm:p-6 bg-white border border-stone-100 shadow-sm rounded-2xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            
            {/* Categories Pills bar */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {["Todos", "Catálogo Geral", "Naturais", "Marmitas"].map((catName) => {
                const count = catName === "Todos" 
                  ? catalogData.reduce((acc, current) => acc + current.products.length, 0)
                  : catalogData.find(c => c.title === catName)?.products.length || 0;
                
                return (
                  <button
                    key={catName}
                    onClick={() => {
                      setSelectedCategory(catName);
                      setSearchQuery(""); // clear query to avoid confusion
                    }}
                    className={`px-3 py-2 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 sm:gap-2 rounded-full ${
                      selectedCategory === catName
                        ? "bg-[#34d399] text-white"
                        : "bg-white text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <span>{catName}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-sans ${selectedCategory === catName ? 'bg-white/30 text-white' : 'bg-stone-100 text-stone-500'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative max-w-xs w-full flex-shrink-0">
              <div className="absolute inset-y-0 left-3 flex items-center justify-center text-stone-400 pointer-events-none">
                <Search size={14} />
              </div>
              <input
                type="text"
                placeholder="PROCURAR PRATO..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-stone-200 focus:border-[#34d399] rounded-full focus:ring-1 focus:ring-[#34d399]/30 text-xs px-9 py-2.5 uppercase tracking-wider text-stone-800 placeholder-stone-400 outline-none transition-colors shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-xs text-stone-400 hover:text-stone-700 transition-colors font-medium"
                >
                  Limpar
                </button>
              )}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* Main Catalog mapping - FOR SCREEN IT SHOWS FILTERED, FOR PRINT SHOWS FULL */}
        {/* ========================================================================= */}
        
        {/* 1. SCREEN CATALOG (Displays when viewing on screen with responsive state) */}
        <main className="max-w-6xl w-full mx-auto px-6 py-4 space-y-20 flex-grow print:hidden mb-24">
          {hasResults ? (
            finalFilteredData.map((category, index) => (
              <section key={index} className="scroll-mt-12">
                <div className="mb-8 flex flex-col items-center text-center">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="h-[1px] w-8 bg-[#34d399]"></span>
                    <h2 className="text-2xl md:text-3xl font-serif text-stone-800 italic font-normal">
                      {category.title}
                    </h2>
                    <span className="h-[1px] w-8 bg-[#34d399]"></span>
                  </div>
                  {category.description && (
                    <p className="text-stone-500 max-w-2xl mx-auto text-xs italic leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                  {category.products.map((product) => (
                    <CatalogItem key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="py-20 flex flex-col items-center justify-center border border-dashed border-stone-200 p-8 max-w-md mx-auto bg-stone-50 rounded-2xl">
              <span className="text-stone-400 text-3xl mb-4">🍳</span>
              <h3 className="text-stone-800 font-serif text-lg italic mb-2">Nenhum prato encontrado</h3>
              <p className="text-stone-500 text-xs text-center leading-relaxed">
                Não encontramos correspondência para "{searchQuery}". Revise a grafia ou selecione outra categoria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-stone-200 text-stone-600 hover:bg-[#34d399] hover:border-[#34d399] hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold bg-white rounded-full shadow-sm"
              >
                <RotateCcw size={12} />
                <span>Limpar Filtros</span>
              </button>
            </div>
          )}
        </main>

        {/* 2. PRINT EXCLUSIVO CATALOG - Always contains 100% of the products formatted for print */}
        <main className="hidden print:block max-w-6xl w-full mx-auto px-6 space-y-12 print:space-y-6 overflow-visible text-left p-0">
          {catalogData.map((category, index) => (
            <section key={index} className="scroll-mt-12 print:pt-4">
              <div className="mb-6 flex flex-col items-center text-center print:mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="h-[1px] w-12 bg-[#34d399]"></span>
                  <h2 className="text-2xl font-serif text-stone-800 italic print:text-2xl font-normal">
                    {category.title}
                  </h2>
                  <span className="h-[1px] w-12 bg-[#34d399]"></span>
                </div>
                {category.description && (
                  <p className="text-stone-500 max-w-xl mx-auto text-xs italic leading-relaxed print:text-xs">
                    {category.description}
                  </p>
                )}
              </div>

              <div className="print:flex print:flex-col print:gap-1">
                {category.products.map((product) => (
                  <CatalogItem key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Menu Footer */}
        <footer className="bg-stone-50 border-t border-stone-100 mt-auto py-16 px-6 w-full print:hidden">
          <div className="max-w-4xl mx-auto">
            <QRCodeSection 
              title="Entrega Especial" 
              subtitle="Compromisso com a qualidade. Alimentação de alto nível preparada de forma artesanal. Escaneie ou clique no botão para pedir." 
            />
            <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#34d399] font-bold">Siga-nos: @naturalmix</span>
              <div className="hidden md:block h-1 w-1 bg-[#34d399] rounded-full"></div>
              <span className="text-[10px] uppercase tracking-widest text-[#34d399] font-bold">Atendimento Personalizado</span>
              <div className="hidden md:block h-1 w-1 bg-[#34d399] rounded-full"></div>
              <span className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">Pronto para Leitura e Impressão</span>
            </div>
          </div>
        </footer>

      </div>

      {view === "admin" && (
        <AdminPanel catalogData={catalogData} setCatalogData={setCatalogData} onViewChange={setView} />
      )}

      {/* Floating Voltar ao Topo button (Only on screen, hidden on print) */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="no-print fixed bottom-8 right-8 z-40 p-3 bg-[#10b981] text-white shadow-md hover:bg-[#059669] hover:shadow-lg transition-all hover:-translate-y-1 rounded-sm border-none cursor-pointer"
          title="Voltar ao Topo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}

    </div>
  );
}
