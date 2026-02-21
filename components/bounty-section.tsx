"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function BountySection() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-300">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-normal"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
            THE RECOVERY MANDATE
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-zinc-900 dark:text-white mb-6">
            STOP SUBSIDIZING
            <br />
            <span className="text-lime-600 dark:text-[#CFFF04]">
              CONTRACTOR INEFFICIENCY.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed pt-4">
            Every high-value project carries an invisible
            &quot;Contractor&apos;s Tax.&quot; Buried in unit rates, structural
            over-specs, and ghost contingencies. If you haven&apos;t audited
            your BOQ, you aren&apos;t building. You are being bled.
          </p>
        </motion.div>

        {/* The "Us vs. Them" Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* LEFT SIDE - THE TAXMAN (Industry Standard) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 relative group flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-800 dark:text-zinc-300 tracking-tight mb-2">
                THE TAXMAN MODEL
              </h3>
              <p className="text-sm font-mono text-red-600 dark:text-red-400 uppercase tracking-widest">
                (The Industry Standard)
              </p>
            </div>

            <div className="space-y-6 flex-grow">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Traditional engineers and project managers operate on a massive
                conflict of interest. They charge a percentage of the total
                project cost.
              </p>

              <div className="bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-zinc-900 dark:text-white uppercase tracking-wide text-sm mb-1">
                      The Problem
                    </strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                      The more you spend, the more they earn. They are a tax on
                      your balance sheet.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-zinc-900 dark:text-white uppercase tracking-wide text-sm mb-1">
                      The Result
                    </strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                      Zero incentive to cut the fat. Your financial loss is
                      their financial stability.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - THE MERCENARY (Eris Protocol) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-950 dark:bg-[#050505] border-2 border-lime-600 dark:border-[#CFFF04] p-8 md:p-10 relative shadow-[0_0_50px_rgba(132,204,22,0.15)] dark:shadow-[0_0_50px_rgba(207,255,4,0.1)] flex flex-col"
          >
            {/* Neon Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime-600 dark:border-[#CFFF04]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime-600 dark:border-[#CFFF04]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime-600 dark:border-[#CFFF04]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime-600 dark:border-[#CFFF04]" />

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-2">
                THE MERCENARY MODEL
              </h3>
              <p className="text-sm font-mono text-lime-500 dark:text-[#CFFF04] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-lime-500 dark:bg-[#CFFF04] rounded-full animate-pulse" />
                (The Eris Protocol)
              </p>
            </div>

            <div className="space-y-6 flex-grow">
              <p className="text-zinc-300 leading-relaxed">
                We have eliminated the traditional fee structure. We don&apos;t
                want a salary. We don&apos;t charge for &quot;time.&quot; We
                want a bounty on the money we recover for you.
              </p>

              <div className="bg-black/50 border border-lime-600/30 dark:border-[#CFFF04]/30 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-lime-500 dark:text-[#CFFF04] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white uppercase tracking-wide text-sm mb-1">
                      Forensic Intake
                    </strong>
                    <span className="text-zinc-400 text-sm">
                      We ingest your BOQ and structural drawings into our
                      benchmark engine.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-lime-500 dark:text-[#CFFF04] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white uppercase tracking-wide text-sm mb-1">
                      Variance Detection
                    </strong>
                    <span className="text-zinc-400 text-sm">
                      We identify material over-specs, unit rate inflation, and
                      ghost contingencies.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-lime-500 dark:text-[#CFFF04] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-lime-400 dark:text-[#CFFF04] uppercase tracking-wide text-sm mb-1">
                      The 20% Recovery Bounty
                    </strong>
                    <span className="text-zinc-400 text-sm">
                      Our fee is strictly 20% of the total savings identified.
                      We only eat what we kill.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Mathematical Verdict (The Closer) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500 dark:via-[#CFFF04] to-transparent opacity-50" />

            <div className="p-6 md:p-10 text-center border-b border-zinc-200 dark:border-zinc-800">
              <h4 className="text-xl md:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                THE MATHEMATICAL VERDICT
              </h4>
              <p className="text-sm font-mono text-zinc-500 mt-2 uppercase tracking-widest">
                Example: We find KES 5,000,000 in leakage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-black/60">
              {/* Upfront Cost */}
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Upfront Cost
                </div>
                <div className="text-3xl md:text-4xl font-black font-mono text-zinc-900 dark:text-white">
                  KES 0
                </div>
                <div className="text-xs text-zinc-500 mt-2">
                  No retainer. No hourly rates.
                </div>
              </div>

              {/* We Take */}
              <div className="p-8 flex flex-col items-center justify-center text-center bg-zinc-50 dark:bg-zinc-900/20">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Eris Bounty (20%)
                </div>
                <div className="text-3xl md:text-4xl font-black font-mono text-zinc-600 dark:text-zinc-400">
                  KES 1.0M
                </div>
                <div className="text-xs text-zinc-500 mt-2">
                  Paid only from recovered funds.
                </div>
              </div>

              {/* You Keep */}
              <div className="p-8 flex flex-col items-center justify-center text-center bg-lime-500 dark:bg-[#CFFF04] relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10">
                  <div className="text-xs font-mono text-black uppercase tracking-widest mb-3 font-bold">
                    You Retain
                  </div>
                  <div className="text-3xl md:text-4xl font-black font-mono text-black tracking-tighter">
                    KES 4.0M
                  </div>
                  <div className="text-xs text-black/80 mt-2 font-bold">
                    Destined for the contractor&apos;s pocket.
                  </div>
                </div>
              </div>
            </div>

            {/* The Guarantee */}
            <div className="p-6 bg-zinc-100 dark:bg-zinc-950 text-center border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm md:text-base font-mono uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                <span className="text-lime-700 dark:text-[#CFFF04] font-bold mr-2">
                  THE GUARANTEE:
                </span>
                If we audit your BOQ and find zero leakage, you pay absolutely
                nothing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
