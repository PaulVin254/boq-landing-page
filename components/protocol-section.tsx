"use client";

import { motion } from "framer-motion";
import { Crosshair, Activity, Ruler } from "lucide-react";

export default function ProtocolSection() {
  const steps = [
    {
      num: "01",
      title: "THE BLUEPRINT CROSS-EXAMINATION",
      desc: "We don't trust the spreadsheet. We interrogate the source. We cross-reference every single line item in the BOQ against the actual structural drawings. If the blueprint calls for 10,000kg of steel and the BOQ bills you for 14,500kg, we flag the phantom materials. No ghost quantities survive this phase.",
      icon: (
        <Crosshair className="w-8 h-8 md:w-12 md:h-12 text-lime-500 dark:text-[#CFFF04]" />
      ),
    },
    {
      num: "02",
      title: "THE RATE STRESS-TEST",
      desc: "Contractors love to bury their profit margins in inflated unit rates. We strip away the 'Mkubwa Tax.' We stress-test every single material and labor rate against current, ruthless market realities. If they are charging you KES 150 for a KES 90 item, we kill the markup instantly.",
      icon: (
        <Activity className="w-8 h-8 md:w-12 md:h-12 text-lime-500 dark:text-[#CFFF04]" />
      ),
    },
    {
      num: "03",
      title: "THE VOLUMETRIC SQUEEZE",
      desc: "This is where the real money hides. We recalculate concrete volumes, excavation depths, and steel tonnage down to the exact engineering margins. We allow zero 'fat' for contractor convenience. You pay for exactly what the structure requires to stand. Not a shilling more.",
      icon: (
        <Ruler className="w-8 h-8 md:w-12 md:h-12 text-lime-500 dark:text-[#CFFF04]" />
      ),
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-zinc-950 dark:bg-black text-white relative overflow-hidden font-sans">
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen dark:mix-blend-normal"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 space-y-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-lime-600 dark:bg-[#CFFF04]" />
            <p className="text-sm font-mono font-bold uppercase tracking-[0.25em] text-lime-600 dark:text-[#CFFF04]">
              THE UNIQUE MECHANISM
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-white">
            THE ERIS FORENSIC
            <br />
            <span className="text-zinc-500">PROTOCOL.</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed pt-4 font-medium">
            We don&apos;t skim your documents. We put them under a microscope.
            Here is exactly how we extract your stolen capital.
          </p>
        </motion.div>

        {/* The Dossier / Target List */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Massive Background Number */}
              <div className="absolute -top-10 md:-top-16 -left-4 md:-left-8 text-[120px] md:text-[180px] font-black text-zinc-900/50 dark:text-zinc-900/30 select-none pointer-events-none z-0 transition-colors duration-500 group-hover:text-lime-900/20 dark:group-hover:text-[#CFFF04]/10">
                {step.num}
              </div>

              {/* Content Block */}
              <div className="relative z-10 bg-zinc-900/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-800 dark:border-zinc-800/50 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start transition-all duration-500 hover:border-lime-600/50 dark:hover:border-[#CFFF04]/50 hover:bg-zinc-900 dark:hover:bg-[#0f0f0f]">
                {/* Icon Container */}
                <div className="shrink-0 p-4 bg-black border border-zinc-800 dark:border-zinc-800/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-lime-600/30 dark:group-hover:border-[#CFFF04]/30 group-hover:shadow-[0_0_30px_rgba(132,204,22,0.15)] dark:group-hover:shadow-[0_0_30px_rgba(207,255,4,0.1)] transition-all duration-500">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white group-hover:text-lime-400 dark:group-hover:text-[#CFFF04] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center flex flex-col items-center"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-6 bg-lime-600 hover:bg-lime-700 dark:bg-[#CFFF04] dark:hover:bg-[#b8e600] text-white dark:text-black font-black text-lg md:text-2xl uppercase tracking-wider transition-all shadow-[0_0_40px_rgba(132,204,22,0.3)] dark:shadow-[0_0_40px_rgba(207,255,4,0.3)] hover:shadow-[0_0_60px_rgba(132,204,22,0.5)] dark:hover:shadow-[0_0_60px_rgba(207,255,4,0.5)]"
          >
            PUT MY BOQ UNDER THE MICROSCOPE
          </motion.a>
          <p className="text-sm md:text-base font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-lime-500 dark:bg-[#CFFF04] rounded-full animate-pulse" />
            Find out exactly how much you&apos;re overpaying.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
