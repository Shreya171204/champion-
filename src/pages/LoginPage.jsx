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
        // Successful login — navigate to home
        navigate('/');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
        <div className="absolute top-24 left-1/3 w-7 h-7 bg-soft-pink rounded-full opacity-40 blur-sm animate-bounce" style={{ animationDelay: '0.4s' }} />
        <div className="absolute bottom-16 left-1/2 w-9 h-9 bg-soft-blue rounded-full opacity-30 blur-sm animate-bounce" style={{ animationDelay: '0.7s' }} />

        {/* Login Card */}
        <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-soft border-8 border-white/50 relative z-10">

          {/* ── Left Side: Mascot ── */}
          <div className="hidden md:flex flex-col items-center justify-center relative">
            {/* Decorative ring */}
            <div className="absolute w-72 h-72 rounded-full border-[6px] border-dashed border-teal-200/50 animate-[spin_20s_linear_infinite]" />

            <img
              src={elephantImg}
              alt="Elephant mascot"
              className="w-56 h-auto object-contain z-20 transform hover:scale-105 transition-transform duration-500 drop-shadow-lg"
            />

            {/* Welcome badge */}
            <div className="mt-4 bg-gradient-to-r from-teal-100 to-mint-green backdrop-blur-sm px-8 py-3 rounded-full border-2 border-teal-200 shadow-sm z-20">
              <span className="text-teal-800 font-bold text-lg">Welcome Back! 🎉</span>
            </div>

            {/* Small stars decoration */}
            <span className="absolute top-8 left-6 text-2xl animate-pulse" style={{ animationDelay: '0s' }}>⭐</span>
            <span className="absolute top-16 right-4 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
            <span className="absolute bottom-20 left-12 text-lg animate-pulse" style={{ animationDelay: '1s' }}>🌟</span>
          </div>

          {/* ── Right Side: Login Form ── */}
          <div className="space-y-7">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-coral-red mb-1">Login</h2>
              <p className="text-gray-500 font-medium text-lg">Please enter your details to continue</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-5 py-3 rounded-2xl text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label htmlFor="login-email" className="block text-teal-700 font-semibold text-xl mb-2">
                  Email Address<span className="text-coral-red">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-400 text-xl">✉</span>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-blue-50/50 border-4 border-white rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-lg placeholder:text-gray-400 shadow-inner"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="login-password" className="block text-teal-700 font-semibold text-xl mb-2">
                  Password<span className="text-coral-red">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400 text-xl">🔒</span>
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-pink-50/50 border-4 border-white rounded-full py-4 pl-14 pr-16 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all text-lg placeholder:text-gray-400 shadow-inner"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-sm font-bold"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot */}
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 accent-teal-500 rounded border-2 border-teal-300" />
                  <span className="ml-2 text-gray-600 font-medium group-hover:text-teal-700 transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-coral-red hover:underline font-bold text-sm">Forgot Password?</a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-accent to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-2xl py-4 rounded-full shadow-button hover:shadow-lg transform active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  "Let's Go! 🚀"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 px-2">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-gray-400 font-medium text-sm">or</span>
              <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-gray-200" />
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-500 font-medium text-lg">
                Don't have an account?{' '}
                <Link to="/signup" className="text-teal-600 font-bold hover:underline hover:text-teal-700 transition-colors">
                  Sign up ✨
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Monkey peaking from corner */}
        <img
          src={monkeyImg}
          alt="Monkey mascot"
          className="absolute -bottom-6 -right-6 w-40 h-auto opacity-80 rotate-[-15deg] hidden lg:block hover:rotate-0 transition-transform duration-500"
        />
      </section>
    </main>
  );
}
