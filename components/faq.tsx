"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title:
        "My QS and Project Manager already approved this BOQ. Why do I need Eris?",
      content: (
        <div className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white">The Conflict of Interest.</strong>{" "}
          Traditional PMs and QSs often charge a percentage of the total project
          cost. If the cost goes down, their pay goes down. We are mercenaries.
          We only get paid when the cost drops. Our incentives are 100% aligned
          with your wallet, not the contractor&apos;s.
        </div>
      ),
    },
    {
      title: "Will this forensic audit delay my construction timeline?",
      content: (
        <div className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white">Zero delays.</strong> We guarantee a
          48-hour turnaround for the preliminary scan. We work in the shadows
          while your site prep continues. You don&apos;t pause a single
          excavator while we hunt for your missing millions.
        </div>
      ),
    },
    {
      title: "What if you audit my BOQ and find absolutely nothing wrong?",
      content: (
        <div className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white">The Godfather Offer.</strong> If we
          don&apos;t find at least KES 500,000 in leakage, you pay KES 0. You
          get a clean bill of health for free. You literally cannot lose money
          by handing us your BOQ.
        </div>
      ),
    },
    {
      title: "Will this ruin my relationship with my contractor?",
      content: (
        <div className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white">
            We are the bad guys so you don&apos;t have to be.
          </strong>{" "}
          We don&apos;t argue; we just present undeniable mathematical proof.
          You hand them the revised numbers and blame &quot;the auditors.&quot;
          It keeps your hands clean while saving your capital.
        </div>
      ),
    },
    {
      title: "How exactly does the 20% Recovery Bounty work?",
      content: (
        <div className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white">Pure performance.</strong> If we find
          KES 5,000,000 in phantom steel or inflated concrete rates, you keep
          KES 4,000,000. We invoice for KES 1,000,000. No retainers. No hourly
          fees. We only eat what we kill.
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-black py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CFFF04]/0 via-[#CFFF04]/20 to-[#CFFF04]/0 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0 }}
        className="relative max-w-4xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center z-10"
      >
        <div className="flex flex-col gap-4 justify-center items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">
            FINAL BRIEFING: <br className="hidden md:block" />
            <span className="text-[#CFFF04]">YOUR OBJECTIONS, DESTROYED.</span>
          </h2>
          <p className="max-w-2xl text-xl text-zinc-400 font-medium">
            If you are still hesitating, it&apos;s because of one of these five
            reasons. Let&apos;s address them directly.
          </p>
        </div>
        <div className="flex w-full max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-zinc-800 last:border-b last:border-b-zinc-800 bg-zinc-900/50 px-6 rounded-xl data-[state=open]:border-[#CFFF04]/50 data-[state=open]:last:border-b-[#CFFF04]/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-white font-bold text-lg md:text-xl hover:text-[#CFFF04] data-[state=open]:text-[#CFFF04] hover:no-underline py-6 [&>svg]:text-[#CFFF04]">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}
