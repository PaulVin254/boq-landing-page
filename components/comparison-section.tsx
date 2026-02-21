"use client";

import { motion } from "framer-motion";

export default function ComparisonSection() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden font-sans transition-colors duration-300">
      {/* Subtle noise texture overlay (Matching ProblemSection) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply dark:mix-blend-normal"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Grid Background Effect - Muted for texture */}
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
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-600 dark:text-[#CFFF04]">
            SEE THE DIFFERENCE WITH YOUR OWN EYES
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-zinc-900 dark:text-white mb-6">
            THE EVIDENCE
            <br />
            <span className="text-lime-600 dark:text-[#CFFF04]">
              DOES NOT LIE.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed pt-4">
            The image on the left is what you signed. The data on the right is
            what you are actually being delivered.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* LEFT SIDE - THE TRAP (Contractor Submission) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 opacity-70 hover:opacity-100 transition-opacity duration-500 relative group"
          >
            <div className="flex justify-between items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3">
              <h3 className="text-xs font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-wider m-0">
                EXHIBIT_A: CONTRACTOR_SUBMISSION
              </h3>
              <div className="px-2 py-1 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                STATUS: PENDING
              </div>
            </div>

            <div className="bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 border-t-0 rounded-none overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative min-h-[300px]">
              {/* REJECTED Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <div className="border-4 border-zinc-700 dark:border-zinc-700 text-zinc-700 dark:text-zinc-700 font-black px-6 py-2 text-3xl uppercase tracking-widest transform -rotate-12 bg-white/90 dark:bg-black/80 backdrop-blur-sm">
                  INFLATED
                </div>
              </div>

              {/* Mock BOQ Table */}
              <div className="overflow-x-auto p-4">
                <table className="w-full text-sm font-mono text-zinc-500 dark:text-zinc-400 border-collapse">
                  <thead className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="px-4 py-3 text-left uppercase tracking-wider text-zinc-700 dark:text-zinc-600 text-[10px]">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left uppercase tracking-wider text-zinc-700 dark:text-zinc-600 text-[10px]">
                        Description
                      </th>
                      <th className="px-4 py-3 text-right uppercase tracking-wider text-zinc-700 dark:text-zinc-600 text-[10px]">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right uppercase tracking-wider text-zinc-700 dark:text-zinc-600 text-[10px]">
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/50 dark:divide-zinc-800/50">
                    <tr>
                      <td className="px-4 py-3 text-zinc-600 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        3.2.1
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        Foundation Excavation
                      </td>
                      <td className="px-4 py-3 text-right border-r border-zinc-200/50 dark:border-zinc-800/30">
                        120
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500 dark:text-zinc-600">
                        m³
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-zinc-600 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        3.2.2
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        Blinding Concrete C15
                      </td>
                      <td className="px-4 py-3 text-right border-r border-zinc-200/50 dark:border-zinc-800/30">
                        8.5
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500 dark:text-zinc-600">
                        m³
                      </td>
                    </tr>
                    <tr className="bg-zinc-100/50 dark:bg-zinc-800/30">
                      <td className="px-4 py-3 text-zinc-600 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        3.2.3
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        Y16 High-Yield Reinforcement
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-zinc-800 dark:text-zinc-300 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        14,500
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500 dark:text-zinc-600">
                        kg
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-zinc-600 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        3.2.4
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200/50 dark:border-zinc-800/30">
                        C25 Structural Concrete
                      </td>
                      <td className="px-4 py-3 text-right border-r border-zinc-200/50 dark:border-zinc-800/30">
                        65
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500 dark:text-zinc-600">
                        m³
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - THE REALITY (Eris Protocol) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 relative z-10"
          >
            <div className="flex justify-between items-center bg-zinc-950 dark:bg-[#111] border border-lime-500 dark:border-[#CFFF04] border-b-0 p-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-lime-500/30 dark:from-[#CFFF04]/20 to-transparent skew-x-12 transform translate-x-4" />
              <h3 className="text-xs font-mono text-lime-400 dark:text-[#CFFF04] uppercase tracking-wider flex items-center gap-2 relative z-10 font-bold m-0">
                <div className="w-2 h-2 bg-lime-500 dark:bg-[#CFFF04] rounded-full animate-pulse shadow-[0_0_10px_#84cc16] dark:shadow-[0_0_10px_#CFFF04]" />
                ERIS_PROTOCOL: AUDIT_COMPLETE
              </h3>
            </div>

            <div className="bg-white dark:bg-[#050505] border-2 border-lime-600 dark:border-[#CFFF04] rounded-none overflow-hidden shadow-[0_0_50px_rgba(132,204,22,0.15)] dark:shadow-[0_0_50px_rgba(207,255,4,0.1)] relative min-h-[300px]">
              {/* Neon Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime-600 dark:border-[#CFFF04] z-20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime-600 dark:border-[#CFFF04] z-20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime-600 dark:border-[#CFFF04] z-20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime-600 dark:border-[#CFFF04] z-20" />

              {/* Mock BOQ Table with Annotations */}
              <div className="overflow-x-auto p-4">
                <table className="w-full text-sm font-mono text-zinc-800 dark:text-zinc-300 border-separate border-spacing-0">
                  <thead className="bg-lime-50 dark:bg-[#CFFF04]/5">
                    <tr>
                      <th className="px-4 py-3 text-left uppercase tracking-wider text-lime-700 dark:text-[#CFFF04] text-[10px] border-b border-lime-600/20 dark:border-[#CFFF04]/20">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left uppercase tracking-wider text-lime-700 dark:text-[#CFFF04] text-[10px] border-b border-lime-600/20 dark:border-[#CFFF04]/20">
                        Description
                      </th>
                      <th className="px-4 py-3 text-right uppercase tracking-wider text-lime-700 dark:text-[#CFFF04] text-[10px] border-b border-lime-600/20 dark:border-[#CFFF04]/20">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right uppercase tracking-wider text-lime-700 dark:text-[#CFFF04] text-[10px] border-b border-lime-600/20 dark:border-[#CFFF04]/20">
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-3 text-zinc-500 border-r border-zinc-200 dark:border-zinc-900">
                        3.2.1
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200 dark:border-zinc-900">
                        Foundation Excavation
                      </td>
                      <td className="px-4 py-3 text-right border-r border-zinc-200 dark:border-zinc-900">
                        120
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500">m³</td>
                    </tr>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-3 text-zinc-500 border-r border-zinc-200 dark:border-zinc-900">
                        3.2.2
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200 dark:border-zinc-900">
                        Blinding Concrete C15
                      </td>
                      <td className="px-4 py-3 text-right border-r border-zinc-200 dark:border-zinc-900">
                        8.5
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500">m³</td>
                    </tr>
                    <tr className="bg-lime-100 dark:bg-[#CFFF04]/10 relative group-row">
                      <td className="px-4 py-4 text-lime-700 dark:text-[#CFFF04] border-r border-lime-600/20 dark:border-[#CFFF04]/20 font-bold border-l-4 border-l-lime-600 dark:border-l-[#CFFF04]">
                        3.2.3
                      </td>
                      <td className="px-4 py-4 text-zinc-900 dark:text-white font-bold border-r border-lime-600/20 dark:border-[#CFFF04]/20">
                        Y16 High-Yield Reinforcement
                      </td>
                      <td className="px-4 py-4 text-right font-black text-lime-700 dark:text-[#CFFF04] text-lg md:text-xl relative border-r border-lime-600/20 dark:border-[#CFFF04]/20">
                        {/* Glowing Text Shadow */}
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs text-zinc-500 line-through decoration-red-500 decoration-2 opacity-60">
                            14,500
                          </span>
                          <span className="relative drop-shadow-[0_0_8px_rgba(132,204,22,0.3)] dark:drop-shadow-[0_0_8px_rgba(207,255,4,0.5)]">
                            9,820
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right text-zinc-500">kg</td>
                    </tr>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-3 text-zinc-500 border-r border-zinc-200 dark:border-zinc-900">
                        3.2.4
                      </td>
                      <td className="px-4 py-3 border-r border-zinc-200 dark:border-zinc-900">
                        C25 Structural Concrete
                      </td>
                      <td className="px-4 py-3 text-right border-r border-zinc-200 dark:border-zinc-900">
                        65
                      </td>
                      <td className="px-4 py-3 text-right text-zinc-500">m³</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Stamp - Animated */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute bottom-8 right-8 z-30 pointer-events-none"
              >
                <div className="border-[4px] border-lime-600 dark:border-[#CFFF04] text-lime-700 dark:text-[#CFFF04] font-black px-4 py-2 text-xl md:text-2xl font-mono transform bg-white/90 dark:bg-black/80 backdrop-blur-sm shadow-[0_0_30px_rgba(132,204,22,0.2)] dark:shadow-[0_0_30px_rgba(207,255,4,0.3)] tracking-widest uppercase flex flex-col items-center leading-none gap-1">
                  <span>VERIFIED</span>
                  <span className="text-sm tracking-[0.5em] font-bold">
                    FRAUD
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Forensic Report / Savings Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-none relative overflow-hidden group"
        >
          {/* Neon Top Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500 dark:via-[#CFFF04] to-transparent opacity-50" />

          <div className="p-6 md:p-10 space-y-8 relative z-10">
            {/* Report Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 px-4 md:px-0">
              <div className="border-l-4 border-lime-600 dark:border-[#CFFF04] pl-6">
                <h3 className="text-sm font-mono text-lime-700 dark:text-[#CFFF04] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 dark:bg-[#CFFF04] rounded-full animate-pulse" />
                  AUDIT INTELLIGENCE REPORT // MUT-72-B
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono text-sm max-w-2xl">
                  Cross-reference of Structural Bending Schedules vs. Contractor
                  Phase 2 BOQ identifies critical variance in Y16 High-Yield
                  Reinforcement.
                </p>
              </div>
            </div>

            {/* Statistical Breakdown Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-zinc-200 dark:border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-black/40">
              <div className="p-6 flex flex-col justify-center">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Contractor Claim
                </div>
                <div className="text-xl md:text-2xl font-black font-mono text-zinc-400 dark:text-zinc-600 line-through decoration-red-500/50 decoration-2">
                  14,500 kg
                </div>
              </div>

              <div className="p-6 flex flex-col justify-center">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  True Capacity
                </div>
                <div className="text-xl md:text-2xl font-black font-mono text-zinc-900 dark:text-white">
                  9,820 kg
                </div>
              </div>

              <div className="p-6 bg-lime-50 dark:bg-[#CFFF04]/5 relative overflow-hidden group/item flex flex-col justify-center">
                <div className="absolute inset-0 bg-lime-100 dark:bg-[#CFFF04]/10 translate-y-full group-hover/item:translate-y-0 transition-transform duration-300" />
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-lime-700 dark:text-[#CFFF04] uppercase tracking-widest mb-2">
                    Phantom Variance
                  </div>
                  <div className="text-xl md:text-2xl font-black font-mono text-lime-700 dark:text-[#CFFF04]">
                    4,680 kg
                  </div>
                </div>
              </div>

              <div className="p-6 bg-lime-500 dark:bg-[#CFFF04] relative overflow-hidden flex flex-col justify-center group/leakage cursor-default">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/leakage:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-black uppercase tracking-widest mb-1 font-bold">
                    Financial Leakage
                  </div>
                  <div className="text-2xl md:text-3xl font-black font-mono text-black tracking-tighter">
                    KES 1.42M
                  </div>
                </div>
              </div>
            </div>

            {/* Verdict Text */}
            <div className="pt-2 px-2 md:px-0">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-wide">
                <span className="text-lime-700 dark:text-[#CFFF04] font-bold mr-2">
                  VERDICT:
                </span>
                This is not a rounding error. It is a mathematical
                impossibility. A KES 1,420,000 leakage on a single page of
                documentation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center flex flex-col items-center"
        >
          <p className="text-xl md:text-3xl font-black uppercase text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto mb-8">
            THIS{" "}
            <span className="text-lime-700 dark:text-[#CFFF04] bg-lime-100 dark:bg-[#CFFF04]/10 px-2 mx-1 rounded-sm">
              KES 1.42M DISCREPANCY
            </span>{" "}
            WAS HIDDEN ON PAGE 14. WE FOUND 14 SIMILAR &apos;PHANTOM&apos;
            VARIANCES ON THE NEXT 12 PAGES.
          </p>

          {/* Logical Proof CTA */}
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-5 bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-black text-lg md:text-xl uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            RUN THE ERIS PROTOCOL ON MY PROJECT
          </motion.a>
          <p className="text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-3">
            Let the math do the talking. Zero upfront fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
