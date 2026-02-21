"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="w-full py-24 bg-zinc-100 dark:bg-[#0a0a0a] text-zinc-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-300">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-normal"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* The "Certificate" Wrapper */}
          <div className="bg-white dark:bg-black border-[4px] border-dashed border-lime-600 dark:border-[#CFFF04] p-8 md:p-16 relative shadow-[0_20px_60px_rgba(132,204,22,0.15)] dark:shadow-[0_20px_60px_rgba(207,255,4,0.1)]">
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-lime-600 dark:bg-[#CFFF04]" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-lime-600 dark:bg-[#CFFF04]" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-lime-600 dark:bg-[#CFFF04]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-lime-600 dark:bg-[#CFFF04]" />

            {/* Visual Anchor: Shield */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-100 dark:bg-[#0a0a0a] p-4 rounded-full border-4 border-lime-600 dark:border-[#CFFF04] shadow-[0_0_30px_rgba(132,204,22,0.3)] dark:shadow-[0_0_30px_rgba(207,255,4,0.4)]">
              <ShieldAlert className="w-10 h-10 text-lime-600 dark:text-[#CFFF04]" />
            </div>

            <div className="text-center mt-6 space-y-6">
              {/* Subhead */}
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-red-600 dark:text-red-500">
                100% TOTAL RISK REVERSAL
              </p>

              {/* Headline */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-zinc-900 dark:text-white">
                THE{" "}
                <span className="text-lime-600 dark:text-[#CFFF04]">
                  KES 500,000
                </span>
                <br />
                GUARANTEE.
              </h2>

              {/* The Godfather Offer Copy */}
              <div className="max-w-3xl mx-auto space-y-6 pt-6">
                <p className="text-lg md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  We assume 100% of the technical and financial risk. We do not
                  play for small margins.
                </p>

                <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 text-left">
                  <p className="text-base md:text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed font-mono">
                    If the Eris Forensic Audit does not identify at least{" "}
                    <strong className="text-lime-700 dark:text-[#CFFF04]">
                      KES 500,000
                    </strong>{" "}
                    in actionable savings, we waive our entire bounty.
                    <br />
                    <br />
                    You receive the full Forensic Report and the Technical
                    Verdict at no cost. We either find you substantial capital,
                    or we don&apos;t bill you. There is no middle ground.
                  </p>
                </div>

                {/* The Paradigm Shift Quote */}
                <div className="py-8">
                  <p className="text-xl md:text-3xl font-black uppercase text-zinc-900 dark:text-white leading-tight italic">
                    &ldquo;You aren&apos;t buying an audit. You are deploying a
                    mercenary to recover stolen capital.&rdquo;
                  </p>
                </div>
              </div>

              {/* Massive CTA */}
              <div className="pt-8 flex flex-col items-center justify-center space-y-4">
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-6 bg-lime-600 hover:bg-lime-700 dark:bg-[#CFFF04] dark:hover:bg-[#b8e600] text-white dark:text-black font-black text-xl md:text-2xl uppercase tracking-wider transition-all shadow-[0_0_40px_rgba(132,204,22,0.4)] dark:shadow-[0_0_40px_rgba(207,255,4,0.4)] hover:shadow-[0_0_60px_rgba(132,204,22,0.6)] dark:hover:shadow-[0_0_60px_rgba(207,255,4,0.6)]"
                >
                  INITIATE RECOVERY PROTOCOL →
                </motion.a>
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Preliminary Variance Scan: 48-Hour Turnaround
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
