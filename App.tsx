import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import FacilitiesSection from './components/FacilitiesSection';
import Footer from './components/Footer';
//import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <EventsSection />
        
        {/* Membership Call to Action Strip */}
        <section id="join" className="py-12 bg-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Become a Member Today</h2>
              <p className="text-amber-100">Join for just £10 a year and enjoy discounted drinks and priority tickets.</p>
            </div>
            <button className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition shadow-lg whitespace-nowrap">
              Sign Up Now
            </button>
          </div>
        </section>

        <FacilitiesSection />
      </main>

      <Footer />
      /*<ChatWidget />*/
    </div>
  );
};

export default App;