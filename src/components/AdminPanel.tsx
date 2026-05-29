import { useState } from "react";
import { Category, Product, ProductPrice } from "../types";
import { Lock, Save, Plus, Trash2, ArrowLeft, Upload } from "lucide-react";

interface AdminPanelProps {
  catalogData: Category[];
  setCatalogData: (data: Category[]) => void;
  onViewChange: (view: "landing" | "menu") => void;
}

export function AdminPanel({ catalogData, setCatalogData, onViewChange }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [editingData, setEditingData] = useState<Category[]>(JSON.parse(JSON.stringify(catalogData)));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Naturalmix123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta.");
    }
  };

  const handleSave = () => {
    setCatalogData(editingData);
    alert("Cardápio atualizado com sucesso!");
  };

  const addCategory = () => {
    setEditingData([...editingData, { title: "Nova Categoria", products: [] }]);
  };

  const updateCategoryTitle = (index: number, title: string) => {
    const newData = [...editingData];
    newData[index].title = title;
    setEditingData(newData);
  };

  const removeCategory = (index: number) => {
    if (confirm("Tem certeza que deseja excluir esta categoria?")) {
      const newData = [...editingData];
      newData.splice(index, 1);
      setEditingData(newData);
    }
  };

  const addProduct = (catIndex: number) => {
    const newData = [...editingData];
    newData[catIndex].products.push({
      id: Math.random().toString(36).substr(2, 9),
      name: "Novo Produto",
      description: "",
      prices: [{ weightOrUn: "Unidade", price: "0,00" }],
      imagePlaceholder: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    });
    setEditingData(newData);
  };

  const updateProduct = (catIndex: number, prodIndex: number, field: keyof Product, value: string) => {
    const newData = [...editingData];
    (newData[catIndex].products[prodIndex] as any)[field] = value;
    setEditingData(newData);
  };

  const removeProduct = (catIndex: number, prodIndex: number) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      const newData = [...editingData];
      newData[catIndex].products.splice(prodIndex, 1);
      setEditingData(newData);
    }
  };

  const addPrice = (catIndex: number, prodIndex: number) => {
    const newData = [...editingData];
    newData[catIndex].products[prodIndex].prices.push({ weightOrUn: "Novo", price: "0,00" });
    setEditingData(newData);
  };

  const updatePrice = (catIndex: number, prodIndex: number, priceIndex: number, field: keyof ProductPrice, value: string) => {
    const newData = [...editingData];
    newData[catIndex].products[prodIndex].prices[priceIndex][field] = value;
    setEditingData(newData);
  };

  const removePrice = (catIndex: number, prodIndex: number, priceIndex: number) => {
    const newData = [...editingData];
    newData[catIndex].products[prodIndex].prices.splice(priceIndex, 1);
    setEditingData(newData);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 max-w-sm w-full text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#34d399]">
            <Lock size={20} />
          </div>
          <h2 className="text-xl font-serif text-stone-800 mb-2">Acesso Restrito</h2>
          <p className="text-xs text-stone-500 mb-6 font-sans">Digite a senha para gerenciar o cardápio (catálogo geral e PDF).</p>
          
          <input
            type="password"
            placeholder="Senha de acesso..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 focus:border-[#34d399] rounded-lg px-4 py-2.5 text-sm outline-none mb-4"
          />
          {error && <p className="text-xs text-red-500 mb-4">{error}</p>}
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onViewChange("landing")}
              className="flex-1 py-2.5 border border-stone-200 text-stone-600 hover:bg-stone-50 rounded-lg text-xs font-bold uppercase transition-colors"
            >
              Voltar
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#34d399] text-white rounded-lg text-xs font-bold uppercase hover:bg-[#20b881] transition-colors"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 p-6 pb-24 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Admin Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-4 z-50">
          <div className="flex items-center gap-4">
            <button onClick={() => onViewChange("landing")} className="text-stone-400 hover:text-stone-800 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-lg md:text-xl font-serif text-stone-800">Painel de Gerenciamento</h1>
              <p className="text-[10px] uppercase tracking-wider text-stone-500">Edição de Cardápio</p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#34d399] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#20b881] transition-colors"
          >
            <Save size={14} />
            <span>Salvar Alterações</span>
          </button>
        </div>

        {/* Editor */}
        <div className="space-y-8">
          {editingData.map((category, catIndex) => (
            <div key={catIndex} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <input
                  type="text"
                  value={category.title}
                  onChange={(e) => updateCategoryTitle(catIndex, e.target.value)}
                  className="flex-grow text-xl font-serif italic border-b border-stone-200 focus:border-[#34d399] bg-transparent outline-none py-1 px-2"
                  placeholder="Nome da categoria..."
                />
                <button onClick={() => removeCategory(catIndex)} className="text-red-400 hover:text-red-600 p-2" title="Excluir Categoria">
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="space-y-4">
                {category.products.map((product, prodIndex) => (
                  <div key={product.id} className="border border-stone-100 bg-stone-50 p-4 sm:p-5 rounded-xl relative flex flex-col xl:flex-row gap-5">
                    <button 
                      onClick={() => removeProduct(catIndex, prodIndex)}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 text-stone-400 hover:text-red-500 bg-white rounded-full p-1.5 shadow-sm border border-stone-100 z-10"
                    >
                      <Trash2 size={14} />
                    </button>
                    
                    <div className="w-full xl:w-32 flex-shrink-0 flex flex-col gap-2">
                       <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden border border-stone-200 shadow-inner mt-6 sm:mt-0">
                         {product.imagePlaceholder ? (
                           <img src={product.imagePlaceholder} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center text-stone-400 text-[10px] uppercase font-bold text-center p-2 leading-tight">Sem Imagem</div>
                         )}
                       </div>
                    </div>

                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="md:col-span-2">
                          <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1">Nome do Produto</label>
                          <input
                            type="text"
                            value={product.name}
                            onChange={(e) => updateProduct(catIndex, prodIndex, "name", e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-sm outline-none focus:border-[#34d399] transition-colors"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1">Imagem URL ou Upload</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={product.imagePlaceholder}
                              onChange={(e) => updateProduct(catIndex, prodIndex, "imagePlaceholder", e.target.value)}
                              className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-sm outline-none focus:border-[#34d399] transition-colors text-xs flex-1"
                              placeholder="https://..."
                            />
                            <label className="flex-shrink-0 cursor-pointer bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded px-3 flex items-center justify-center transition-colors">
                              <Upload size={14} className="text-stone-500" />
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      updateProduct(catIndex, prodIndex, "imagePlaceholder", reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1">Descrição</label>
                          <textarea
                            value={product.description || ""}
                            onChange={(e) => updateProduct(catIndex, prodIndex, "description", e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-sm outline-none focus:border-[#34d399] transition-colors resize-none h-20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-2">Preços e Tamanhos</label>
                        <div className="space-y-2">
                          {product.prices.map((price, priceIndex) => (
                            <div key={priceIndex} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white p-2 rounded-lg border border-stone-100 shadow-sm relative pr-10 sm:pr-2">
                              <input
                                type="text"
                                value={price.weightOrUn}
                                onChange={(e) => updatePrice(catIndex, prodIndex, priceIndex, "weightOrUn", e.target.value)}
                                placeholder="ex: 500g ou 10 un"
                                className="w-full sm:w-1/2 bg-stone-50 border border-stone-200 rounded px-3 py-1.5 text-xs outline-none focus:border-[#34d399]"
                              />
                              <input
                                type="text"
                                value={price.price}
                                onChange={(e) => updatePrice(catIndex, prodIndex, priceIndex, "price", e.target.value)}
                                placeholder="ex: 24,00"
                                className="w-full sm:w-1/2 bg-stone-50 border border-stone-200 rounded px-3 py-1.5 text-xs outline-none focus:border-[#34d399]"
                              />
                              <button 
                                onClick={() => removePrice(catIndex, prodIndex, priceIndex)}
                                className="absolute sm:relative top-2 sm:top-auto right-2 sm:right-auto text-stone-400 hover:text-red-500 p-1.5 bg-stone-50 rounded-md sm:bg-transparent"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => addPrice(catIndex, prodIndex)}
                          className="mt-3 text-[10px] bg-white border border-stone-200 px-3 py-1.5 rounded-full text-stone-600 uppercase font-bold flex items-center gap-1 hover:text-[#34d399] hover:border-[#34d399] transition-colors shadow-sm w-max"
                        >
                          <Plus size={12} /> Adicionar Preço/Tamanho
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => addProduct(catIndex)}
                className="mt-4 flex items-center justify-center w-full gap-2 py-3 border-2 border-dashed border-stone-200 text-stone-500 rounded-xl hover:border-[#34d399] hover:text-[#34d399] transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <Plus size={14} /> Adicionar Produto
              </button>
            </div>
          ))}

          <button
            onClick={addCategory}
            className="flex items-center justify-center w-full gap-2 py-4 border-2 border-dashed border-[#34d399]/40 text-[#34d399] rounded-2xl hover:bg-[#34d399]/5 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <Plus size={16} /> Nova Categoria
          </button>
        </div>

        {/* Integração com Canva */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="font-serif text-lg sm:text-xl text-stone-800 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-sm">C</span>
            Exportar para o Canva (Arquivo Editável)
          </h2>
          <p className="text-sm text-stone-500 mb-4">
            A forma mais avançada e eficaz de obter seu cardápio como um arquivo totalmente editável (vetorizado) no Canva é utilizando a nossa integração via PDF Nativo:
          </p>
          <ul className="text-sm text-stone-600 space-y-3 mb-6 bg-stone-50 p-4 rounded-xl border border-stone-100">
            <li className="flex gap-3"><span className="font-bold text-[#34d399]">1.</span> Salve quaisquer pendências clicando no botão verde no topo do painel.</li>
            <li className="flex gap-3"><span className="font-bold text-[#34d399]">2.</span> Clique no botão negro abaixo para abrir o layout de impressão e certifique-se de escolher <strong>"Salvar como PDF"</strong>.</li>
            <li className="flex gap-3"><span className="font-bold text-[#34d399]">3.</span> Por fim, no <a href="https://www.canva.com/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Canva.com</a>, clique em <strong>"Criar um Design" &gt; "Importar arquivo"</strong>. O Canva lerá o PDF e desbloqueará todos os textos e imagens para você editar livremente por lá!</li>
          </ul>
          
          <button
            type="button"
            onClick={() => {
              handleSave();
              onViewChange("menu");
              setTimeout(() => window.print(), 800);
            }}
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors text-xs font-bold uppercase tracking-widest gap-2"
          >
            <Upload size={16} /> Gerar PDF (Para Upload no Canva)
          </button>
        </div>

      </div>
    </div>
  );
}
