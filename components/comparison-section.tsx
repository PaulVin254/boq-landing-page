"use client";

import { motion } from "framer-motion";

export default function ComparisonSection() {
  return (
    <section className="w-full py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-1 bg-red-900/30 border border-red-800/50 rounded-full text-sm font-mono text-red-400 mb-4">
            FORENSIC EVIDENCE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Exhibit A vs. The Verdict
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            The image on the left is what you signed. The data on the right is
            what you are actually being delivered.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* LEFT SIDE - The Deception */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              EXHIBIT_A: CONTRACTOR_SUBMISSION
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl grayscale">
              {/* Mock BOQ Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800 border-b border-slate-700">
                    <tr>
                      <th className="px-4 py-3 text-left font-mono text-slate-400">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-slate-400">
                        Description
                      </th>
                      <th className="px-4 py-3 text-right font-mono text-slate-400">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right font-mono text-slate-400">
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.1
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        Foundation Excavation
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        120
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        m³
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.2
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        Blinding Concrete C15
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        8.5
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        m³
                      </td>
                    </tr>
                    <tr className="bg-slate-850">
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.3
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        Y16 High-Yield Reinforcement
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-slate-200">
                        14,500
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        kg
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.4
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        C25 Structural Concrete
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        65
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        m³
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - The Truth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 relative"
          >
            <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
              ERIS_PROTOCOL: AUDIT_COMPLETE
            </div>

            <div className="bg-slate-900 border-2 border-red-900/50 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 relative">
              {/* Mock BOQ Table with Annotations */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800 border-b border-slate-700">
                    <tr>
                      <th className="px-4 py-3 text-left font-mono text-slate-400">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left font-mono text-slate-400">
                        Description
                      </th>
                      <th className="px-4 py-3 text-right font-mono text-slate-400">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right font-mono text-slate-400">
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.1
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        Foundation Excavation
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        120
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        m³
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.2
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        Blinding Concrete C15
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        8.5
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        m³
                      </td>
                    </tr>
                    <tr className="bg-red-950/20 relative">
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.3
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        Y16 High-Yield Reinforcement
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-red-400 relative">
                        <span className="relative z-10">14,500</span>
                        {/* Red Circle SVG */}
                        <svg
                          className="absolute -inset-2 z-0"
                          viewBox="0 0 100 40"
                          preserveAspectRatio="none"
                        >
                          <ellipse
                            cx="50"
                            cy="20"
                            rx="45"
                            ry="15"
                            fill="none"
                            stroke="#DC2626"
                            strokeWidth="3"
                          />
                        </svg>
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        kg
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-300">
                        3.2.4
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        C25 Structural Concrete
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-300">
                        65
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-400">
                        m³
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Floating Annotation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -right-2 transform translate-x-full -translate-y-1/2 hidden xl:block"
              >
                <div className="bg-red-900 border-2 border-red-600 rounded px-3 py-2 text-xs font-mono text-red-100 whitespace-nowrap shadow-lg">
                  Physical Max Capacity: 9,820kg
                  <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-red-600 -translate-x-full" />
                </div>
              </motion.div>

              {/* Stamp - Animated */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4"
              >
                <div className="border-4 border-red-600 text-red-600 font-bold px-4 py-2 text-sm font-mono transform -rotate-10 bg-slate-900/50 backdrop-blur-sm">
                  DISCREPANCY DETECTED
                </div>
              </motion.div>
            </div>

            {/* Mobile Annotation */}
            <div className="xl:hidden bg-red-900/20 border border-red-800/50 rounded px-4 py-2 text-xs font-mono text-red-400">
              → Physical Max Capacity: 9,820kg
            </div>
          </motion.div>
        </div>

        {/* Forensic Report */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 space-y-8"
        >
          {/* Report Header */}
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">
              ANALYSIS REPORT: ASSET REF // MUT-72-B
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Upon cross-referencing the Structural Engineer's Bending Schedules
              against the Contractor's Phase 2 BOQ, the Eris Protocol identified
              a catastrophic variance in the Y16 High-Yield Reinforcement
              Tonnage.
            </p>
          </div>

          {/* Statistical Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 space-y-2">
              <div className="text-xs font-mono text-slate-500 uppercase">
                Contractor Claim
              </div>
              <div className="text-2xl font-bold font-mono text-slate-200">
                14,500 kg
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 space-y-2">
              <div className="text-xs font-mono text-slate-500 uppercase">
                Actual Capacity
              </div>
              <div className="text-2xl font-bold font-mono text-slate-200">
                9,820 kg
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950 to-slate-950 border-2 border-red-900 rounded-lg p-6 space-y-2">
              <div className="text-xs font-mono text-red-400 uppercase">
                Phantom Variance
              </div>
              <div className="text-2xl font-bold font-mono text-red-500">
                4,680 kg
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950 to-slate-950 border-2 border-red-900 rounded-lg p-6 space-y-2">
              <div className="text-xs font-mono text-red-400 uppercase">
                Financial Leakage
              </div>
              <div className="text-2xl font-bold font-mono text-red-500">
                KES 1.42M
              </div>
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              This is not a mathematical oversight. This is a{" "}
              <span className="font-bold text-red-400">
                physical impossibility
              </span>
              . At current market rates, this single discrepancy represents a
              KES 1,420,800 leakage on a single page of documentation.
            </p>
            <p className="text-slate-400 text-sm">
              Our audit found that the contractor intentionally over-specified
              reinforcement density in the BOQ, banking on the fact that no
              asset owner would manually recalculate the tonnage from the
              structural blueprints.
            </p>
          </div>
        </motion.div>

        {/* Closing Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed max-w-4xl mx-auto">
            "This{" "}
            <span className="font-bold text-red-400">
              KES 1.42M discrepancy
            </span>{" "}
            was hidden in plain sight on page 14 of a Muthaiga BOQ. We found{" "}
            <span className="font-bold text-red-400">
              14 similar 'Phantom' variances
            </span>{" "}
            on the subsequent 12 pages.{" "}
            <span className="italic text-red-400">
              How many are currently hidden in yours?
            </span>
            "
          </p>
        </motion.div>
      </div>
    </section>
  );
}
