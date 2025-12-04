import React from 'react';
import monkeyImg from '../assets/monkey.png';
import featureImg from '../assets/feature.png';
import dollImg from '../assets/doll.png';

export default function AddUserPage() {
  return (
    <main className="min-h-screen bg-cream-white font-body text-gray-800">
      {/* Header bar like screenshot */}
      <div className="w-full bg-purple-50 py-4 px-6">
        <h1 className="text-2xl font-bold text-teal-700">ADD A USER</h1>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Left wide area with form fields and decorations (spans cols 1-8) */}
            <div className="lg:col-span-8 bg-transparent relative">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                {/* Top row: Organization & School selects */}
                <div>
                  <label className="block text-coral-red text-2xl mb-3">Organization*</label>
                  <div className="bg-purple-50 rounded-full px-6 py-3 w-64 text-gray-600">Select <span className="float-right">v</span></div>
                </div>

                <div>
                  <label className="block text-coral-red text-2xl mb-3">School</label>
                  <div className="bg-purple-50 rounded-full px-6 py-3 w-64 text-gray-600">Select <span className="float-right">v</span></div>
                </div>

                {/* First / Last name */}
                <div>
                  <label className="block text-coral-red text-2xl mb-3">First Name*</label>
                  <div className="bg-teal-50 rounded-full h-12 w-full"></div>
                </div>

                <div>
                  <label className="block text-coral-red text-2xl mb-3">Last Name*</label>
                  <div className="bg-teal-50 rounded-full h-12 w-full"></div>
                </div>

                {/* Feather placed in left column (on desktop) so Email/User Role appear to its right */}
                <div className="hidden md:flex md:col-span-1 md:items-center md:justify-center">
                  <img src={featureImg} alt="feather" className="w-56 md:w-64 lg:w-72 object-contain -mt-6" />
                </div>

                {/* Right column: group Email and User Role so they stack with no space */}
                <div className="md:col-span-1 md:col-start-2 mt-0 z-10">
                  <div className="flex flex-col gap-0">
                    <div>
                      <label className="block text-coral-red text-2xl mb-3">Email Address*</label>
                      <div className="bg-teal-50 rounded-full h-12 w-full md:w-11/12"></div>
                    </div>

                    <div>
                      <label className="block text-coral-red text-2xl mb-0 mt-5">User Role*</label>
                      <div className="bg-pink-50 rounded-full h-12 w-full md:w-11/12 text-gray-600 px-4 flex items-center">Select user role <span className="ml-auto">v</span></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right column with cloud note and monkey image (spans cols 9-12) */}
            <aside className="lg:col-span-4 flex flex-col items-center justify-start relative">
              {/* Left-side cloud note (refined shape & placement) */}
              <div className="absolute -top-2 -left-16 md:-top-4 md:-left-30 lg:-top-6 lg:-left-35 z-40 w-64 md:w-80 lg:w-[24rem]">
                <svg viewBox="0 0 400 260" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="cloud note">
                  <defs>
                    <filter id="cloudShadow2" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.18" />
                    </filter>
                    <linearGradient id="cloudInner2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#fbfbfb" />
                      <stop offset="100%" stopColor="#f2f6f4" />
                    </linearGradient>
                  </defs>

                  {/* Outer thick outline */}
                  <path d="M40 140 C20 100, 40 60, 80 60 C96 34, 140 22, 164 48 C196 28, 244 36, 260 64 C298 72, 312 104, 284 132 C316 138, 338 168, 310 190 C270 218, 204 214, 164 204 C128 220, 88 216, 40 140 Z"
                    fill="none" stroke="#000" strokeWidth="14" strokeLinejoin="round" filter="url(#cloudShadow2)" />

                  {/* Pastel inner ring */}
                  <path d="M40 140 C20 100, 40 60, 80 60 C96 34, 140 22, 164 48 C196 28, 244 36, 260 64 C298 72, 312 104, 284 132 C316 138, 338 168, 310 190 C270 218, 204 214, 164 204 C128 220, 88 216, 40 140 Z"
                    fill="url(#cloudInner2)" stroke="#CFC6F2" strokeWidth="10" strokeOpacity="0.9" strokeLinejoin="round" />

                  {/* Inner white area to create thick border effect */}
                  <path d="M64 150 C50 120, 64 96, 96 92 C108 70, 140 64, 160 86 C186 74, 222 78, 236 98 C268 102, 280 130, 256 148 C284 152, 296 172, 280 186 C256 204, 212 200, 176 196 C152 206, 116 206, 64 150 Z"
                    fill="#FEFEFA" />

                  {/* Centered note text */}
                  <foreignObject x="36" y="56" width="308" height="140">
                    <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center p-2">
                      <p className="text-center text-[16px] md:text-[18px] lg:text-[20px] leading-tight font-semibold text-[#6B6B6B]" style={{ fontFamily: '"Baloo 2", "Fredoka One", cursive' }}>
                        Users will receive
                        <br />
                        email invitations after
                        <br />
                        they are added.
                      </p>
                    </div>
                  </foreignObject>
                </svg>
              </div>

              <div className="mt-20 w-full flex justify-center">
                <img src={monkeyImg} alt="monkey" className="w-56 h-auto object-contain z-30" />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
