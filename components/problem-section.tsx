"use client";

import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "The Phantom Margin",
    hook: "Your contractor is committing fraud. Right now.",
    body: [
      "You are paying for D16 high-tensile rebar. Walk onto your site and measure the reinforcement in your columns \u2014 you will find D12.",
      "The difference is a KES 6,280,000 Phantom Margin that exists only in your contractor's account.",
    ],
    stat: "KES 6.28M",
    statLabel: "Phantom Margin Per Project",
  },
  {
    number: "02",
    title: "The Silent Tax",
    hook: "They are counting on the fact that you will never check.",
    body: [
      "Contractors know you haven't mastered the bending schedule. They bank on you never cross-referencing a 200-page BOQ against your structural engineering specifications.",
      'The result: you are unknowingly paying a 12\u201315% "Tax" on your own asset. Every single month.',
    ],
    stat: "12\u201315%",
    statLabel: "Silent Tax on Your Asset",
  },
  {
    number: "03",
    title: "Risk Exposure",
    hook: "Your status is being used as a weapon against you.",
    body: [
      "While you are presiding over a board meeting, your project team is treating your account like an open ATM.",
      "They assume you are above checking unit rates of C25 concrete. Every padded material spec is a direct, calculated withdrawal from your legacy.",
      "Losing KES 6.2M might not break your balance sheet. But being the sucker in a KES 100M transaction is a terminal blow to your authority.",
    ],
    stat: "KES 100M",
    statLabel: "Project Value at Risk",
  },
];

// X Icon SVG inline for max control
const XMark = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="14" cy="14" r="14" fill="#CFFF04" fillOpacity="0.12" />
    <path
      d="M9 9l10 10M19 9L9 19"
      stroke="#CFFF04"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function ProblemSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon">
            The Cold Hard Truth
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-white">
            Your BOQ is a<br />
            <span className="text-neon">Work of Fiction.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-4">
            Most property owners believe their Bill of Quantities is a fixed
            contract. In reality, it is often a carefully constructed illusion —
            designed to look professional while concealing theft.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="space-y-0 divide-y divide-zinc-800">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid md:grid-cols-[1fr_auto] gap-8 items-start py-12 md:py-16"
            >
              {/* Main Content */}
              <div className="space-y-6">
                {/* Number + Title Row */}
                <div className="flex items-baseline gap-4">
                  <span className="font-black text-4xl md:text-5xl text-neon leading-none select-none">
                    {item.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Hook */}
                <p className="text-lg md:text-xl font-semibold text-neon leading-snug">
                  {item.hook}
                </p>

                {/* Body bullets */}
                <ul className="space-y-3">
                  {item.body.map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1">
                        <XMark />
                      </span>
                      <span className="text-base md:text-lg text-zinc-300 leading-relaxed">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat Callout */}
              <div className="shrink-0 md:text-right border border-zinc-800 group-hover:border-neon/40 transition-colors duration-300 rounded-xl p-6 bg-zinc-900/50 min-w-[160px]">
                <p className="text-3xl md:text-4xl font-black text-neon leading-none">
                  {item.stat}
                </p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2 font-medium">
                  {item.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing gut-punch */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 pt-12 border-t border-zinc-800 text-center"
        >
          <p className="text-xl md:text-2xl font-black uppercase text-white max-w-2xl mx-auto leading-tight">
            This is not an accident.
            <span className="text-neon"> It is a system. </span>
            And it is designed to survive your silence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
