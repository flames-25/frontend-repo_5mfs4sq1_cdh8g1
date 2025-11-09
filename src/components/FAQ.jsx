import React from 'react';

const faqs = [
  {
    q: 'How are rewards generated?',
    a: 'Rewards are sourced directly from network staking yields and validator incentives. We do not rehypothecate assets.',
  },
  {
    q: 'Can I unstake anytime?',
    a: 'Flexible pools allow instant withdrawals. Fixed terms may include a cooldown. Network conditions can affect timing.',
  },
  {
    q: 'Is this custodial?',
    a: 'No. You retain control through non-custodial smart contracts. Interactions are signed from your wallet.',
  },
  {
    q: 'What are the fees?',
    a: 'A small performance fee may apply and is reflected in the displayed APR. No hidden spreads or deposit fees.',
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:bg-white/10">
              <summary className="cursor-pointer list-none text-lg font-medium">
                <span className="mr-2 text-white/60">Q{i + 1}.</span>
                {f.q}
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-white/80">Ready to start earning?</p>
          <a href="#stake" className="mt-3 inline-block rounded-xl bg-white px-5 py-3 font-medium text-black">Start staking</a>
        </div>
      </div>
    </section>
  );
}
