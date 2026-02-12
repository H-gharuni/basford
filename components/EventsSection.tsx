import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { EVENTS } from '../constants';
import Button from './Button';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Upcoming Events</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-400">Live music, bingo, sports and more.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-amber-600/50 transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded shadow">
                  {event.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <button className="w-full text-amber-500 text-sm font-medium hover:text-amber-400 flex items-center justify-center gap-1 group/btn">
                  More Details
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Button variant="outline">View Full Calendar</Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;