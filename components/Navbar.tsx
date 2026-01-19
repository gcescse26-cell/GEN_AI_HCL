
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <i className="fas fa-brain text-white text-xl"></i>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Lumina<span className="text-indigo-500">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Interactive Demo</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onLoginClick}
            className="text-white font-medium hover:text-indigo-400 transition-colors px-4 py-2"
          >
            Login
          </button>
          <button 
            onClick={onSignupClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
