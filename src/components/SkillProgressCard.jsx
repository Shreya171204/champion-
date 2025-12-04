import React from 'react';

const SkillProgressCard = () => {
    return (
        <div className="relative w-full max-w-2xl mx-auto mt-10 lg:mt-0">
            {/* Decorative Bubbles */}
            <div className="absolute -top-8 right-10 w-14 h-14 bg-soft-blue rounded-full opacity-60 animate-bounce delay-200 -z-10"></div>
            <div className="absolute bottom-10 -left-8 w-18 h-18 bg-soft-pink rounded-full opacity-60 animate-bounce delay-500 -z-10"></div>
            <div className="absolute top-1/3 -right-6 w-10 h-10 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-100 -z-10"></div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 h-full">

                {/* Illustration Section */}
                <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 bg-soft-purple rounded-full flex items-center justify-center relative overflow-hidden border-4 border-white shadow-inner">
                        {/* Simple CSS/SVG representation of a girl with glasses */}
                        <svg viewBox="0 0 100 100" className="w-24 h-24">
                            {/* Hair */}
                            <path d="M20,40 Q50,10 80,40 L85,90 L15,90 L20,40" fill="#9C27B0" />
                            {/* Face */}
                            <circle cx="50" cy="50" r="25" fill="#FFCCBC" />
                            {/* Glasses */}
                            <circle cx="40" cy="50" r="8" fill="none" stroke="#333" strokeWidth="2" />
                            <circle cx="60" cy="50" r="8" fill="none" stroke="#333" strokeWidth="2" />
                            <line x1="48" y1="50" x2="52" y2="50" stroke="#333" strokeWidth="2" />
                            {/* Smile */}
                            <path d="M40,65 Q50,75 60,65" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            {/* Tablet */}
                            <rect x="25" y="75" width="50" height="35" rx="5" fill="#424242" />
                            <rect x="28" y="78" width="44" height="29" rx="2" fill="#81D4FA" />
                        </svg>
                    </div>
                    {/* Sparkles */}
                    <div className="absolute top-0 left-0 text-purple-400 text-xl animate-pulse">✨</div>
                    <div className="absolute bottom-4 right-0 text-purple-400 text-xl animate-pulse delay-300">✨</div>
                </div>

                {/* Content Section */}
                <div className="flex-1 w-full">
                    <h3 className="text-2xl font-headings text-gray-800 mb-6">Ignite Skill Progress</h3>

                    <div className="space-y-4">
                        {/* Badge 1 */}
                        <div className="flex items-center justify-between bg-mint-green/50 rounded-xl p-3 border border-mint-green">
                            <span className="font-bold text-teal-800">0 children</span>
                            <span className="text-xs font-bold bg-white px-2 py-1 rounded-full text-teal-600 shadow-sm">Emergent 25%</span>
                        </div>

                        {/* Badge 2 */}
                        <div className="flex items-center justify-between bg-orange-100 rounded-xl p-3 border border-orange-200">
                            <span className="font-bold text-orange-800">0 children</span>
                            <span className="text-xs font-bold bg-white px-2 py-1 rounded-full text-orange-600 shadow-sm">Below Target 50%</span>
                        </div>

                        {/* Progress Visualization */}
                        <div className="mt-4">
                            <div className="flex justify-between text-xs text-gray-500 mb-1 font-bold">
                                <span>Progress Overview</span>
                                <span>On Track 20%</span>
                            </div>
                            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                <div className="h-full bg-teal-accent w-[25%]" title="Emergent"></div>
                                <div className="h-full bg-orange-400 w-[50%]" title="Below Target"></div>
                                <div className="h-full bg-soft-purple w-[20%]" title="On Track"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-right">
                        <a href="#" className="text-coral-red font-bold hover:text-red-400 transition-colors text-sm tracking-wide">
                            VIEW DETAILED REPORT &gt;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillProgressCard;
