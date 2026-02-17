"use client";

import { motion } from "framer-motion";
import {
  ExclamationTriangleIcon,
  LinkBreak2Icon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";

const problems = [
  {
    title: "The Rebar Switch",
    body: (
      <>
        Right now, as you read this, your contractor is billing you for D16
        high-tensile rebar. But if you walk onto your site and measure the
        reinforcement in your columns, you will find D12. To the untrained eye,
        it looks like progress. To the forensic engineer, it is theft. You are
        paying for the weight and cost of D16, but receiving the structural
        capacity of D12. The difference? A KES 6,280,000{" "}
        <span className="font-bold text-red-600 dark:text-red-400">
          "Phantom Margin"
        </span>{" "}
        that exists only in your contractor’s bank account.
      </>
    ),
    icon: <LinkBreak2Icon className="w-6 h-6 text-red-600" />,
  },
  {
    title: 'The "Authorized" Leakage',
    body: (
      <>
        In the Nairobi luxury sector, this is called "Normalized Leakage." It is
        a systematic, calculated exploitation of the complexity found in your
        structural plans. Contractors know you are a busy individual. They know
        you have mastered the boardroom, not the bending schedule. They bank on
        the fact that you will never cross-reference a 200-page Bill of
        Quantities (BOQ) against the actual structural engineering
        specifications. The Result: You are unknowingly paying a 12% to 15%{" "}
        <span className="font-bold text-red-600 dark:text-red-400">"Tax"</span>{" "}
        on your own asset.
      </>
    ),
    icon: <ExclamationTriangleIcon className="w-6 h-6 text-orange-500" />,
  },
  {
    title: 'The "Mkubwa" Tax',
    body: (
      <>
        While you are stuck in traffic on the bypass or presiding over a board
        meeting, your project team is laughing. They use your status as a{" "}
        <span className="font-bold text-red-600 dark:text-red-400">
          "Titan"
        </span>{" "}
        against you. They assume you are "above" checking the unit rates of C25
        concrete or the tonnage of Y-specification steel. They treat your
        project like an open ATM. Every "unforeseen" variation and every padded
        material spec is a direct withdrawal from your legacy. Losing KES 6.2M
        might not break your balance sheet—but being{" "}
        <span className="font-bold text-red-600 dark:text-red-400">
          "The Sucker"
        </span>{" "}
        in a KES 100M transaction is a terminal blow to your authority.
      </>
    ),
    icon: <SewingPinFilledIcon className="w-6 h-6 text-yellow-500" />,
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: The Hook (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-1 bg-red-600 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-pretty">
                The Hidden Cost of Trust
              </h2>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Most property owners believe their BOQ is a fixed contract. In
                reality, it is often a work of fiction designed to look
                professional while concealing massive inefficiencies.
              </p>
            </motion.div>
          </div>

          {/* Right Column: The Copy (Cards) */}
          <div className="lg:col-span-8 space-y-8">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-background border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Subtle Red Warning Border on Left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/0 group-hover:bg-red-500 transition-colors duration-300 rounded-l-2xl" />

                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex shrink-0 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                    {item.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-3">
                      <span className="sm:hidden">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
