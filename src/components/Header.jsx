import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Header = () => {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Reports', href: '#' },
        { name: 'Dashboard', href: '#' },
        { name: 'Roster', href: '#' },
        { name: 'Skill Support', href: '#' },
        { name: 'Resources', href: '#' },
    ];

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const initials = user?.user_metadata?.full_name
        ? user.user_metadata.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
        : '?';

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 bg-cream-white/95 backdrop-blur-md shadow-sm font-body py-3 md:py-4">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex flex-col group">
                    <div className="flex items-baseline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transform group-hover:scale-105 transition-transform duration-300">
                        <span className="text-[#FF4081]">C</span>
                        <span className="text-[#2979FF]">h</span>
                        <span className="text-[#FFB74D]">a</span>
                        <span className="text-[#2979FF]">m</span>
                        <span className="text-[#4CAF50]">p</span>
                        <span className="text-[#8BC34A]">i</span>
                        <span className="text-[#F297ff]">o</span>
                        <span className="text-[#FF4081]">n</span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] text-gray-400 -mt-1 tracking-wider uppercase">The Early Learning Experts</span>
                </Link>

                {/* Desktop Navigation (lg breakpoint for extra space) */}
                <nav className="hidden lg:flex items-center space-x-3 lg:space-x-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 bg-[#FFF5E1] text-teal-800 hover:bg-[#FFE0B2] hover:text-teal-900 rounded-full transition-all duration-300 text-base lg:text-lg font-bold shadow-sm border border-orange-100 hover:shadow-md"
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3 ml-2 lg:ml-4">
                        {user ? (
                            <Link
                                to="/profile"
                                title="My Profile"
                                className="w-12 h-12 rounded-full border-2 border-teal-accent shadow-md hover:scale-110 transition-transform duration-200 bg-gradient-to-br from-teal-accent to-teal-500 flex items-center justify-center overflow-hidden"
                            >
                                <span className="text-white font-bold text-sm">{initials}</span>
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-5 lg:px-6 py-2 bg-gradient-to-r from-teal-accent to-teal-500 text-white hover:from-teal-500 hover:to-teal-600 rounded-full transition-all duration-300 text-base lg:text-lg font-bold shadow-sm border border-teal-400 hover:shadow-md hover:scale-105"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-5 lg:px-6 py-2 bg-gradient-to-r from-coral-red to-[#FF4081] text-white hover:from-[#FF4081] hover:to-red-500 rounded-full transition-all duration-300 text-base lg:text-lg font-bold shadow-sm border border-pink-300 hover:shadow-md hover:scale-105"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Mobile & Tablet Menu Toggle */}
                <div className="lg:hidden flex items-center gap-3 md:gap-5">
                    {user && (
                        <Link
                            to="/profile"
                            className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-teal-accent shadow-sm bg-gradient-to-br from-teal-accent to-teal-500 flex items-center justify-center"
                        >
                            <span className="text-white font-bold text-xs md:text-sm">{initials}</span>
                        </Link>
                    )}
                    <button 
                        onClick={toggleMenu}
                        className="p-2 md:p-3 text-teal-800 hover:bg-teal-50 rounded-xl transition-colors focus:outline-none bg-white/50 border border-teal-100"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile/Tablet Navigation Drawer */}
            <div 
                className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMenu} />
                
                {/* Drawer Content */}
                <div className={`absolute right-0 top-0 h-full w-[80%] sm:w-[60%] md:w-[45%] bg-cream-white shadow-2xl transform transition-transform duration-300 ease-out p-6 md:p-10 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-10 md:mb-12">
                         <div className="flex flex-col">
                            <div className="flex items-baseline text-2xl md:text-3xl font-bold tracking-tight">
                                <span className="text-[#FF4081]">C</span>
                                <span className="text-[#2979FF]">h</span>
                                <span className="text-[#FFB74D]">a</span>
                                <span className="text-[#2979FF]">m</span>
                                <span className="text-[#4CAF50]">p</span>
                                <span className="text-[#8BC34A]">i</span>
                                <span className="text-[#F297ff]">o</span>
                                <span className="text-[#FF4081]">n</span>
                            </div>
                        </div>
                        <button onClick={toggleMenu} className="p-2 md:p-3 bg-white rounded-full shadow-sm text-gray-500 hover:text-coral-red transition-colors">
                            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-4 md:space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center justify-between px-6 py-4 md:py-5 bg-white text-teal-800 rounded-2xl text-lg md:text-xl font-bold shadow-sm border border-orange-50 hover:bg-teal-50 hover:text-teal-900 transition-all duration-300"
                            >
                                <span>{item.name}</span>
                                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4 md:gap-5">
                        {!user ? (
                            <>
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-4 md:py-5 bg-gradient-to-r from-teal-accent to-teal-500 text-white text-center rounded-full text-lg md:text-xl font-bold shadow-button transform active:scale-95 transition-transform"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-4 md:py-5 bg-gradient-to-r from-coral-red to-[#FF4081] text-white text-center rounded-full text-lg md:text-xl font-bold shadow-button transform active:scale-95 transition-transform"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <Link
                                to="/profile"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full py-4 md:py-5 bg-white text-teal-700 text-center rounded-full text-lg md:text-xl font-bold border-2 border-teal-200 shadow-sm hover:shadow-md transition-all transform active:scale-95"
                            >
                                My Profile
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
