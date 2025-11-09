import React from 'react';
import Hero3D from './components/Hero3D';
import TokenGrid from './components/TokenGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D />
      <TokenGrid />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 py-10 text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} HoloStake. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
