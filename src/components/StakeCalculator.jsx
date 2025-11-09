import React, { useMemo, useState } from 'react';

const coins = [
  { key: 'BTC', name: 'Bitcoin', apr: 4.2 },
  { key: 'ETH', name: 'Ethereum', apr: 5.8 },
  { key: 'ALT', name: 'Alt Coin', apr: 8.4 },
];

export default function StakeCalculator() {
  const [amount, setAmount] = useState(1);
  const [coin, setCoin] = useState(coins[0].key);
  const [term, setTerm] = useState(12); // months

  const apr = useMemo(() => coins.find(c => c.key === coin)?.apr ?? 0, [coin]);

  const rewards = useMemo(() => {
    const principal = Number(amount) || 0;
    const annualRate = apr / 100;
    const months = Number(term) || 0;
    const monthlyRate = annualRate / 12;
    // Compound monthly for an intuitive projection
    const futureValue = principal * Math.pow(1 + monthlyRate, months);
    const earned = futureValue - principal;
    return { futureValue, earned };
  }, [amount, apr, term]);

  return (
    <section id="stake" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Stake Calculator</h2>
            <p className="mt-2 max-w-prose text-white/70">
              Estimate your potential rewards. Rates are dynamic and may vary based on pool liquidity and network conditions.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Current APRs: BTC {coins[0].apr}% · ETH {coins[1].apr}% · ALT {coins[2].apr}%
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <label className="mb-2 block text-sm text-white/80">Select asset</label>
            <div className="mb-6 grid grid-cols-3 gap-2">
              {coins.map(c => (
                <button
                  key={c.key}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    coin === c.key
                      ? 'bg-white text-black shadow'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                  onClick={() => setCoin(c.key)}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <label className="mb-2 block text-sm text-white/80">Amount to stake</label>
            <div className="mb-6 flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="0.0001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none ring-white/20 placeholder-white/40 focus:ring-2"
                placeholder="0.00"
              />
              <span className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-white/80">{coin}</span>
            </div>

            <label className="mb-2 block text-sm text-white/80">Term (months)</label>
            <input
              type="range"
              min={1}
              max={24}
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="mb-2 w-full"
            />
            <div className="text-right text-sm text-white/70">{term} months</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <h3 className="text-xl font-semibold">Projection</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <Stat label="Selected asset" value={coins.find(c=>c.key===coin)?.name || ''} />
              <Stat label="APR" value={`${apr.toFixed(2)}%`} />
              <Stat label="Initial amount" value={`${Number(amount||0).toLocaleString()} ${coin}`} />
              <Stat label="Estimated term" value={`${term} mo`} />
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-white/70">Estimated rewards</span>
                <span className="text-2xl font-semibold">{rewards.earned.toLocaleString(undefined, { maximumFractionDigits: 6 })} {coin}</span>
              </div>
              <div className="mt-2 flex items-baseline justify-between text-sm text-white/70">
                <span>Estimated value after term</span>
                <span className="font-medium text-white">{rewards.futureValue.toLocaleString(undefined, { maximumFractionDigits: 6 })} {coin}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-white px-5 py-3 font-medium text-black shadow-lg transition hover:shadow-white/20">
              Continue to Stake
            </button>
            <p className="mt-3 text-xs text-white/50">This is a projection, not financial advice. Actual rewards may vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="mt-1 text-base font-medium text-white">{value}</div>
    </div>
  );
}
