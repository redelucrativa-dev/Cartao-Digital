import React from 'react';
import { GlassContainer } from './components/GlassContainer';
import { ProfileHeader } from './components/ProfileHeader';
import { ActionGrid } from './components/ActionGrid';
import { SaveContact } from './components/SaveContact';
import { FeaturedProperty } from './components/FeaturedProperty';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full flex justify-center overflow-hidden bg-black">
      {/* Background Layer with Parallax-like fixity */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80" 
          alt="Luxury House Background" 
          className="w-full h-full object-cover opacity-90 blur-[3px] scale-105"
        />
        {/* Lighter dark overlay for better visibility but not too dark */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        {/* Subtle noise texture or gradient for extra luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-md p-4 min-h-screen flex flex-col">
        <GlassContainer className="flex-1 mt-4 mb-4 flex flex-col shadow-2xl shadow-black/50">
          <ProfileHeader />
          <ActionGrid />
          <SaveContact />
          <FeaturedProperty />
          <div className="flex-1" /> {/* Spacer */}
          <Footer />
        </GlassContainer>
      </main>
    </div>
  );
}

export default App;