import React from 'react';

const SkillsSection = () => {
    return (
        <section className="relative py-16 px-6 bg-cream-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-[#FFF9F0] rounded-3xl p-12 shadow-lg text-center border-2 border-orange-100">
                    <h2 className="text-5xl font-bold text-coral-red mb-12">
                        Ignite Skill Progress
                    </h2>

                    {/* Progress Stats */}
                    <div className="space-y-8 mb-10">
                        <div className="flex justify-between items-center text-xl font-bold text-teal-600">
                            <span>2 children</span>
                            <span>5 children</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-16 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                            <div className="absolute h-full flex w-full">
                                <div className="h-full bg-[#4CAF50]" style={{ width: '30%' }}></div>
                                <div className="h-full bg-[#81C784]" style={{ width: '30%' }}></div>
                                <div className="h-full bg-[#FFB74D]" style={{ width: '40%' }}></div>
                            </div>
                        </div>

                        <div className="text-center text-xl font-bold text-teal-600">
                            3 children
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#4CAF50] rounded-md"></div>
                            <span className="text-base font-bold text-gray-700">Exceeded Grade<br />Level Goal</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#81C784] rounded-md"></div>
                            <span className="text-base font-bold text-gray-700">More Than<br />Halfway to Goal</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#FFB74D] rounded-md"></div>
                            <span className="text-base font-bold text-gray-700">On-track<br />Developing</span>
                        </div>
                    </div>

                    <div className="mt-12">
                        <a href="#" className="text-teal-accent font-bold hover:text-teal-600 transition-colors text-2xl">
                            VIEW DETAILED REPORT &gt;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
