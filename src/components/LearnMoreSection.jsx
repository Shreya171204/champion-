import React from 'react';
import mandalaImg from '../assets/mandal_art2.png';

export default function LearnMoreSection() {
  return (
    <>
    <section className="py-12">
      <div className="container mx-auto px-6">
          {/* Make the panel background cream to match the page main color */}
          <div className="bg-[#FFF9F0] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-visible">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">

              {/* Left: larger detail card (match previous section card width/feel) */}
        <div className="w-full md:w-1/2">
                  {/* Text box uses the blue background only (panel remains cream) */}
                  <div className="bg-blue-50 rounded-3xl p-10 shadow-lg relative z-30 text-center border-2 border-orange-100 md:min-h-[240px] flex flex-col items-center justify-center gap-4">
                    <h2 className="text-4xl font-headings font-bold text-coral-red">Want To Learn More?</h2>

                    <p className="text-gray-700 text-base max-w-xl mx-auto">
                      Check out our professional development options to get the most out of Hatch.
                    </p>

                    <a href="#" className="bg-[#FFB74D] hover:bg-[#FFB24A] text-white font-bold px-6 py-3 rounded-full shadow-sm">
                      View PD Options
                    </a>

                    <p className="text-gray-700 text-base max-w-xl mx-auto">
                      For help articles or to contact our US-based support team, please visit our support site.
                    </p>

                    <a href="#" className="bg-white border border-[#FFB74D] text-[#FF6F61] font-bold px-6 py-3 rounded-full shadow-sm">
                      Watch Support Site
                    </a>
                  </div>
              </div>

              {/* Right: mandala art container */}
              <div className="w-full md:flex-1 flex justify-center md:justify-end relative">
                {/* Centered, wider cream rectangle for the image so it doesn't cut the pattern */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[95%] lg:w-[90%] h-96 md:h-[40rem] bg-[#FFF9F0] rounded-2xl p-8 overflow-hidden z-10 flex items-center justify-center">
                  <img src={mandalaImg} alt="mandala" className="w-full h-full object-contain max-w-full max-h-full" />
                </div>
              </div>

            </div>
          </div>

      </div>
    </section>

    </>
  );
}
