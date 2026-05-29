import { Star, Quote, MessageSquare } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Mariana S. Fagundes",
      location: "Passo Fundo - RS",
      stars: 5,
      review: "A lasanha bolonhesa do catálogo geral é de outro mundo! A massa é super fininha e o molho de tomate é caseiro de verdade. Sabor incrível que agrada toda a família.",
      tag: "Cliente Mensalista"
    },
    {
      name: "Rodrigo Alencar",
      location: "Passo Fundo - RS",
      stars: 5,
      review: "Eu pedia marmitas da concorrência e sempre vinham aguadas e sem sal. O tempero da Naturalmix é perfeito! O arroz de couve-flor e o frango fit têm sabor de verdade, super suculentos.",
      tag: "Marmitas Fitness"
    },
    {
      name: "Sabrina De Carli",
      location: "Passo Fundo - RS",
      stars: 5,
      review: "Adoro os sucos detox e as saladas no pote. Me ajudam muito a manter a rotina saudável no escritório sem gastar horas cozinhando. Embalagens impecáveis e entrega sempre no horário.",
      tag: "Alimentação Saudável"
    }
  ];

  return (
    <section 
      id="depoimentos" 
      className="py-24 px-6 bg-white border-t border-b border-stone-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-stone-100/30 via-white to-white opacity-90 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[#34d399] uppercase tracking-[0.3em] text-xs font-bold px-2">Histórias de Sucesso</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 italic mt-3 mb-6 font-normal">
            O que dizem nossos clientes
          </h2>
          <div className="w-16 h-[2px] bg-[#34d399] mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-500 text-xs sm:text-sm leading-relaxed tracking-wide font-medium">
            A opinião de quem já consome nossas refeições diariamente é a nossa maior medalha e prova do comprometimento com o sabor de verdade.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="group p-6 sm:p-10 bg-white border border-stone-100 rounded-2xl hover:border-stone-200 transition-all duration-300 relative shadow-sm hover:shadow-md"
            >
              <div className="absolute -top-3 left-10 w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-[#34d399] shadow-sm">
                <Quote size={14} fill="#34d399" />
              </div>

              {/* Star rating */}
              <div className="flex gap-1 mb-5 mt-2">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#34d399" className="text-[#34d399]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-stone-500 italic text-xs sm:text-sm leading-relaxed mb-8 flex-1">
                "{rev.review}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-stone-100 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div>
                  <h4 className="text-stone-800 font-serif text-sm font-bold tracking-wide">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-stone-500 text-[10px] uppercase tracking-wider mt-1">
                    <MessageSquare size={10} className="text-[#34d399]" />
                    <span>{rev.location}</span>
                  </div>
                </div>
                
                <span className="text-[9px] bg-stone-50 border border-stone-100 text-[#34d399] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm text-center">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
