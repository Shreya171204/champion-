import React from 'react';

const DashboardCard = () => {
    return (
        <div className="relative w-full max-w-2xl mx-auto mt-10">
            {/* Decorative Bubbles around the card */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-soft-purple rounded-full opacity-60 animate-bounce delay-100 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-300 -z-10"></div>
            <div className="absolute top-1/2 -right-10 w-12 h-12 bg-soft-pink rounded-full opacity-60 animate-bounce delay-500 -z-10"></div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">

                {/* Illustration Section */}
                <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 bg-soft-blue rounded-full flex items-center justify-center relative overflow-hidden border-4 border-white shadow-inner">
                        {/* Simple CSS/SVG representation of a log/hatch */}
                        <svg viewBox="0 0 100 100" className="w-24 h-24 text-amber-700">
                            <path d="M20,80 Q50,90 80,80 L80,40 Q50,30 20,40 Z" fill="#8D6E63" />
                            <path d="M20,40 Q50,30 80,40 Q50,50 20,40" fill="#A1887F" />
                            <circle cx="50" cy="40" r="15" fill="#5D4037" opacity="0.3" />
                            {/* Leaves */}
                            <path d="M70,50 Q80,30 90,40 Q85,60 70,50" fill="#4CAF50" />
                            <path d="M10,50 Q20,30 30,40 Q25,60 10,50" fill="#81C784" />
                        </svg>
                    </div>
                    {/* Sparkles */}
                    <div className="absolute -top-2 -right-2 text-yellow-400 text-xl animate-pulse">✨</div>
                    <div className="absolute bottom-0 -left-2 text-yellow-400 text-xl animate-pulse delay-700">✨</div>
                </div>

                {/* Content Section */}
                <div className="flex-1 w-full">
                    <h3 className="text-2xl font-headings text-gray-800 mb-6">Ignite By Hatch Utilization</h3>

                    <div className="space-y-6">
                        {/* Stat 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center text-coral-red font-bold text-xl shadow-sm">
                                0
                            </div>
                            <div>
                                <p className="text-lg font-bold text-gray-800">0 of 2 schools</p>
                                <p className="text-sm text-gray-500">(5 year olds/children not using by month)</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-mint-green flex items-center justify-center text-teal-accent font-bold text-xl shadow-sm">
                                1
                            </div>
                            <div>
                                <p className="text-lg font-bold text-gray-800">1 of 3 Ignites</p>
                                <p className="text-sm text-gray-500">(read children added to complete setup)</p>
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

export default DashboardCard;
