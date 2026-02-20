"use client";

import { motion } from "framer-motion";
import {
  Crosshair1Icon,
  DimensionsIcon,
  BarChartIcon,
  CrossCircledIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

export default function ProtocolSection() {
  const protocolFeatures = [
    {
      title: "Structural Over-reinforcement",
      description:
        "Padded steel tonnages that exceed engineering safety margins.",
      icon: <Crosshair1Icon className="w-8 h-8 text-sky-400" />,
    },
    {
      title: "Volumetric Padding",
      description:
        "Billing for concrete volumes that exceed the physical dimensions of the slab.",
      icon: <DimensionsIcon className="w-8 h-8 text-sky-400" />,
    },
    {
      title: "Rate Spikes",
      description:
        'Market-variance "errors" that hide a 20% markup in plain sight.',
      icon: <BarChartIcon className="w-8 h-8 text-sky-400" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* PART 1: The Protocol */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-mono text-sky-400 uppercase tracking-widest mb-4">
              Introducing
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              The Eris Forensic Protocol
            </h3>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              We do not offer &quot;friendly&quot; construction management. We
              do not have &quot;relationships&quot; with contractors.
              <br />
              <br />
              <strong className="text-white font-semibold block text-2xl">
                Eris is a Forensic Intelligence Unit.
              </strong>
              <span className="block mt-4 text-base">
                We perform a cold, clinical interrogation of your project&apos;s
                data. Our protocol cross-references your Architectural
                Blueprints and Structural Plans against your current BOQ to
                expose the &quot;Variance.&quot;
              </span>
              <span className="block mt-4 text-base">
                We identify exactly where the &quot;Phantom Materials&quot; are
                hidden. We expose:
              </span>
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {protocolFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl hover:border-sky-500/50 transition-colors duration-300 group"
            >
              <div className="bg-sky-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h4>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PART 2: The Consultancy Tax */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                The Elimination of the{" "}
                <span className="text-red-400">
                  &quot;Consultancy Tax&quot;
                </span>
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Most professional services in the Nairobi construction sector
                  operate on a &quot;Retainer Model&quot;—a fundamentally flawed
                  system where you are billed for time, not results.
                </p>
                <p>
                  This is effectively a Consultancy Tax; you pay for the
                  auditor&apos;s presence regardless of their efficacy. If they
                  find nothing, you lose capital. If they find leakage but lack
                  the courage to confront your contractor, you lose capital.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-5 bg-sky-950/30 border-l-4 border-sky-500 rounded-r-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-sky-400 mb-1">
                    The Eris Model
                  </h4>
                  <p className="text-sm text-slate-300">
                    We do not bill for hours. We do not charge for
                    &quot;effort.&quot; We only invoice for Capital Recovery.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comparison Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Bad Model */}
              <div className="flex items-center justify-between p-6 rounded-lg bg-slate-950 border border-slate-800 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/10 p-3 rounded-full shrink-0">
                    <CrossCircledIcon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-300">
                      Retainer Model
                    </div>
                    <div className="text-xs text-slate-500">
                      Billed for time, regardless of result
                    </div>
                  </div>
                </div>
                <span className="text-red-500 font-mono text-sm font-bold whitespace-nowrap">
                  -$ LOSS
                </span>
              </div>

              {/* Good Model */}
              <div className="relative overflow-hidden flex items-center justify-between p-6 rounded-lg bg-sky-950/20 border border-sky-500/50 shadow-[0_0_40px_-10px_rgba(14,165,233,0.15)] group hover:bg-sky-950/30 transition-all duration-300">
                <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-sky-500/10 transition-colors" />
                <div className="relative flex items-center gap-4">
                  <div className="bg-green-500/10 p-3 rounded-full shrink-0">
                    <CheckCircledIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Eris Intelligence
                    </div>
                    <div className="text-xs text-sky-400">
                      Zero fees unless we find money
                    </div>
                  </div>
                </div>
                <span className="relative text-green-400 font-mono text-sm font-bold whitespace-nowrap">
                  +$ CAPITAL
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
