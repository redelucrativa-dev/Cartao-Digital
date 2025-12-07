import React from 'react';
import { MessageCircle, MapPin, Mail, Globe } from 'lucide-react';
import { ActionButtonProps } from '../types';

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, delay }) => (
  <div 
    className="animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 h-full"
    style={{ animationDelay: delay }}
  >
    <button 
      onClick={onClick}
      className="
        w-full h-full
        group relative flex flex-col items-center justify-center p-4 
        bg-black/20 backdrop-blur-md 
        border border-white/10 rounded-xl 
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        transition-all duration-500 ease-out
        hover:animate-float-hover
        hover:bg-gradient-to-br hover:from-white/10 hover:to-gold/20
        hover:border-gold/50 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.3)]
        active:scale-95
        overflow-hidden
      "
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-500 pointer-events-none" />
      
      {/* Inner highlight for glass feel */}
      <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />

      <div className="relative z-10 text-gold/90 group-hover:text-white transition-all duration-300 mb-3 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
        {icon}
      </div>
      
      <span className="relative z-10 text-[10px] font-semibold text-gray-300 uppercase tracking-widest group-hover:text-gold-light transition-colors duration-300">
        {label}
      </span>
    </button>
  </div>
);

export const ActionGrid: React.FC = () => {
  const handleWhatsApp = () => window.open('https://wa.me/5511999999999', '_blank');
  const handleLocation = () => window.open('https://maps.google.com', '_blank');
  const handleEmail = () => window.location.href = 'mailto:contato@luxeestate.com';
  const handleSite = () => window.open('https://example.com', '_blank');

  return (
    <div className="grid grid-cols-2 gap-4 w-full mb-8">
      <ActionButton 
        icon={<MessageCircle size={26} strokeWidth={1.5} />} 
        label="WhatsApp" 
        onClick={handleWhatsApp} 
        delay="0.2s"
      />
      <ActionButton 
        icon={<MapPin size={26} strokeWidth={1.5} />} 
        label="Localização" 
        onClick={handleLocation} 
        delay="0.3s"
      />
      <ActionButton 
        icon={<Mail size={26} strokeWidth={1.5} />} 
        label="E-mail" 
        onClick={handleEmail} 
        delay="0.4s"
      />
      <ActionButton 
        icon={<Globe size={26} strokeWidth={1.5} />} 
        label="Portfólio" 
        onClick={handleSite} 
        delay="0.5s"
      />
    </div>
  );
};