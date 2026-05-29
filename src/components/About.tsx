import { Crown, Heart, Sparkles, MapPin } from "lucide-react";

export function About() {
  return (
    <section 
      id="sobre" 
      className="py-24 px-6 bg-white border-t border-b border-stone-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-stone-100/30 via-white to-white opacity-90" />
      
      <div className="relative max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Visual representation */}
        <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] bg-white border border-stone-100 p-3 shadow-md rounded-3xl">
            <div className="relative w-full h-full overflow-hidden bg-stone-50 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" 
                alt="Nossa Cozinha Caseira"
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Regional tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 border border-stone-100 backdrop-blur-xs flex items-center gap-3 shadow-sm rounded-xl">
                <MapPin className="text-[#34d399] flex-shrink-0" size={18} />
                <div className="text-left">
                  <div className="text-stone-800 text-xs font-bold">Passo Fundo - RS</div>
                  <div className="text-stone-500 text-[10px] uppercase tracking-wider mt-0.5 font-medium">Atendimento e Delivery Local</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
          <span className="text-[#34d399] uppercase tracking-[0.3em] text-xs font-bold px-1">Nossa História</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic mt-3 mb-6 font-normal">
            Feito por quem ama cozinhar de verdade
          </h2>
          <div className="w-16 h-[2px] bg-[#34d399] mb-8 rounded-full"></div>

          <div className="space-y-6 text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide font-sans font-medium">
            <p>
              A <strong className="text-stone-800 font-bold">Naturalmix</strong> nasceu com um desejo simples, mas robusto: resgatar o sabor autêntico da comida caseira artesanal e torná-la perfeitamente compatível com a rotina dinâmica e atarefada de nossos clientes.
            </p>
            <p>
              Acreditamos que se alimentar de forma equilibrada não deve significar consumir pratos sem cor, sem tempero ou ultraprocessados industriais. Por isso, abrimos mão de conservantes químicos, temperos artificiais em pó ou espessantes. Nosso aroma vem exclusivamente de ervas frescas, cebola, alho picado à mão e caldos preparados lentamente em caldeirões.
            </p>
            <p>
              Cada porção que sai da nossa cozinha passa por um rígido padrão de qualidade, desde a escolha dos fornecedores de insumos hortifrúti locais até o momento de selar as embalagens. É essa obsessão pelo detalhe que transforma uma simples refeição rápida em um verdadeiro almoço ou jantar de restaurante na privacidade do seu lar.
            </p>
          </div>

          {/* Icon benefits layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-50 rounded-full flex-shrink-0 shadow-sm border border-stone-100">
                <Crown className="text-[#34d399]" size={16} />
              </div>
              <div className="text-left">
                <h4 className="text-stone-800 font-serif text-sm uppercase tracking-wider mb-1 font-bold">Qualidade Ouro</h4>
                <p className="text-stone-500 text-xs italic">Carnes da melhor procedência e vegetais frescos e selecionados.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-50 rounded-full flex-shrink-0 shadow-sm border border-stone-100">
                <Heart className="text-[#34d399]" size={16} />
              </div>
              <div className="text-left">
                <h4 className="text-stone-800 font-serif text-sm uppercase tracking-wider mb-1 font-bold">Preparo com Amor</h4>
                <p className="text-stone-500 text-xs italic">Sabor que traz recordações de carinho familiar no paladar.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
