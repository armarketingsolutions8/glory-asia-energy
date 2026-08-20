 {}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll delay={200}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex items-center space-x-4 px-2 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center text-[#F29631] flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">&gt;30M</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Tonnes of Reserves (Fluorite, Pb-Zn, etc.)</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 px-2 pt-4 md:pt-0 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-[#5176A2] flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-inner">
                <Globe2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">&gt;20B</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">RMB Corporate Valuation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 px-2 pt-4 md:pt-0 group cursor-default">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#183058] leading-none mb-1">36</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Technical Patents (40% Inventions)</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
