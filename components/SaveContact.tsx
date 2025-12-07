import React from 'react';
import { UserPlus } from 'lucide-react';

export const SaveContact: React.FC = () => {
  const handleSave = () => {
    alert("Iniciando download do vCard...");
  };

  return (
    <button 
      onClick={handleSave}
      className="
        relative w-full overflow-hidden group 
        bg-gradient-to-r from-[#AF8C2C] via-[#F5D56E] to-[#AF8C2C] bg-[length:200%_auto]
        text-black/80 font-bold 
        py-4 px-6 rounded-xl 
        transition-all duration-500 
        hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.4)]
        shadow-lg shadow-black/20
        mb-8 animate-[fadeInUp_1s_ease-out_forwards] opacity-0
        border border-[#F5D56E]/50
      "
      style={{ animationDelay: '0.6s' }}
    >
      {/* Glare effect moving across */}
      <div className="absolute inset-0 bg-white/30 w-1/2 h-full skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out blur-sm"></div>
      
      <div className="flex items-center justify-center gap-3 relative z-10">
        <UserPlus size={20} className="text-black/70 group-hover:text-black transition-colors" strokeWidth={2} />
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-black/90 group-hover:text-black">Salvar na Agenda</span>
      </div>
    </button>
  );
};