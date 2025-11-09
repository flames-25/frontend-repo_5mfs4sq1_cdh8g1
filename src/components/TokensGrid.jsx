import React from 'react';
import { Shield, Lock, Sparkles } from 'lucide-react';

const tokens = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    apr: 4.2,
    bg: 'from-amber-500/20 to-yellow-500/10',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    apr: 5.8,
    bg: 'from-indigo-500/20 to-blue-500/10',
  },
  {
    symbol: 'ALT',
    name: 'Alt Coin',
    apr: 8.4,
    bg: 'from-fuchsia-500/20 to-pink-500/10',
  },
];

export default function TokensGrid() {
  return (
    <section className="w-full bg-black py-16 text-white" id="learn">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Stake the top networks</h2>
            <p className="mt-2 max-w-prose text-white/70">Choose from battle‑tested assets with deep liquidity and transparent on‑chain rewards.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tokens.map((t) => (
            <div
              key={t.symbol}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${t.bg} p-6`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-2xl font-semibold">{t.name}</div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">{t.symbol}</span>
              </div>
              <div className="text-sm text-white/70">Current APR</div>
              <div className="text-3xl font-semibold">{t.apr}%</div>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
                <Badge icon={Shield} label="Audited" />
                <Badge icon={Lock} label="Non‑custodial" />
                <Badge icon={Sparkles} label="Auto‑compound" />
              </div>
              <button className="mt-6 w-full rounded-xl bg-white px-5 py-3 font-medium text-black shadow-lg transition hover:shadow-white/20">
                Stake {t.symbol}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-black/30 px-2 py-1">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}
