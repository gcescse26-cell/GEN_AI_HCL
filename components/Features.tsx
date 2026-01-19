
import React from 'react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Adaptive Learning',
    description: 'Our AI adjusts the difficulty and style of lessons in real-time based on your performance.',
    icon: 'fa-brain-circuit',
    color: 'text-blue-400'
  },
  {
    id: '2',
    title: '24/7 Availability',
    description: 'Got a question at 3 AM? Your AI tutor is always awake and ready to help you solve it.',
    icon: 'fa-clock',
    color: 'text-purple-400'
  },
  {
    id: '3',
    title: 'Subject Expert',
    description: 'From quantum physics to ancient history, Lumina covers over 200 academic disciplines.',
    icon: 'fa-book-open',
    color: 'text-indigo-400'
  },
  {
    id: '4',
    title: 'Exam Preparation',
    description: 'Generate custom practice tests and get detailed feedback on your common mistakes.',
    icon: 'fa-graduation-cap',
    color: 'text-pink-400'
  },
  {
    id: '5',
    title: 'Language Fluency',
    description: 'Practice conversational language skills with natural, context-aware AI interactions.',
    icon: 'fa-language',
    color: 'text-orange-400'
  },
  {
    id: '6',
    title: 'Detailed Analytics',
    description: 'Track your growth with granular data on focus areas, strengths, and weaknesses.',
    icon: 'fa-chart-pie',
    color: 'text-emerald-400'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-indigo-500">Lumina AI</span>?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combined state-of-the-art LLMs with pedagogical research to build the ultimate learning companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="glass p-8 rounded-3xl hover:border-white/20 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${feature.icon} text-2xl ${feature.color}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
