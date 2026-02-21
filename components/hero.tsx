"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-(--breakpoint-xl) mx-auto px-4 py-12 md:py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-5xl mx-auto text-center"
        >
          {/* Audience Callout */}
          <span className="w-fit text-xs md:text-sm font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-2 border border-red-200 dark:border-red-800 rounded-full uppercase tracking-wide">
            ATTENTION: Property Owners in Karen, Runda, and Muthaiga with active
            projects exceeding KES 50M
          </span>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tighter mx-auto md:text-6xl text-pretty text-foreground">
            Your Current BOQ is Carrying{" "}
            <span className="text-red-600 dark:text-red-500">
              KES 6,280,000
            </span>{" "}
            in <span className="italic">&ldquo;Phantom Materials&rdquo;</span>{" "}
            That Will Never See Your Site.
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            Our independent audit reveals hidden costs, inflated quantities, and
            structural shortcuts before you sign the next cheque. Don&apos;t be
            the next victim.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4 flex-col"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center shadow-[0_0_30px_rgba(207,255,4,0.3)] dark:shadow-[0_0_30px_rgba(207,255,4,0.4)] hover:shadow-[0_0_50px_rgba(207,255,4,0.6)] text-lg md:text-xl font-black uppercase tracking-wider px-10 py-6 bg-lime-600 hover:bg-lime-700 dark:bg-[#CFFF04] dark:hover:bg-[#b8e600] text-white dark:text-black transition-all duration-300"
            >
              UPLOAD BOQ FOR INTERROGATION
            </a>
            <p className="text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Preliminary Variance Scan: 48-Hour Turnaround
            </p>
          </motion.div>
        </motion.div>

        {/* Authority Evidence Visual Composition */}
        <div className="w-full max-w-5xl mt-16 relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
          {/* Image 1: The Foundation (Standard BOQ) */}
          <motion.div
            initial={{ y: 40, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1, rotate: -3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              bounce: 0,
            }}
            className="absolute w-[85%] md:w-[75%] max-w-3xl left-1/2 -translate-x-1/2 top-0 md:top-4 z-10"
          >
            <div className="relative shadow-2xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <img
                src="/audited-boq.png"
                alt="Standard Contractor BOQ Submission showing unverified quantities"
                width={800}
                height={600}
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
              {/* Bottom Blur/Fade to blend into background */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Image 2: The Audit (Floating Above) */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              type: "spring",
              bounce: 0.2,
            }}
            className="absolute w-[75%] md:w-[65%] max-w-2xl right-0 md:right-8 bottom-0 md:-bottom-8 z-20"
          >
            <div className="relative group">
              {/* Subtle glow effect behind the focused image */}
              <div className="absolute -inset-4 bg-red-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src="/audited-boq-2.png"
                alt="Eris Forensic Audit Report showing KES 6.28M in savings"
                width={700}
                height={500}
                fetchPriority="high"
                className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-red-500/20 dark:border-red-500/30 transform transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </motion.div>

          {/* Glassmorphism Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="absolute top-4 left-4 md:top-12 md:left-12 z-30 bg-white/70 dark:bg-black/50 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-2xl rounded-2xl p-3 md:p-4 flex items-center gap-3"
          >
            <div className="bg-green-500/20 p-2 rounded-full flex-shrink-0">
              <Check
                className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400"
                strokeWidth={3}
              />
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider leading-none mb-1">
                Verified Savings
              </p>
              <p className="text-sm md:text-lg font-bold text-slate-900 dark:text-white leading-none">
                KES 6.2M Recovered
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none "
      >
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-red-500/10 blur-[90px] rounded-3xl max-sm:rotate-15 sm:rotate-35 will-change-transform"></div>
        </div>
      </motion.div>
    </div>
  );
}
