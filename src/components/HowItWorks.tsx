import { Search, Send, ChefHat, Heart, Utensils } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Search className="text-[#34d399]" size={20} />,
      title: "Escolha as suas refeições",
      desc: "Navegue pelo nosso Cardápio Digital Interativo. Oferecemos marmitas saudáveis, massas gourmet do catálogo geral, sucos detox e deliciosas sobremesas."
    },
    {
      num: "02",
      icon: <Send className="text-[#34d399]" size={20} />,
      title: "Envie pelo WhatsApp",
      desc: "Com um clique rápido no botão de pedido, você é redirecionado ou inicia nossa conversa no WhatsApp para finalizar a quantidade e os dias de entrega."
    },
    {
      num: "03",
      icon: <ChefHat className="text-[#34d399]" size={20} />,
      title: "Preparo sob Demanda",
      desc: "Cozinhamos de fato artesanalmente com ingredientes fresquinhos apenas pra você. Resfriamos com tecnologia adequada para reter texturas e sabores originais."
    },
    {
      num: "04",
      icon: <Utensils className="text-[#34d399]" size={20} />,
      title: "Aqueça & Desfrute",
      desc: "Receba em sua residência. Nossos recipientes são adequados para micro-ondas. Aqueça por 5-7 minutos e tenha uma refeição de rei sem sujar panelas."
    }
  ];

  return (
    <section 
      id="como-funciona" 
      className="py-24 px-6 bg-white relative"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[#34d399] uppercase tracking-[0.3em] text-xs font-bold px-2">Cuidado de Ponta a Ponta</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic mt-3 mb-6 font-normal">
            Como Funciona o Serviço
          </h2>
          <div className="w-16 h-[2px] bg-[#34d399] mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide font-medium">
            Processo descomplicado para você focar no que importa e manter uma alimentação saudável, saborosa e de alto valor nutritivo no seu lar.
          </p>
        </div>

        {/* Steps Horizontal/Vertical timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle line connector for wide monitors */}
          <div className="absolute top-[3.2rem] left-[12%] right-[12%] h-[1px] bg-[#34d399]/15 hidden lg:block z-0" />

          {steps.map((st, index) => (
            <div 
              key={index}
              className="relative flex flex-col items-center text-center p-6 bg-white border border-stone-100 rounded-2xl hover:border-stone-200 duration-300 transition-all z-10 shadow-sm hover:shadow-md"
            >
              {/* Badge Number indicator */}
              <span className="absolute top-4 right-6 text-2xl font-serif font-light text-stone-100 pointer-events-none select-none">
                {st.num}
              </span>

              {/* Icon Container */}
              <div className="h-16 w-16 rounded-full flex items-center justify-center border border-stone-100 bg-stone-50 mb-6 shadow-sm relative">
                {st.icon}
                {/* Visual glow indicator */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#34d399] animate-pulse" />
              </div>

              {/* Step info */}
              <h3 className="text-stone-800 font-serif text-base uppercase tracking-wider mb-3 font-semibold">
                {st.title}
              </h3>
              
              <p className="text-stone-500 text-xs sm:text-sm italic leading-relaxed px-2">
                "{st.desc}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
