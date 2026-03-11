"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Target,
  Crosshair,
  Lock,
  ArrowRight,
  FileSpreadsheet,
  Clock,
  CreditCard,
  CheckCircle2,
  X,
  Loader2,
} from "lucide-react";

export default function BaselineProtocolPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit request.");
      }

      setIsSuccess(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#CFFF04] selection:text-black font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CFFF04]/0 via-[#CFFF04]/20 to-[#CFFF04]/0 blur-3xl rounded-full" />
      </div>

      {/* Minimal Header (Trap Navigation) */}
      <header className="relative z-10 border-b border-zinc-900 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-center">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-white uppercase"
          >
            ERIS ENGINEERING
          </Link>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm tracking-widest uppercase mb-8">
            <ShieldAlert className="w-4 h-4" />
            Critical Vulnerability Detected
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.1] mb-8">
            If You Don&apos;t Have Your Own Math,{" "}
            <span className="text-[#CFFF04]">
              You Are Signing a Blank Cheque.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Without a verified measurement, you aren&apos;t building a
            project—you&apos;re funding a contractor&apos;s lifestyle. Most
            owners lose{" "}
            <strong className="text-white">20% of their budget</strong> before
            the first brick is laid because they trusted the contractor&apos;s
            math.
          </p>
        </motion.div>

        {/* The Mechanism (The Arsenal) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">
              We Don&apos;t Print Bills.
              <br />
              We Draw <span className="text-[#CFFF04]">Battle Lines.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              An Eris Baseline BOQ is a forensic breakdown of every single nail,
              bag of cement, and ton of steel required for your build. We strip
              away the &quot;padding&quot; so you only pay for what actually
              goes into the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Total Transparency",
                desc: "Contractors bid against our rates. We set the price; they either meet it or lose the job.",
              },
              {
                icon: Crosshair,
                title: "Kill The Ghosts",
                desc: 'We calculate steel and concrete to the millimetre. No "estimated" bags. No "hidden" lorry loads.',
              },
              {
                icon: Lock,
                title: "Legal Lockdown",
                desc: "This BOQ is your legal shield. If the contractor deviates by even one bag, the burden of proof is on them, not your bank account.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-[#CFFF04]/50 hover:bg-zinc-900 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-zinc-600 group-hover:text-[#CFFF04] transition-colors mb-6" />
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-[#CFFF04] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Offer Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-zinc-900 border-2 border-zinc-800 rounded-2xl overflow-hidden mb-20 relative"
        >
          {/* Glowing accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CFFF04] to-transparent" />

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#CFFF04] animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
                The Foundation Audit
              </h2>
            </div>

            <p className="text-zinc-400 text-lg mb-10">
              We strip down your architectural and structural drawings to create
              a Private Market Benchmark. You will know exactly what your
              project should cost before you even look at a tender. Without an
              Eris BOQ, the contractor&apos;s quote is just a &quot;random
              number generator&quot; designed to drain you—stop buying the
              contractor a new Hilux using the &quot;extra&quot; 200 bags of
              cement billed for the substructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#CFFF04] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">
                      Timeline
                    </h4>
                    <p className="text-zinc-400">5–7 Business Days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileSpreadsheet className="w-6 h-6 text-[#CFFF04] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">
                      Deliverable
                    </h4>
                    <p className="text-zinc-400">
                      Ready-to-tender technical BOQ (Excel/PDF) & Private Market
                      Benchmark report.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CreditCard className="w-6 h-6 text-[#CFFF04] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">
                      The Security Deposit
                    </h4>
                    <p className="text-zinc-400">
                      KES 50,000 - 150,000 <br />
                      <span className="text-sm">
                        (Depending on project scale)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* The Risk Reversal Box */}
              <div className="bg-black border border-[#CFFF04]/30 rounded-xl p-6 relative overflow-hidden group hover:border-[#CFFF04] transition-colors">
                <div className="absolute top-0 right-0 bg-[#CFFF04] text-black text-[10px] font-black uppercase px-3 py-1 tracking-widest">
                  The Godfather Offer
                </div>
                <h4 className="text-xl font-black text-white uppercase mb-4 mt-2">
                  100% <span className="text-[#CFFF04]">Credited Back</span>
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  If you choose Eris Engineering to manage or audit the
                  subsequent build,{" "}
                  <strong className="text-white">
                    100% of this fee is credited back to your account.
                  </strong>
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-800 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#CFFF04] shrink-0" />
                  <p className="text-xs text-zinc-300 font-medium">
                    Your KES 50k - 150k payment is a Security Deposit for your
                    millions. This makes the Audit effectively FREE when you
                    move to the execution phase. You aren&apos;t spending money;
                    you are depositing it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex flex-col items-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-6 md:px-12 md:py-8 font-black text-black uppercase tracking-widest text-lg md:text-2xl bg-[#CFFF04] hover:bg-white transition-all duration-300 overflow-hidden rounded-none border-none outline-none cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              STOP THE BLEED: START AUDIT
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
          <p className="mt-6 text-zinc-500 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Target Turnaround: 24 Hours for Quote Issuance
          </p>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center relative z-10 bg-black">
        <p className="text-zinc-600 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Eris Engineering. All Rights Reserved.
        </p>
      </footer>

      {/* Embedded Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-950 border border-zinc-800 p-8 w-full max-w-md relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#CFFF04]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#CFFF04]" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white mb-2">
                    Target Acquired.
                  </h3>
                  <p className="text-zinc-400 font-medium">
                    We will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-black uppercase text-white mb-2 tracking-tight">
                      Initiate Audit
                    </h3>
                    <p className="text-sm text-zinc-400 font-medium">
                      Enter your details below to secure your project math.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#CFFF04] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#CFFF04] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#CFFF04] transition-colors"
                        placeholder="+254..."
                      />
                    </div>

                    {errorMessage && (
                      <div className="text-red-500 text-sm font-medium pt-2">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#CFFF04] text-black font-black uppercase tracking-widest py-4 mt-4 hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
