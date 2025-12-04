import React from 'react';
import lotusImg from '../assets/lotus.png';

export default function LotusSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-[#FFF9F0] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-visible">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">

            {/* Left: text box sized to match the image container */}
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
              <div className="bg-blue-50 rounded-3xl p-10 shadow-lg relative z-30 text-center border-2 border-orange-100 md:min-h-[240px] flex flex-col items-center justify-center gap-4">
                <h3 className="text-3xl font-headings font-bold text-coral-red">Average Play Time</h3>
                <p className="text-gray-700 text-base max-w-md mx-auto">This week, children have played, on average:</p>
                <div className="text-4xl font-bold text-orange-300">0<span className="text-base font-normal"> minutes</span></div>
                <p className="text-gray-700 text-sm max-w-md mx-auto mt-2">We recommend children play Ignite by Hatch for 30 minutes each week.</p>
                <a href="#" className="text-teal-700 font-bold mt-4">VIEW PLAY TIME FOR ALL CHILDREN &gt;</a>
              </div>
            </div>

            {/* Right: lotus image container (shorter heights) */}
            <div className="w-full md:flex-1 flex justify-center md:justify-end relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[95%] lg:w-[90%] h-64 md:h-[30rem] lg:h-[28rem] xl:h-[24rem] bg-[#FFF9F0] rounded-2xl p-8 overflow-hidden z-10 flex items-center justify-center">
                <img src={lotusImg} alt="lotus" className="w-full h-full object-contain max-w-full max-h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
