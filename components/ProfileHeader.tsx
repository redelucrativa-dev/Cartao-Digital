import React from 'react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
      <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-light rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src="https://picsum.photos/seed/realtor_man/400/400" 
          alt="Corretor de Luxo" 
          className="relative w-32 h-32 rounded-full border-4 border-gold object-cover shadow-lg"
        />
      </div>
      
      <h1 className="mt-4 text-3xl font-bold text-white tracking-wide">
        Ricardo Silva
      </h1>
      
      <h2 className="text-sm font-medium text-gold uppercase tracking-widest mt-1">
        Corretor de Imóveis de Luxo
      </h2>
      
      <div className="w-12 h-0.5 bg-gold/50 my-4 rounded-full"></div>
      
      <p className="text-gray-200 text-sm font-light italic max-w-xs leading-relaxed">
        "Transformando sonhos em endereços exclusivos."
      </p>
    </div>
  );
};