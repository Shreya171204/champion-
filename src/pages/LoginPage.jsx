import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import monkeyImg from '../assets/monkey.png';
import elephantImg from '../assets/elephant.png';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError(loginError.message);
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-cream-white font-body text-gray-800 flex flex-col">
      {/* ── Header Bar ── */}
      <div className="w-full bg-purple-50 py-4 px-4 md:px-8 shadow-sm">
        <Link to="/" className="inline-flex flex-col">
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
          <span className="text-[9px] md:text-[10px] text-gray-400 -mt-1 tracking-wider uppercase">
            The Early Learning Experts
          </span>
        </Link>
      </div>

      {/* ── Main Content ── */}
      <section className="flex-grow flex items-center justify-center py-8 md:py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background Bubbles (Reduced for mobile) */}
        <div className="absolute top-8 left-4 md:top-16 md:left-8 w-8 h-8 md:w-10 md:h-10 bg-soft-pink rounded-full opacity-50 blur-sm animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 right-8 w-10 h-10 md:w-14 md:h-14 bg-soft-blue rounded-full opacity-40 blur-sm animate-bounce" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-1/4 left-8 w-6 h-6 md:w-8 md:h-8 bg-soft-yellow rounded-full opacity-50 blur-sm animate-bounce" style={{ animationDelay: '0.6s' }} />

        {/* Login Card */}
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/40 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-soft border-4 md:border-8 border-white/50 relative z-10">

          {/* ── Mascot (Hidden on mobile, visible on md+) ── */}
          <div className="hidden md:flex flex-col items-center justify-center relative">
            <div className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full border-[6px] border-dashed border-teal-200/50 animate-[spin_20s_linear_infinite]" />
            <img
              src={elephantImg}
              alt="Elephant mascot"
              className="w-40 lg:w-56 h-auto object-contain z-20 transform hover:scale-105 transition-transform duration-500 drop-shadow-lg"
            />
            <div className="mt-4 bg-gradient-to-r from-teal-100 to-mint-green backdrop-blur-sm px-6 py-2 md:px-8 md:py-3 rounded-full border-2 border-teal-200 shadow-sm z-20">
              <span className="text-teal-800 font-bold text-base md:text-lg">Welcome Back! 🎉</span>
            </div>
            <span className="absolute top-0 left-0 text-xl animate-pulse">⭐</span>
            <span className="absolute bottom-0 right-0 text-xl animate-pulse">✨</span>
          </div>

          {/* ── Login Form ── */}
          <div className="space-y-6 md:space-y-7">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-coral-red mb-1 font-headings">Login</h2>
              <p className="text-gray-500 font-medium text-base md:text-lg">Please enter your details to continue</p>
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-2 md:px-5 md:py-3 rounded-2xl text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            <form className="space-y-4 md:space-y-5" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label htmlFor="login-email" className="block text-teal-700 font-semibold text-lg md:text-xl mb-1 md:mb-2">
                  Email Address<span className="text-coral-red">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-teal-400 text-lg md:text-xl">✉</span>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-blue-50/50 border-2 md:border-4 border-white rounded-full py-3 md:py-4 pl-12 md:pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-base md:text-lg placeholder:text-gray-400 shadow-inner"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="login-password" className="block text-teal-700 font-semibold text-lg md:text-xl mb-1 md:mb-2">
                  Password<span className="text-coral-red">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg md:text-xl">🔒</span>
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-pink-50/50 border-2 md:border-4 border-white rounded-full py-3 md:py-4 pl-12 md:pl-14 pr-14 md:pr-16 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all text-base md:text-lg placeholder:text-gray-400 shadow-inner"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-sm font-bold"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
                <label className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 accent-teal-500 rounded border-2 border-teal-300" />
                  <span className="ml-2 text-gray-600 font-medium group-hover:text-teal-700 transition-colors text-sm md:text-base">Remember me</span>
                </label>
                <a href="#" className="text-coral-red hover:underline font-bold text-sm md:text-base">Forgot Password?</a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-accent to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xl md:text-2xl py-3 md:py-4 rounded-full shadow-button hover:shadow-lg transform active:scale-95 transition-all duration-200 disabled:opacity-60"
              >
                {loading ? 'Logging in...' : "Let's Go! 🚀"}
              </button>
            </form>

            <div className="flex items-center gap-4 px-2">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-gray-400 font-medium text-sm">or</span>
              <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-gray-200" />
            </div>

            <div className="text-center">
              <p className="text-gray-500 font-medium text-base md:text-lg">
                Don't have an account?{' '}
                <Link to="/signup" className="text-teal-600 font-bold hover:underline hover:text-teal-700 transition-colors">
                  Sign up ✨
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Monkey peaking from corner (Hidden on smaller screens) */}
        <img
          src={monkeyImg}
          alt="Monkey mascot"
          className="absolute -bottom-10 -right-10 w-32 md:w-40 h-auto opacity-80 rotate-[-15deg] hidden lg:block hover:rotate-0 transition-transform duration-500"
        />
      </section>
    </main>
  );
}
