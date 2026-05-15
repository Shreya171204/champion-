import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import elephantImg from '../assets/elephant.png';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    setLoggingOut(true);
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-cream-white font-body flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-12 w-12 text-teal-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-teal-700 font-bold text-xl">Loading profile...</p>
        </div>
      </main>
    );
  }

  const fullName = user?.user_metadata?.full_name || 'Champion User';
  const email = user?.email || '';
  const createdAt = user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  }) : '';
  const initials = fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <main className="min-h-screen bg-cream-white font-body text-gray-800 flex flex-col overflow-hidden">
      {/* ── Header Bar ── */}
      <div className="w-full bg-purple-50 py-4 px-6 shadow-sm">
        <Link to="/" className="inline-flex flex-col">
          <div className="flex items-baseline text-3xl font-bold tracking-tight">
            <span className="text-[#FF4081]">C</span>
            <span className="text-[#2979FF]">h</span>
            <span className="text-[#FFB74D]">a</span>
            <span className="text-[#2979FF]">m</span>
            <span className="text-[#4CAF50]">p</span>
            <span className="text-[#8BC34A]">i</span>
            <span className="text-[#F297ff]">o</span>
            <span className="text-[#FF4081]">n</span>
          </div>
          <span className="text-[10px] text-gray-400 -mt-1 tracking-wider uppercase">
            The Early Learning Experts
          </span>
        </Link>
      </div>

      {/* ── Main Content ── */}
      <section className="flex-grow flex items-center justify-center py-12 px-6 relative">
        {/* Animated Background Bubbles */}
        <div className="absolute top-16 left-8 w-10 h-10 bg-soft-pink rounded-full opacity-50 blur-sm animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-16 w-14 h-14 bg-soft-blue rounded-full opacity-40 blur-sm animate-bounce" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-24 left-20 w-8 h-8 bg-soft-yellow rounded-full opacity-50 blur-sm animate-bounce" style={{ animationDelay: '0.6s' }} />
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-mint-green rounded-full opacity-50 blur-sm animate-bounce" style={{ animationDelay: '0.9s' }} />
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-soft-purple rounded-full opacity-40 blur-sm animate-bounce" style={{ animationDelay: '1.2s' }} />

        {/* Profile Card */}
        <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-soft border-8 border-white/50 relative z-10">

          {/* ── Left Side: Avatar & Mascot ── */}
          <div className="flex flex-col items-center justify-center relative">
            {/* Decorative ring */}
            <div className="absolute w-72 h-72 rounded-full border-[6px] border-dashed border-teal-200/50 animate-[spin_20s_linear_infinite]" />

            {/* User Avatar Circle */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-accent to-teal-500 flex items-center justify-center z-20 shadow-lg border-8 border-white">
              <span className="text-white font-bold text-5xl">{initials}</span>
            </div>

            {/* Name badge */}
            <div className="mt-4 bg-gradient-to-r from-teal-100 to-mint-green backdrop-blur-sm px-8 py-3 rounded-full border-2 border-teal-200 shadow-sm z-20">
              <span className="text-teal-800 font-bold text-lg">Hello, {fullName.split(' ')[0]}! 👋</span>
            </div>

            {/* Small stars decoration */}
            <span className="absolute top-8 left-6 text-2xl animate-pulse" style={{ animationDelay: '0s' }}>⭐</span>
            <span className="absolute top-16 right-4 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
            <span className="absolute bottom-20 left-12 text-lg animate-pulse" style={{ animationDelay: '1s' }}>🌟</span>

            {/* Small elephant */}
            <img
              src={elephantImg}
              alt="Elephant mascot"
              className="absolute -bottom-4 -right-2 w-24 h-auto object-contain opacity-60 z-10"
            />
          </div>

          {/* ── Right Side: Profile Info ── */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-coral-red mb-1">My Profile</h2>
              <p className="text-gray-500 font-medium text-lg">Your account details</p>
            </div>

            {/* Profile Details */}
            <div className="space-y-4">
              {/* Full Name */}
              <div className="bg-green-50/50 border-4 border-white rounded-3xl py-4 px-6 shadow-inner">
                <p className="text-teal-600 font-semibold text-sm mb-1 uppercase tracking-wide">👤 Full Name</p>
                <p className="text-gray-800 font-bold text-xl">{fullName}</p>
              </div>

              {/* Email */}
              <div className="bg-blue-50/50 border-4 border-white rounded-3xl py-4 px-6 shadow-inner">
                <p className="text-teal-600 font-semibold text-sm mb-1 uppercase tracking-wide">✉ Email Address</p>
                <p className="text-gray-800 font-bold text-xl">{email}</p>
              </div>

              {/* Member Since */}
              <div className="bg-purple-50/50 border-4 border-white rounded-3xl py-4 px-6 shadow-inner">
                <p className="text-teal-600 font-semibold text-sm mb-1 uppercase tracking-wide">📅 Member Since</p>
                <p className="text-gray-800 font-bold text-xl">{createdAt}</p>
              </div>

              {/* Account Status */}
              <div className="bg-soft-yellow border-4 border-white rounded-3xl py-4 px-6 shadow-inner">
                <p className="text-teal-600 font-semibold text-sm mb-1 uppercase tracking-wide">✅ Account Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-green-700 font-bold text-xl">Active</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/"
                className="flex-1 text-center bg-gradient-to-r from-teal-accent to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg py-3 rounded-full shadow-button hover:shadow-lg transform active:scale-95 transition-all duration-200"
              >
                🏠 Go Home
              </Link>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex-1 bg-gradient-to-r from-coral-red to-red-400 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg py-3 rounded-full shadow-button hover:shadow-lg transform active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loggingOut ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging out...
                  </span>
                ) : (
                  "🚪 Logout"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
