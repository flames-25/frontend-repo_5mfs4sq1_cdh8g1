import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative z-10 bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur sm:p-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Start staking in minutes</h3>
            <p className="mt-2 max-w-xl text-white/70">Join thousands earning on‑chain rewards with institutional‑grade security.</p>
          </div>
          <a
            href="#stake"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Rocket className="h-5 w-5" />
            Launch app
          </a>
        </div>
      </div>
    </section>
  );
}
