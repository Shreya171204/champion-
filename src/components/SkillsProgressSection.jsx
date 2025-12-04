import React from 'react';

const SkillsProgressSection = () => {
    return (
        <section className="relative py-16 px-6 bg-cream-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Side - Drum Illustration */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        {/* Decorative bubbles around drum - spread out and unordered */}
                        <div className="absolute top-[18%] left-[20%] w-12 h-12 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-200"></div>
                        <div className="absolute top-[28%] right-[25%] w-8 h-8 bg-soft-pink rounded-full opacity-60 animate-bounce delay-400"></div>
                        <div className="absolute bottom-[32%] left-[28%] w-10 h-10 bg-soft-purple rounded-full opacity-60 animate-bounce delay-600"></div>
                        <div className="absolute bottom-[15%] right-[18%] w-14 h-14 bg-soft-blue rounded-full opacity-60 animate-bounce delay-100"></div>
                        <div className="absolute top-[35%] right-[20%] w-6 h-6 bg-mint-green rounded-full opacity-60 animate-bounce delay-700"></div>
                        <div className="absolute top-[15%] left-[35%] w-8 h-8 bg-soft-blue rounded-full opacity-60 animate-bounce delay-300"></div>
                        <div className="absolute bottom-[25%] right-[30%] w-12 h-12 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-500"></div>
                        <div className="absolute top-[45%] right-[22%] w-7 h-7 bg-soft-pink rounded-full opacity-60 animate-bounce delay-150"></div>
                        <div className="absolute bottom-[38%] left-[18%] w-10 h-10 bg-mint-green rounded-full opacity-60 animate-bounce delay-800"></div>
                        <div className="absolute top-[40%] right-[35%] w-5 h-5 bg-soft-purple rounded-full opacity-60 animate-bounce delay-250"></div>
                        <div className="absolute top-[30%] right-[28%] w-9 h-9 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-350"></div>
                        <div className="absolute bottom-[42%] right-[25%] w-6 h-6 bg-soft-pink rounded-full opacity-60 animate-bounce delay-450"></div>
                        <div className="absolute top-[55%] left-[32%] w-8 h-8 bg-soft-blue rounded-full opacity-60 animate-bounce delay-550"></div>
                        <div className="absolute top-[50%] left-[22%] w-7 h-7 bg-mint-green rounded-full opacity-60 animate-bounce delay-650"></div>
                        <div className="absolute bottom-[48%] right-[32%] w-5 h-5 bg-soft-purple rounded-full opacity-60 animate-bounce delay-750"></div>

                        <div className="relative z-10 w-full max-w-md">
                            <img
                                src="/drum.png"
                                alt="Drum illustration"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side - Progress Card */}
                    <div className="relative w-full md:w-1/2 max-w-2xl">
                        <div className="bg-[#FFF9F0] rounded-3xl p-10 shadow-lg relative z-10 text-center border-2 border-orange-100">
                            <h2 className="text-4xl font-bold text-coral-red mb-8">
                                Ignite Skill Progress
                            </h2>

                            {/* Progress Stats */}
                            <div className="space-y-6 mb-8">
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span className="text-gray-700">2 children</span>
                                    <span className="text-gray-700">5 children</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="absolute h-full flex">
                                        <div className="h-full bg-[#4CAF50]" style={{ width: '30%' }}></div>
                                        <div className="h-full bg-[#81C784]" style={{ width: '30%' }}></div>
                                        <div className="h-full bg-[#FFB74D]" style={{ width: '40%' }}></div>
                                    </div>
                                </div>

                                <div className="text-center text-lg font-bold text-gray-700">
                                    3 children
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-[#4CAF50] rounded"></div>
                                    <span className="text-sm font-bold text-gray-700">Exceeded Grade Level Goal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-[#81C784] rounded"></div>
                                    <span className="text-sm font-bold text-gray-700">More Than Halfway to Goal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-[#FFB74D] rounded"></div>
                                    <span className="text-sm font-bold text-gray-700">On-track Developing</span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="#" className="text-teal-accent font-bold hover:text-teal-600 transition-colors text-xl">
                                    VIEW DETAILED REPORT &gt;
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillsProgressSection;
