
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login'
  });

  const openAuth = (type: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, type });
  };

  const closeAuth = () => {
    setAuthModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onLoginClick={() => openAuth('login')} 
        onSignupClick={() => openAuth('signup')} 
      />
      
      <main>
        <Hero />
        
        <Features />
        
        <section className="py-24 overflow-hidden bg-indigo-600/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/learning/800/800" 
                    alt="AI Personal Mentor" 
                    className="rounded-[3rem] shadow-2xl border border-white/10"
                  />
                  <div className="absolute -bottom-6 -right-6 glass p-6 rounded-[2rem] max-w-xs hidden md:block border-indigo-500/30">
                    <p className="text-indigo-400 font-bold text-sm mb-2">Quote of the day</p>
                    <p className="text-white italic">"Education is not the learning of facts, but the training of the mind to think."</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Tailored learning for every <span className="gradient-text">ambitious student.</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <i className="fas fa-rocket text-indigo-400"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fast-track Progress</h4>
                      <p className="text-gray-400">Skip what you already know and focus 100% of your time on new concepts and bridging knowledge gaps.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <i className="fas fa-shield-halved text-purple-400"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Confidence Builder</h4>
                      <p className="text-gray-400">Low-stakes practice environment where you can fail, learn, and try again without judgment from human peers.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <i className="fas fa-globe text-pink-400"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Global Knowledge Base</h4>
                      <p className="text-gray-400">Access insights from leading educational institutions worldwide, curated by our AI engine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InteractiveDemo />

        {/* Pricing CTA */}
        <section id="pricing" className="py-24 container mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1]">
              Ready to <span className="gradient-text">unlock your potential?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join 50,000+ students who are already using Lumina AI to excel in their academic journeys.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-12 py-5 rounded-full text-xl transition-all shadow-[0_10px_40px_rgba(79,70,229,0.3)]">
                Start Learning Now
              </button>
              <div className="text-gray-400 flex items-center gap-2">
                <i className="fas fa-credit-card text-indigo-400"></i>
                No credit card required for trial
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AuthModal 
        isOpen={authModal.isOpen} 
        type={authModal.type} 
        onClose={closeAuth} 
      />
    </div>
  );
};

export default App;
