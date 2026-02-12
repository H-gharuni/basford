import React from 'react';
import { FACILITIES } from '../constants';
import * as LucideIcons from 'lucide-react';

const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Our Facilities</h2>
          <div className="h-1 w-24 bg-amber-500 rounded"></div>
          <p className="mt-4 text-gray-400 max-w-2xl">
            More than just a pub. We are a community hub with versatile spaces for every occasion.
          </p>
        </div>

        <div className="space-y-16">
          {FACILITIES.map((facility, index) => {
            // Dynamic icon loading
            const Icon = (LucideIcons as any)[facility.iconName] || LucideIcons.Info;
            const isEven = index % 2 === 0;

            return (
              <div key={facility.id} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
                        <img 
                            src={facility.imageUrl} 
                            alt={facility.title} 
                            className="w-full h-64 md:h-80 object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-amber-600/20 rounded-lg text-amber-500 mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                  <ul className="space-y-2 mt-4 text-gray-300">
                    <li className="flex items-center gap-2">
                        <LucideIcons.CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Recently refurbished</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <LucideIcons.CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Members discount available</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;