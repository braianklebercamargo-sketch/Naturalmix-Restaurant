import { Product } from '../types';

export function CatalogItem({ product }: { product: Product; key?: any }) {
  return (
    <div className="flex flex-col h-full bg-white border border-stone-100 hover:border-stone-200 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-md overflow-hidden print:flex-row print:items-center print:bg-transparent print:border-b print:border-stone-200 print:border-t-0 print:border-l-0 print:border-r-0 print:mb-6 print:pb-6 print:break-inside-avoid print:h-auto print:rounded-none print:shadow-none print:overflow-visible">
      {/* 
        Image Placeholder 
        Replace the src below with your actual images or keep the <img> tag ready.
      */}
      <div className="relative h-56 w-full overflow-hidden bg-stone-50 border-b border-stone-100 print:w-32 print:h-32 print:border-none print:flex-shrink-0 print:rounded-none print:overflow-visible print:bg-transparent">
        {product.imagePlaceholder && (
          <>
            <img 
              src={product.imagePlaceholder} 
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-500 print:hidden"
            />
            {/* Imagem clean para impressão (vetorização nativa no PDF sem rasterização forçada do CSS) width nativo do PDF */}
            <img 
              src={product.imagePlaceholder} 
              alt={product.name}
              referrerPolicy="no-referrer"
              className="hidden print:block w-32 h-32 object-contain"
            />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent pointer-events-none print:hidden" />
      </div>

      <div className="flex flex-col flex-grow p-6 print:p-0 print:pl-8 print:w-full">
        <h3 className="text-lg font-serif text-stone-800 uppercase tracking-wider mb-2 print:text-[#34d399] print:mb-2 print:text-xl font-medium">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-xs text-stone-500 italic leading-relaxed mb-6 flex-grow print:mb-4 print:flex-none print:text-[13px]">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-stone-100 print:border-none print:pt-0 print:mt-1">
          <ul className="space-y-2 print:space-y-2 print:flex print:flex-col print:w-full">
            {product.prices.map((p, idx) => (
              <li key={idx} className="flex justify-between items-baseline text-sm print:flex-row print:items-center print:w-full font-sans print:border-b print:border-stone-100 print:pb-1 print:mb-1">
                <span className="text-stone-500 uppercase tracking-wider text-[10px] print:text-stone-700 font-bold print:text-xs print:text-left print:flex-1 leading-tight pr-4">{p.weightOrUn}</span>
                <span className="font-serif text-[#34d399] font-bold tracking-tight text-lg print:text-stone-800 print:text-[14px] print:text-right print:whitespace-nowrap leading-tight">
                  R$ {p.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
