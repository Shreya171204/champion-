import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Header = () => {
    const [user, setUser] = useState(null);

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

    return (
        <header className="sticky top-0 z-50 bg-cream-white/95 backdrop-blur-sm shadow-sm font-body py-2">
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex flex-col">
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
                </Link>

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

                    {/* Auth Buttons */}
                    {user ? (
                        <Link
                            to="/profile"
                            title="My Profile"
                            className="ml-2 w-12 h-12 rounded-full border-2 border-teal-accent shadow-md hover:scale-110 transition-transform duration-200 bg-gradient-to-br from-teal-accent to-teal-500 flex items-center justify-center"
                        >
                            <span className="text-white font-bold text-sm">{initials}</span>
                        </Link>
                    ) : (
                        <div className="flex items-center gap-2 ml-2">
                            <Link
                                to="/login"
                                className="px-5 py-1.5 bg-gradient-to-r from-teal-accent to-teal-500 text-white hover:from-teal-500 hover:to-teal-600 rounded-full transition-all duration-200 text-lg font-bold shadow-sm border border-teal-400 hover:shadow-md hover:scale-105"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-5 py-1.5 bg-gradient-to-r from-coral-red to-[#FF4081] text-white hover:from-[#FF4081] hover:to-red-500 rounded-full transition-all duration-200 text-lg font-bold shadow-sm border border-pink-300 hover:shadow-md hover:scale-105"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
