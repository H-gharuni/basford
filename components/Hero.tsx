import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/pubinterior/1920/1080" 
          alt="Basford Miners Welfare Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white mb-6 drop-shadow-lg">
          Heart of the <span className="text-amber-500">Community</span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Welcome to Basford Miners Welfare. A premium social club offering live entertainment, 
          live sports, and the perfect venue for your next celebration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" onClick={() => document.getElementById('events')?.scrollIntoView({behavior: 'smooth'})}>
            What's On
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('facilities')?.scrollIntoView({behavior: 'smooth'})}>
            Venue Hire
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;