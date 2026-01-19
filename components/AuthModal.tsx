
import React from 'react';

interface AuthModalProps {
  isOpen: boolean;
  type: 'login' | 'signup';
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="glass relative z-10 w-full max-w-md rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-brain text-white text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {type === 'login' ? 'Welcome Back' : 'Join the Future'}
          </h2>
          <p className="text-gray-400">
            {type === 'login' 
              ? 'Enter your credentials to continue your journey.' 
              : 'Create your account and start learning today.'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-6 text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>
          
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl text-lg transition-all mt-4">
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#0b0f1a] px-4 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="glass py-3 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fab fa-google"></i>
            </button>
            <button className="glass py-3 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fab fa-apple"></i>
            </button>
            <button className="glass py-3 rounded-2xl hover:bg-white/5 transition-colors">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-400 text-sm">
          {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button className="text-indigo-400 font-bold hover:underline">
            {type === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
