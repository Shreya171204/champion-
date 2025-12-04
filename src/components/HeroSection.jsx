import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative py-16 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Side - Card */}
                    <div className="relative w-full md:w-1/2 max-w-2xl">
                        <div className="bg-[#F5F2FF] rounded-3xl p-10 shadow-lg relative z-10 text-center">
                            <h2 className="text-4xl font-bold text-coral-red mb-8">
                                Ignite By Hatch Utilization
                            </h2>

                            <div className="space-y-8 text-gray-700">
                                <div>
                                    <p className="text-2xl">
                                        <span className="text-coral-red font-bold text-3xl">0</span>
                                        <span className="text-teal-accent font-bold text-3xl"> of 2</span>
                                        <span className="font-bold"> schools</span>
                                    </p>
                                    <p className="text-base text-gray-600 mt-2">
                                        in your Org have recently used Ignite by Hatch
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl">
                                        <span className="text-coral-red font-bold text-3xl">1</span>
                                        <span className="text-teal-accent font-bold text-3xl"> of 3</span>
                                        <span className="font-bold"> classes</span>
                                    </p>
                                    <p className="text-base text-gray-600 mt-2">
                                        need children added to complete setup.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="#" className="text-teal-accent font-bold hover:text-teal-600 transition-colors text-xl">
                                    VIEW DETAILED REPORT &gt;
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Character Image */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        {/* Decorative bubbles around character - spread out and unordered */}
                        <div className="absolute top-[15%] left-[18%] w-12 h-12 bg-soft-blue rounded-full opacity-60 animate-bounce delay-200"></div>
                        <div className="absolute top-[25%] right-[22%] w-8 h-8 bg-soft-pink rounded-full opacity-60 animate-bounce delay-400"></div>
                        <div className="absolute bottom-[28%] left-[35%] w-10 h-10 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-600"></div>
                        <div className="absolute bottom-[18%] right-[15%] w-14 h-14 bg-mint-green rounded-full opacity-60 animate-bounce delay-100"></div>
                        <div className="absolute top-[38%] right-[28%] w-6 h-6 bg-soft-purple rounded-full opacity-60 animate-bounce delay-700"></div>
                        <div className="absolute top-[12%] right-[38%] w-8 h-8 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-300"></div>
                        <div className="absolute bottom-[22%] left-[25%] w-12 h-12 bg-soft-blue rounded-full opacity-60 animate-bounce delay-500"></div>
                        <div className="absolute top-[48%] left-[15%] w-7 h-7 bg-soft-pink rounded-full opacity-60 animate-bounce delay-150"></div>
                        <div className="absolute bottom-[35%] right-[20%] w-10 h-10 bg-mint-green rounded-full opacity-60 animate-bounce delay-800"></div>
                        <div className="absolute top-[42%] left-[30%] w-5 h-5 bg-soft-purple rounded-full opacity-60 animate-bounce delay-250"></div>
                        <div className="absolute top-[32%] left-[20%] w-9 h-9 bg-soft-yellow rounded-full opacity-60 animate-bounce delay-350"></div>
                        <div className="absolute bottom-[45%] left-[22%] w-6 h-6 bg-soft-pink rounded-full opacity-60 animate-bounce delay-450"></div>
                        <div className="absolute top-[58%] right-[32%] w-8 h-8 bg-soft-blue rounded-full opacity-60 animate-bounce delay-550"></div>
                        <div className="absolute top-[52%] right-[18%] w-7 h-7 bg-mint-green rounded-full opacity-60 animate-bounce delay-650"></div>
                        <div className="absolute bottom-[52%] left-[28%] w-5 h-5 bg-soft-purple rounded-full opacity-60 animate-bounce delay-750"></div>

                        <div className="relative z-10 w-full max-w-md">
                            <img
                                src="/hero-character.png"
                                alt="Happy child with book"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
