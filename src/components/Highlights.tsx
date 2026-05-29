import { Flame, Star, ShoppingCart, ArrowRight } from "lucide-react";
import { Product } from "../types";

interface HighlightsProps {
  onViewChange: (view: "landing" | "menu" | "admin") => void;
  onSetCategoryFilter?: (categoryTitle: string) => void;
}

export function Highlights({ onViewChange, onSetCategoryFilter }: HighlightsProps) {
  // Hardcoded curated highlights referencing actual data items
  const highlightedProducts = [
    {
      category: "Catálogo Geral",
      tag: "Massas Especiais",
      name: "Lasanha Bolonhesa",
      desc: "Nossa campeã de vendas. Massa caseira delicada, recheada com carne moída de Angus dourada, molho de tomate italiano artesanal e queijo muçarela gratinado.",
      priceInfo: "A partir de R$ 24,00",
      img: "https://images.pexels.com/photos/13823542/pexels-photo-13823542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      category: "Marmitas",
      tag: "Nutrição Fitness",
      name: "Marmita Fit Frango",
      desc: "Filé de peito de frango grelhado marinado em ervas finas e limão fatiado, acompanhado de cubos de batata doce dourada e brócolis cozido no vapor.",
      priceInfo: "300g por R$ 18,00",
      img: "https://images.pexels.com/photos/5905690/pexels-photo-5905690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      category: "Naturais",
      tag: "Detox Ativo",
      name: "Sucos Detox Extraídos a Frio",
      desc: "Suco prensado a frio com couve, espinafre, pepino, hortelã, gengibre e maçã verde. Nutrientes puros preservados para revigorar seu organismo.",
      priceInfo: "A partir de R$ 8,00",
      img: "https://images.pexels.com/photos/29851973/pexels-photo-29851973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      category: "Catálogo Geral",
      tag: "Doçura Trufada",
      name: "Torta de Bolacha Trufada",
      desc: "A sobremesa perfeita para coroar o final de semana. Camadas generosas de bolacha de amido de milho embebida, brigadeiro gourmet trufado e nata cremosa de verdade.",
      priceInfo: "A partir de R$ 19,90",
      img: "/tortatrufada.jpg"
    }
  ];

  const handleHighlightClick = (categoryName: string) => {
    if (onSetCategoryFilter) {
      onSetCategoryFilter(categoryName);
    }
    onViewChange("menu");
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <section 
      id="destaques" 
      className="py-24 px-6 bg-white relative"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-[#34d399] uppercase tracking-[0.3em] text-xs font-bold px-2">Sucesso de Vendas</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic mt-3 mb-4 md:mb-0 font-normal">
              Favoritos da Nossa Culinária
            </h2>
          </div>
          <button
            onClick={() => {
              if (onSetCategoryFilter) onSetCategoryFilter("Todos");
              onViewChange("menu");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest text-[#34d399] font-extrabold hover:text-stone-800 transition-colors py-2 border-b border-[#34d399]/40 hover:border-stone-800 cursor-pointer"
          >
            <span>Explorar Todo o Nosso Menu</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightedProducts.map((p, index) => (
            <div 
              key={index}
              className="flex flex-col bg-white border border-stone-100/60 hover:border-stone-200 duration-300 transition-all rounded-2xl overflow-hidden group h-full text-left shadow-sm hover:shadow-md"
            >
              {/* Image Container with hovering tag */}
              <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-stone-50">
                <img 
                  src={p.img} 
                  alt={p.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 duration-500 transition-transform object-center"
                />
                
                {/* Overlay shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

                {/* Floating Top Left tag */}
                <span className="absolute top-4 left-4 bg-[#34d399] text-white text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                  {p.tag}
                </span>

                {/* Star icon indicating highlight */}
                <div className="absolute top-4 right-4 text-[#34d399] drop-shadow-sm">
                  <Star size={16} fill="#34d399" className="animate-pulse" />
                </div>
              </div>

              {/* Text Area */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-serif text-stone-800 uppercase tracking-wider mb-2 group-hover:text-[#34d399] transition-colors leading-snug font-medium">
                  {p.name}
                </h3>
                
                <p className="text-stone-500 italic text-[11px] leading-relaxed mb-6 flex-1">
                  "{p.desc}"
                </p>

                {/* Footer price & CTA details */}
                <div className="mt-auto pt-4 border-t border-stone-100 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">Valor</span>
                    <span className="font-serif text-[#34d399] font-bold text-sm">
                      {p.priceInfo}
                    </span>
                  </div>

                  <button
                    onClick={() => handleHighlightClick(p.category)}
                    className="w-full py-2.5 bg-white text-[#34d399] hover:bg-emerald-50 text-[9px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm rounded-full"
                  >
                    <ShoppingCart size={11} />
                    <span>Quero Experimentar</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
