import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
          Secure. Non-custodial. On‑chain.
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
          Stake Crypto with High‑Yield Rewards
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Earn passive income by staking Bitcoin, Ethereum, and top coins. Instant deposits, transparent rewards, and institutional‑grade security.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#stake"
            className="group inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-black shadow-lg shadow-white/10 transition hover:shadow-white/20"
          >
            Start Staking
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#learn"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/15"
          >
            Learn more
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-left text-sm text-white/80 sm:grid-cols-4">
          <div className="rounded-lg border border-white/10 bg-black/30 p-3">APR up to <span className="font-semibold text-white">8.4%</span></div>
          <div className="rounded-lg border border-white/10 bg-black/30 p-3">No lockups for flexible pools</div>
          <div className="rounded-lg border border-white/10 bg-black/30 p-3">Audited smart contracts</div>
          <div className="rounded-lg border border-white/10 bg-black/30 p-3">24/7 on‑chain rewards</div>
        </div>
      </div>
    </section>
  );
}
