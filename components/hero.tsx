"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-4"
          >
            <Button
              size="lg"
              className="shadow-xl text-lg px-8 py-6 bg-sky-900 hover:bg-sky-800 dark:bg-sky-700 dark:hover:bg-sky-600 text-white"
            >
              Get Your Free Audit
            </Button>
          </motion.div>
        </motion.div>

        {/* Before/After Image Placeholder */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0 }}
          className="w-full max-w-5xl mt-12 border rounded-xl bg-muted/50 aspect-video flex items-center justify-center text-muted-foreground relative overflow-hidden shadow-2xl"
        >
          {/* Replace this placeholder with your actual image:
              <img src="/audit-report.png" alt="Before/After BOQ Audit Report" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-400 p-8 text-center border-2 border-dashed border-slate-300 dark:border-slate-700 m-4 rounded-lg">
            <p className="font-semibold text-xl">
              PLACEHOLDER: Before/After Audit Report Image
            </p>
            <p className="text-sm mt-2">
              Show a side-by-side of &ldquo;Inflated BOQ&rdquo; vs
              &ldquo;Audited BOQ&rdquo; with highlighted savings
            </p>
          </div>
        </motion.div>
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
