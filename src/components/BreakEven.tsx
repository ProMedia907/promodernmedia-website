"use client";

import { useState } from "react";
import { breakEven } from "@/lib/site";

const MAX_MONTHS = 36;

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);

export default function BreakEven() {
  const [months, setMonths] = useState(18);

  const { setup, monthly, outright } = breakEven;
  const rolling = setup + monthly * months;
  const crossover = Math.ceil((outright - setup) / monthly); // first month outright wins
  const rollingCheaper = rolling < outright;
  const scale = Math.max(rolling, outright);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface/40">
      <div className="grid lg:grid-cols-[1fr_1.15fr]">
        {/* Explainer */}
        <div className="border-b border-line p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Run the numbers
          </p>
          <h3 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {breakEven.headline}
          </h3>
          <p className="text-[15px] leading-relaxed text-muted">
            {breakEven.body}
          </p>
        </div>

        {/* Calculator */}
        <div className="p-7 sm:p-9">
          <label
            htmlFor="months"
            className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted"
          >
            How long will you keep the site?
          </label>
          <div className="mb-1 flex items-baseline gap-2">
            <span className="font-mono text-4xl font-semibold tracking-tight text-bone">
              {months}
            </span>
            <span className="text-sm text-muted">
              {months === 1 ? "month" : "months"}
            </span>
          </div>

          <input
            id="months"
            type="range"
            min={1}
            max={MAX_MONTHS}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-4 w-full cursor-pointer accent-[var(--color-accent)]"
          />
          <div className="mb-8 flex justify-between font-mono text-[10px] text-muted">
            <span>1 month</span>
            <span>3 years</span>
          </div>

          {/* Bars */}
          <div className="space-y-5">
            <CostBar
              label="Build + Care Plan"
              sub={`${gbp(setup)} once, then ${gbp(monthly)}/mo`}
              amount={rolling}
              scale={scale}
              winner={rollingCheaper}
              color="var(--color-muted)"
            />
            <CostBar
              label="Own It Outright"
              sub={`${gbp(outright)}, paid once`}
              amount={outright}
              scale={scale}
              winner={!rollingCheaper}
              color="var(--color-accent)"
            />
          </div>

          <div className="mt-7 rounded-lg border border-line bg-ink p-4 text-sm leading-relaxed">
            {rollingCheaper ? (
              <>
                <span className="font-semibold text-bone">
                  Build + Care Plan is cheaper
                </span>{" "}
                <span className="text-muted">
                  by {gbp(outright - rolling)} at {months}{" "}
                  {months === 1 ? "month" : "months"}. Outright takes over from
                  month {crossover}.
                </span>
              </>
            ) : (
              <>
                <span className="font-semibold text-accent">
                  Own It Outright is cheaper
                </span>{" "}
                <span className="text-muted">
                  by {gbp(rolling - outright)} at {months} months, and the gap
                  widens every month after.
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CostBar({
  label,
  sub,
  amount,
  scale,
  winner,
  color,
}: {
  label: string;
  sub: string;
  amount: number;
  scale: number;
  winner: boolean;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <div>
          <div
            className={`text-sm font-semibold ${
              winner ? "text-bone" : "text-muted"
            }`}
          >
            {label}
          </div>
          <div className="font-mono text-[10px] text-muted">{sub}</div>
        </div>
        <div
          className={`font-mono text-lg font-semibold tabular-nums ${
            winner ? "text-bone" : "text-muted"
          }`}
        >
          {gbp(amount)}
        </div>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full transition-[width] duration-200 ease-out"
          style={{
            width: `${Math.min(100, (amount / scale) * 100)}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}
