export function QRCodeSection({ title, subtitle }: { title: string; subtitle?: string }) {
  // Using WhatsApp API format for demonstration. The user requested 54 991498811
  const waLink = "https://wa.me/5554991498811";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(waLink)}&margin=10`;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-10 bg-[#f0fdf4] border border-[#34d399]/25 rounded-none print-avoid-break print-bg-dark max-w-4xl mx-auto w-full shadow-3xs">
      <div className="text-center md:text-left flex-1">
        <h2 className="text-2xl md:text-3xl font-serif italic text-emerald-800 mb-3 print-text-gold font-normal">
          {title}
        </h2>
        {subtitle && (
          <p className="text-stone-600 italic text-xs leading-relaxed max-w-md mx-auto md:mx-0 font-medium">
            {subtitle}
          </p>
        )}
        <div className="mt-6 no-print">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 outline outline-1 outline-[#34d399]/60 text-[10px] uppercase tracking-widest text-[#34d399] font-bold hover:bg-[#34d399] hover:text-white hover:outline-[#34d399] transition-all cursor-pointer bg-white"
          >
            Fazer Pedido Agora
          </a>
        </div>
      </div>
      
      <div className="flex-shrink-0 bg-white p-1 rounded-sm shadow-lg ring-1 ring-[#34d399]/20">
        <div className="border border-black p-1 bg-white">
          <img 
            src={qrUrl} 
            alt="QR Code para pedidos" 
            referrerPolicy="no-referrer"
            className="w-32 h-32 md:w-36 md:h-36 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
