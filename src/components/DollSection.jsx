import React from 'react';
import dollImg from '../assets/doll.png';

export default function DollSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-[#FFF9F0] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-visible">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">

            {/* Left: image (doll) */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="bg-[#FFF9F0] rounded-2xl p-4 overflow-hidden flex items-center justify-center w-full h-90 md:h-96 lg:h-96">
                <img src={dollImg} alt="doll" className="w-auto h-full object-contain" />
              </div>
            </div>

            {/* Right: text card */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="bg-pink-50 rounded-3xl p-10 md:p-12 shadow-lg relative z-30 text-center border-2 border-pink-100 w-full max-w-xl">
                <h3 className="text-3xl md:text-4xl font-headings font-bold text-coral-red">Teaching Strategies Gold</h3>
                <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto mt-2">Your connection has not been activated!</p>
                <div className="my-4">
                  <div className="inline-flex bg-orange-200 text-orange-700 rounded-full p-6 md:p-8 w-14 h-14 md:w-20 md:h-20 items-center justify-center text-2xl md:text-4xl">!</div>
                </div>
                <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto">You cannot send documents to GOLD until it is setup.</p>
                <a href="#" className="text-teal-700 font-bold mt-4 inline-block text-lg md:text-xl">ACTIVATE HATCHSYNC CONNECTION &gt;</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
