import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FeaturedProperty: React.FC = () => {
  return (
    <div 
      className="w-full animate-[fadeInUp_1s_ease-out_forwards] opacity-0"
      style={{ animationDelay: '0.8s' }}
    >
      <h3 className="text-white text-xs uppercase tracking-widest mb-3 pl-1 border-l-2 border-gold flex items-center gap-2 drop-shadow-md">
        <span className="font-semibold">Oportunidade do Mês</span>
      </h3>
      
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-gold/10 animate-float">
        <div className="h-48 overflow-hidden relative">
           <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10 shadow-lg">
             <span className="text-gold text-xs font-bold">R$ 12.500.000</span>
           </div>
           <img 
            src="https://picsum.photos/seed/luxury_mansion/800/600" 
            alt="Mansão de Luxo" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="p-4">
          <h4 className="text-white font-medium text-lg mb-1 drop-shadow-md">Mansão Horizon - Jardins</h4>
          <p className="text-gray-300 text-xs mb-4">6 Suítes • 8 Vagas • 1.200m²</p>
          
          <div className="flex items-center text-gold text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 drop-shadow-sm">
            Ver Detalhes <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};