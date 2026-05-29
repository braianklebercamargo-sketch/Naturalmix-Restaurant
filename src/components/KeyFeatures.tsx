import { Leaf, Award, ShieldCheck, Truck } from "lucide-react";

export function KeyFeatures() {
  const features = [
    {
      icon: <Leaf className="text-[#34d399]" size={24} />,
      title: "Cozinha 100% Artesanal",
      desc: "Nossos molhos são apurados lentamente, nossas massas são sovadas e recheadas à mão, e nossos legumes são higienizados individualmente. Sabor de casa com requinte profissional.",
      badge: "Ingredientes Puros"
    },
    {
      icon: <Award className="text-[#34d399]" size={24} />,
      title: "Cardápio Equilibrado",
      desc: "Criamos opções para quem quer emagrecer ou manter o corpo ativo (Linha Fit e Low Carb) e também deliciosas massas gourmet no nosso catálogo geral. Equilíbrio de verdade.",
      badge: "Variedade Real"
    },
    {
      icon: <ShieldCheck className="text-[#34d399]" size={24} />,
      title: "Prático & Perfeito",
      desc: "Nossas marmitas e porções chegam prontas em embalagens de altíssima segurança. Podem ir diretamente ao micro-ondas ou freezer. Comida de chef quente em apenas 6 minutos.",
      badge: "Economia de Tempo"
    },
    {
      icon: <Truck className="text-[#34d399]" size={24} />,
      title: "Entrega Sob Cuidado",
      desc: "Toda a produção é refrigerada com controle rígido de temperatura e despachada em caixas térmicas limpas. Garantimos frescor absoluto e preservação do sabor e dos nutrientes.",
      badge: "Lacre de Segurança"
    }
  ];

  return (
    <section 
      id="diferenciais" 
      className="py-24 px-6 bg-stone-50 border-t border-b border-stone-100 relative overflow-hidden"
    >
      {/* Decorative vector background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-100/50 via-stone-50 to-stone-50" />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[#34d399] uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold">Os Pilares de Excelência</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic mt-3 mb-6 font-normal">
            Por que escolher a Naturalmix?
          </h2>
          <div className="w-16 h-[2px] bg-[#34d399] mx-auto mb-6"></div>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide font-medium">
            Mais do que preparar marmitas, nosso propósito é proporcionar qualidade de vida através da culinária de verdade. Conheça nossos diferenciais exclusivos.
          </p>
        </div>

        {/* Features Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feat, index) => (
            <div 
              key={index}
              className="group flex flex-col p-6 sm:p-10 bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 relative rounded-2xl text-left shadow-sm hover:shadow-md"
            >
              <div className="absolute top-6 right-8 text-[10px] uppercase tracking-widest text-[#34d399] group-hover:text-emerald-700 transition-colors font-bold">
                {feat.badge}
              </div>

              <div className="w-12 h-12 flex items-center justify-center bg-stone-50 rounded-full mb-6 group-hover:bg-emerald-50 transition-colors">
                {feat.icon}
              </div>

              <h3 className="text-lg md:text-xl font-serif text-stone-800 group-hover:text-[#34d399] transition-colors mb-4 uppercase tracking-wide font-medium">
                {feat.title}
              </h3>

              <p className="text-stone-500 text-xs sm:text-sm italic leading-relaxed tracking-wide">
                "{feat.desc}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
