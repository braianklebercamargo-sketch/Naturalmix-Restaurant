import { motion } from "motion/react";
import { ChevronRight, Leaf, Sparkles, Flame } from "lucide-react";

interface HeroProps {
  onViewChange: (view: "landing" | "menu" | "admin") => void;
  onScrollToSection: (sectionId: string) => void;
}

export function Hero({ onViewChange, onScrollToSection }: HeroProps) {
  return (
    <section 
      id="inicio"
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-white"
    >
      {/* Absolute design grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-50 via-white to-white opacity-80 pointer-events-none" />
      
      {/* Decorative vertical golden thin rules inside the container margins */}
      <div className="absolute top-0 bottom-0 left-[5%] w-[1px] bg-gradient-to-b from-transparent via-stone-100 to-transparent hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-[5%] w-[1px] bg-gradient-to-b from-transparent via-stone-100 to-transparent hidden xl:block z-0" />
 
      {/* Floating ambient subtle spheres */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-stone-50 rounded-full blur-[80px] pointer-events-none" />
 
      {/* Hero Content Container */}
      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center z-10">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-stone-50 border border-stone-100 rounded-full text-[#34d399] uppercase tracking-widest sm:tracking-[0.25em] text-[10px] font-bold">
            <Sparkles size={12} className="animate-pulse" />
            <span>Sabor Premium & Praticidade Diária</span>
          </div>
 
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-800 leading-[1.1] mb-4 sm:mb-6 font-normal tracking-tight">
            Comida saudável com o <span className="italic font-serif text-[#34d399]"><br className="hidden sm:block"/>sabor de verdade</span> que você ama.
          </h1>
 
          <p className="text-stone-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans tracking-wide">
            Na <strong className="text-stone-700 font-semibold">Naturalmix</strong>, unimos ingredientes selecionados, preparo de alto nível artesanal e zero aditivos químicos. Marmitas balanceadas, massas especiais do nosso catálogo geral, porções naturais estruturadas e sobremesas deliciosas. Tudo embalado e pronto para o seu dia a dia.
          </p>
 
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {/* CTA 1: View Menu */}
            <button
              onClick={() => {
                onViewChange("menu");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center justify-center gap-3 bg-[#34d399] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest sm:tracking-[0.2em] transition-all duration-300 hover:bg-[#34d399] rounded-full shadow-md shadow-[#34d399]/20 cursor-pointer"
            >
              <span>Ver Cardápio Digital</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
 
            {/* CTA 2: WhatsApp */}
            <a
              href="https://wa.me/5554991498811"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-stone-200 text-stone-700 hover:border-[#34d399] px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest sm:tracking-[0.2em] transition-all duration-300 bg-white hover:bg-stone-50 rounded-full shadow-sm"
            >
              <Flame size={14} className="text-[#34d399]" />
              <span>Fazer Pedido Rapidamente</span>
            </a>
          </div>
 
          {/* Core high-level proof points */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-stone-100 w-full max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-serif text-stone-800 font-semibold">100%</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#34d399] font-bold mt-1">Artesanal</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-stone-800 font-semibold">50+</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#34d399] font-bold mt-1">Opções</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-stone-800 font-semibold">Zero</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#34d399] font-bold mt-1">Aditivos</div>
            </div>
          </div>
 
        </div>
 
        {/* Right column: Graphic Representation / Immersive Image */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
          {/* Framed Layout for culinary presentation */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] bg-white rounded-2xl p-3 group shadow-xl shadow-stone-200/50">
            <div className="relative w-full h-full overflow-hidden bg-stone-50 rounded-xl">
              <img 
                src="https://images.pexels.com/photos/13823542/pexels-photo-13823542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="Alimentação Saudável Naturalmix"
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700 object-center"
              />
              {/* Bottom shade overlay */}
               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-black/5 to-transparent rounded-b-xl" />
              
              {/* Small floating card on image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 border border-stone-100 backdrop-blur-md rounded-xl text-left shadow-lg">
                <div className="text-[10px] text-[#34d399] uppercase tracking-widest font-bold mb-1">Destaque da Semana</div>
                <div className="text-stone-800 font-serif italic text-base">Lasanhas Especiais do Catálogo Geral</div>
                <div className="text-stone-500 text-[11px] mt-1">Massa artesanal caseira de verdade preparada com ingredientes premium selecionados.</div>
              </div>
            </div>
            
            {/* Absolute badge behind the image on right-top */}
            <div className="absolute -top-4 -right-4 w-28 h-28 border border-white rounded-full flex flex-col items-center justify-center p-2 text-center bg-white/95 backdrop-blur-md shadow-lg hidden md:flex pointer-events-none z-10">
              <Leaf size={16} className="text-[#34d399] mb-1" />
              <div className="text-[8px] uppercase tracking-widest text-[#34d399] font-bold leading-none">Cozinha</div>
              <div className="text-[10px] font-semibold text-stone-800 font-serif mt-0.5">Artesanal</div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
}
