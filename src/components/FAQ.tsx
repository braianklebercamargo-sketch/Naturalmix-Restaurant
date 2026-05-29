import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como as marmitas e massas chegam embaladas e prontas?",
      a: "Tudo é preparado na hora, porcionado sob rígidos controles e embalado em potes livres de BPA (Bisfenol-A), lacrados hermeticamente. Nossas embalagens resistem tanto a congelamentos profundos quanto ao aquecimento em micro-ondas de forma perfeitamente segura."
    },
    {
      q: "Qual a melhor maneira de aquecer minha refeição?",
      a: "Se estiver congelada, retire a tampa protetora ou apenas abra uma fenda lateral para saída do vapor e aqueça no micro-ondas por aproximadamente 6 a 8 minutos. Se estiver resfriada na geladeira, de 3 a 4 minutos são suficientes. Também pode ser aquecida em banho-maria no fogão!"
    },
    {
      q: "Por quanto tempo posso conservar os pratos?",
      a: "No freezer (congelamento a -18°C), os pratos conservam todo o sabor e nutrientes originais por até 90 dias. Na geladeira convencional (refrigeração), recomendamos consumir em no máximo 3 dias para garantir o frescor absoluto."
    },
    {
      q: "Como funcionam as encomendas do catálogo geral?",
      a: "Nosso catálogo geral possui massas artesanais, carnes, tortas e acompanhamentos gourmet. Recomendamos fazer os pedidos com antecedência para garantir a reserva dos ingredientes."
    },
    {
      q: "Quais regiões vocês atendem para entrega?",
      a: "Atendemos exclusivamente na cidade de Passo Fundo - RS. Para checar as taxas de entrega para o seu bairro e prazos disponíveis, envie uma mensagem no nosso suporte via WhatsApp."
    },
    {
      q: "Oferecem opções para restrições alimentares específicas?",
      a: "Sim! Oferecemos opções integrais puras, receitas fitness de baixo carboidrato (Low Carb), legumes in natura descascados e saladas orgânicas no pote. Fale conosco para entender como podemos estruturar combos sob medida para seus objetivos."
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-24 px-6 bg-white relative"
    >
      <div className="relative max-w-4xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#34d399] uppercase tracking-[0.3em] text-xs font-bold px-2">Esclarecendo Suas Dúvidas</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 italic mt-3 mb-6 font-normal">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-[2px] bg-[#34d399] mx-auto mb-4"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="group border border-stone-200/80 hover:border-[#34d399]/30 transition-all bg-white rounded-none overflow-hidden shadow-3xs"
              >
                {/* Accordion header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 transition-colors hover:bg-stone-50 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-serif text-stone-800 font-semibold group-hover:text-[#34d399] transition-colors">
                    {faq.q}
                  </span>
                  
                  <div className="w-6 h-6 rounded-full flex items-center justify-center border border-stone-200 bg-stone-50 flex-shrink-0">
                    {isOpen ? (
                      <Minus size={12} className="text-[#34d399]" />
                    ) : (
                      <Plus size={12} className="text-[#34d399]" />
                    )}
                  </div>
                </button>

                {/* Accordion content */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-stone-550 text-xs sm:text-sm tracking-wide leading-relaxed animate-none">
                    <div className="pt-4 border-t border-stone-100 italic">
                      "{faq.a}"
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
