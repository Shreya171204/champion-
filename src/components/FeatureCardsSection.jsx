import React from 'react';
import divaImg from '../assets/diva.png';

export default function FeatureCardsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Left area with image (shorter rectangular display) */}
          <div className="relative z-10 w-full flex items-center justify-center overflow-visible md:min-h-[280px]">
            <div className="relative z-10 w-full max-w-lg md:max-w-xl">
              {/* Image is shown without its own border/background and shifted to overlay the right card */}
              <div className="w-full h-72 md:h-80 lg:h-96 overflow-visible flex flex-col items-center justify-center">
                <img src={divaImg} alt="diva" className="block z-30 relative w-auto h-full object-contain drop-shadow-2xl transform -translate-x-6 md:-translate-x-12 lg:-translate-x-20 flex flex-col items-center justify-center" />
              </div>
            </div>
          </div>

          {/* Right small card: status (stacked: heading -> large tick -> description) */}
          <div className="bg-[#E6FBF0] rounded-3xl p-10 shadow-lg relative z-10 text-center border-2 border-orange-100 md:min-h-[240px] flex flex-col items-center justify-center gap-6 w-full">
            <h3 className="text-3xl md:text-4xl font-bold text-coral-red">Support Needed</h3>

            <div className="w-28 h-28 rounded-full bg-green-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 12.5l3.5 3.5L17.5 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-600 max-w-md">No prep sessions show a need for support.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
