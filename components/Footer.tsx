import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 mb-6 flex flex-col items-center animate-[fadeInUp_1.2s_ease-out_forwards] opacity-0" style={{ animationDelay: '1s' }}>
      <div className="flex gap-6 mb-6">
        <a href="#" className="text-gray-400 hover:text-gold hover:scale-110 transition-all duration-300">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gold hover:scale-110 transition-all duration-300">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gold hover:scale-110 transition-all duration-300">
          <Facebook size={20} />
        </a>
      </div>
      <p className="text-white/20 text-[10px] tracking-widest uppercase">
        © 2024 LuxeEstate. All rights reserved.
      </p>
    </footer>
  );
};