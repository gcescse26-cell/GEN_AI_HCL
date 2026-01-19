
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">The Future of Tutoring</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">
              Master Any Subject with your <span className="gradient-text">Personal AI Mentor</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Lumina AI uses advanced neural networks to create a personalized curriculum tailored to your unique learning style. Learn faster, retain more, and excel anywhere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/20">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto glass hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-lg transition-all border border-white/10 flex items-center justify-center gap-2">
                <i className="fas fa-play-circle text-indigo-400"></i>
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 grayscale opacity-60">
              <i className="fab fa-google text-2xl"></i>
              <i className="fab fa-apple text-2xl"></i>
              <i className="fab fa-microsoft text-2xl"></i>
              <i className="fab fa-amazon text-2xl"></i>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://picsum.photos/seed/tutor/800/600" 
                alt="AI Learning Dashboard" 
                className="rounded-3xl shadow-2xl border border-white/10"
              />
              {/* Floating UI Elements */}
              <div className="absolute -top-10 -left-10 glass p-4 rounded-2xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-line text-green-400"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Learning Progress</p>
                    <p className="font-bold text-white">+42% this week</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-4 rounded-2xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-medal text-indigo-400"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Skill Level</p>
                    <p className="font-bold text-white">Advanced Calculus</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background blur for image */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
