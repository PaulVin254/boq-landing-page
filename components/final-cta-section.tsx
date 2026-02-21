"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="w-full py-32 bg-lime-500 dark:bg-[#CFFF04] text-black relative overflow-hidden font-sans">
      {/* Aggressive Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* The Setup / Micro-copy */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              YOU DIDN&apos;T BUILD AN EMPIRE TO BE TREATED LIKE AN OPEN ATM.
            </h2>
            <p className="text-xl md:text-3xl font-bold text-black/80 max-w-4xl mx-auto leading-tight">
              Every day you delay this audit is another day you fund your
              contractor&apos;s &quot;soft life.&quot;
            </p>
            <p className="text-lg md:text-xl font-mono font-bold bg-black text-white inline-block px-4 py-2 uppercase tracking-widest">
              The math is on the table. The risk is entirely on us.
            </p>
          </div>

          {/* The Final Boss Button */}
          <div className="pt-8 flex flex-col items-center justify-center space-y-4">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto inline-flex items-center justify-center px-10 py-8 bg-black text-white font-black text-2xl md:text-4xl uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)] border-4 border-black hover:border-white group"
            >
              <span className="group-hover:text-lime-400 transition-colors duration-300">
                DEPLOY THE MERCENARIES
              </span>
            </motion.a>

            {/* Micro-commitment Subtext */}
            <div className="flex items-center gap-3 text-black font-mono font-bold uppercase tracking-widest text-sm md:text-base mt-4">
              <ShieldAlert className="w-5 h-5" />
              <span>Takes 60 Seconds. 100% Confidential.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
