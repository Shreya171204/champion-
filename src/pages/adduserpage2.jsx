import React from 'react';
import sitaraImg from '../assets/sitara.png';

export default function AddUserPage2() {
  return (
    <main className="min-h-screen bg-[#FFFDF5] font-body text-gray-800">
      
      {/* Header */}
      <div className="w-full bg-purple-100 py-4 px-6">
        <h1 className="text-2xl font-bold text-teal-700 tracking-wide">ADD A USER</h1>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT FORM SECTION */}
            <div className="lg:col-span-7 space-y-6 relative">

              {/* Organization */}
              <div>
                <label className="block text-orange-600 font-semibold text-xl mb-2">Organization*</label>
                <div className="bg-purple-100 rounded-full py-3 px-6 w-full text-gray-600 flex items-center">
                  Select
                  <span className="ml-auto">v</span>
                </div>
              </div>

              {/* School */}
              <div>
                <label className="block text-orange-600 font-semibold text-xl mb-2">School</label>
                <div className="bg-purple-100 rounded-full py-3 px-6 w-full text-gray-600">
                  School Name
                </div>
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-orange-600 font-semibold text-xl mb-2">City (Optional)</label>
                  <div className="bg-blue-100 rounded-full h-12 w-full"></div>
                </div>
                <div>
                  <label className="block text-orange-600 font-semibold text-xl mb-2">State (Optional)</label>
                  <div className="bg-blue-100 rounded-full h-12 w-full"></div>
                </div>
              </div>

              {/* Zip */}
              <div>
                <label className="block text-orange-600 font-semibold text-xl mb-2">Zip Code*</label>
                <div className="bg-blue-100 rounded-full h-12 w-full"></div>
              </div>

              {/* Active School */}
              <div className="flex items-center gap-3">
                <div className="bg-green-400 h-8 w-8 rounded"></div>
                <span className="text-orange-600 font-semibold text-xl">Active School</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-8 pt-4">
                <button className="bg-blue-100 px-6 py-2 rounded-full font-semibold">Add School</button>
                <button className="bg-blue-100 px-6 py-2 rounded-full font-semibold">Cancel</button>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <aside className="lg:col-span-5 relative flex justify-center items-start">

              {/* Pastel dots */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-3 h-3 bg-red-200 rounded-full absolute top-20 left-10"></div>
                <div className="w-3 h-3 bg-purple-200 rounded-full absolute top-40 left-28"></div>
                <div className="w-3 h-3 bg-green-200 rounded-full absolute top-60 left-14"></div>
                <div className="w-4 h-4 bg-blue-200 rounded-full absolute top-72 left-32"></div>
                <div className="w-3 h-3 bg-orange-200 rounded-full absolute top-28 left-44"></div>
              </div>

              {/* Sitara Image */}
              <img 
                src={sitaraImg} 
                alt="sitara" 
                className="w-80 md:w-[22rem] lg:w-[25rem] object-contain"
              />
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
