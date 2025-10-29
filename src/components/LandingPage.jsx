import React from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';

const LandingPage = ({ onNavigateToSignUp }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <Navbar />
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
              <span className="text-white text-sm">Latest integration just arrived</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Revolutionize Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-float">
                Workflow with AI
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Experience cutting-edge solutions designed to elevate productivity and deliver results like never before.
            </p>

            <button 
              onClick={onNavigateToSignUp}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>
          </div>

          {/* Right Image Area */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-3xl border border-cyan-400/20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
                  
                  {/* Animated Circle Design */}
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-float opacity-30 blur-3xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border-4 border-cyan-400/30 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center animate-bounce shadow-lg shadow-cyan-500/20">
              <ChevronDown className="text-cyan-400" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;