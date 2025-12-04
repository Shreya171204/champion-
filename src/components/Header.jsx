import React from 'react';

const Header = () => {
    const navItems = [
        { name: 'Reports', href: '#' },
        { name: 'Dashboard', href: '#' },
        { name: 'Roster', href: '#' },
        { name: 'Skill Support', href: '#' },
        { name: 'Resources', href: '#' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-cream-white/95 backdrop-blur-sm shadow-sm font-body py-2">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex flex-col">
                    <div className="flex items-baseline text-4xl font-bold tracking-tight">
                        <span className="text-[#FF4081]">C</span>
                        <span className="text-[#2979FF]">h</span>
                        <span className="text-[#FFB74D]">a</span>
                        <span className="text-[#2979FF]">m</span>
                        <span className="text-[#4CAF50]">p</span>
                        <span className="text-[#8BC34A]">i</span>
                        <span className="text-[#F297ff]">o</span>
                        <span className="text-[#FF4081]">n</span>
                    </div>
                    <span className="text-[10px] text-gray-400 -mt-1 tracking-wider">The Early Learning Experts</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="px-4 py-1.5 bg-[#FFF5E1] text-teal-800 hover:bg-[#FFE0B2] rounded-full transition-colors duration-200 text-lg font-bold shadow-sm border border-orange-100"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* User Profile Avatar */}
                    <button className="ml-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform">
                        <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
