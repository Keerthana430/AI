import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Navbar = ({ isSignUp = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"></div>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button className="text-white hover:text-cyan-400 transition flex items-center gap-1">
              Features <ChevronDown size={16} />
            </button>
            <div className="text-white hover:text-cyan-400 transition cursor-pointer">Developers</div>
            <button className="text-white hover:text-cyan-400 transition flex items-center gap-1">
              Company <ChevronDown size={16} />
            </button>
            <div className="text-white hover:text-cyan-400 transition cursor-pointer">Blog</div>
            <div className="text-white hover:text-cyan-400 transition cursor-pointer">Changelog</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!isSignUp && (
            <>
              <button className="text-white hover:text-cyan-400 transition text-sm">Sign in</button>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-white transition text-sm font-medium shadow-lg hover:shadow-cyan-500/50">
                Sign up
              </button>
            </>
          )}
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;