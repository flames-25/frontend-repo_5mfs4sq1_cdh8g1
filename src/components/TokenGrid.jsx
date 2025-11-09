import React from 'react';
import { Shield, TrendingUp, Clock } from 'lucide-react';

const tokens = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    apr: '4.2% APR',
    color: 'from-amber-300 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-300/20 to-orange-500/20',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    apr: '6.8% APR',
    color: 'from-indigo-300 to-violet-500',
    gradient: 'bg-gradient-to-br from-indigo-300/20 to-violet-500/20',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    apr: '8.4% APR',
    color: 'from-emerald-300 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-300/20 to-teal-500/20',
  },
];

function TokenCard({ token }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 ${token.gradient} p-5 transition hover:border-white/20 hover:shadow-xl hover:shadow-black/30`}> 
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${token.color} p-[2px]`}> 
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black text-sm font-bold text-white">
              {token.symbol}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{token.name}</h3>
            <p className="text-sm text-white/70">{token.apr}</p>
          </div>
        </div>
        <a
          href="#stake"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Stake
        </a>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
        <div className="flex items-center gap-1.5"><Shield className="h-4 w-4" />Secure</div>
        <div className="flex items-center gap-1.5"><TrendingUp className="h-4 w-4" />Compounding</div>
        <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" />Daily rewards</div>
      </div>
    </div>
  );
}

export default function TokenGrid() {
  return (
    <section id="stake" className="relative z-10 bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Choose a staking pool</h2>
            <p className="mt-2 text-white/70">Flexible or fixed terms. Transparent APR and instant deposits.</p>
          </div>
          <a href="#learn" className="hidden text-sm text-white/70 hover:text-white sm:inline">How it works</a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tokens.map((t) => (
            <TokenCard key={t.symbol} token={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
