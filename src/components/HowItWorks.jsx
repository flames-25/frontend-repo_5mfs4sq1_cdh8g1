import React from 'react';
import { Wallet, Lock, Coins, Gift } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Connect wallet',
    desc: 'Use your favorite wallet to connect securely in your browser.',
  },
  {
    icon: Coins,
    title: 'Select asset',
    desc: 'Pick BTC, ETH or SOL and choose a flexible or fixed pool.',
  },
  {
    icon: Lock,
    title: 'Stake on‑chain',
    desc: 'Your assets remain non‑custodial and secured by audited contracts.',
  },
  {
    icon: Gift,
    title: 'Earn rewards',
    desc: 'Rewards compound automatically and can be claimed anytime.',
  },
];

export default function HowItWorks() {
  return (
    <section id="learn" className="relative z-10 bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">How staking works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Simple, transparent, and secure. It only takes a few minutes to start earning.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
