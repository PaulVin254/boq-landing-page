"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Kamau",
      role: "Private Developer, Karen",
      avatar: "https://i.pravatar.cc/150?img=1",
      content:
        "I thought my PM was honest until Eris ran the numbers. They found 12 tons of phantom steel and KES 4.2M in inflated concrete rates before we even poured the foundation. The 20% bounty model is a no-brainer.",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Director, Commercial Real Estate",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "We were about to sign a KES 120M contract. Eris stepped in, cross-examined the structural drawings against the BOQ, and instantly shaved off KES 8.5M in 'contingency fat'. Absolutely ruthless efficiency.",
      rating: 5,
    },
    {
      name: "Grace Wanjiku",
      role: "Lead Investor, Kilimani Projects",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "The traditional consultants are a tax on your balance sheet. Eris operates like mercenaries. They only eat what they kill. They recovered KES 3.1M on our last apartment block.",
      rating: 5,
    },
    {
      name: "Hassan Omondi",
      role: "Managing Partner, Westlands",
      avatar: "https://i.pravatar.cc/150?img=15",
      content:
        "Their volumetric squeeze is terrifyingly accurate. They caught a KES 1.8M discrepancy in excavation depths that our own quantity surveyor missed. I don't build without them now.",
      rating: 5,
    },
    {
      name: "Sarah Njoroge",
      role: "Property Owner, Runda",
      avatar: "https://i.pravatar.cc/150?img=17",
      content:
        "I was skeptical at first, but the KES 500k guarantee removed all risk. Within 48 hours, they handed me a forensic report showing KES 2.4M in over-specs. Best ROI on any project.",
      rating: 5,
    },
    {
      name: "Kevin Mutua",
      role: "Director, Mutua Holdings",
      avatar: "https://i.pravatar.cc/150?img=19",
      content:
        "Contractors hate them. Developers need them. They stripped away the 'Mkubwa Tax' on our warehouse build and saved us exactly KES 5.2M. The math doesn't lie.",
      rating: 5,
    },
    {
      name: "Amina Mohamed",
      role: "Real Estate Syndicate Lead",
      avatar: "https://i.pravatar.cc/150?img=21",
      content:
        "We used to accept a 10-15% variance as 'the cost of doing business in Nairobi'. Eris proved that was a lie. They recovered KES 6M on our last commercial plaza.",
      rating: 5,
    },
    {
      name: "James Kariuki",
      role: "Private Investor, Lavington",
      avatar: "https://i.pravatar.cc/150?img=23",
      content:
        "The blueprint cross-examination is brilliant. They found out we were being billed for Y16 reinforcement when the structural engineer only called for Y12. Saved us millions.",
      rating: 5,
    },
    {
      name: "Elena Wambui",
      role: "CEO, Apex Developments",
      avatar: "https://i.pravatar.cc/150?img=25",
      content:
        "You aren't buying an audit; you are buying financial security. They stress-tested our unit rates against the actual market and killed a 25% hidden markup instantly.",
      rating: 5,
    },
    {
      name: "Michael Ochieng",
      role: "Head of Projects, Kileleshwa",
      avatar: "https://i.pravatar.cc/150?img=27",
      content:
        "Zero upfront fees. They found KES 4.8M in leakage, took their 20% bounty, and we kept the rest. It is the most aligned incentive structure in the Kenyan construction industry.",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CFFF04]/0 via-[#CFFF04]/20 to-[#CFFF04]/0 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-white uppercase">
            MILLIONS RECOVERED FOR{" "}
            <span className="text-[#CFFF04]">KENYAN DEVELOPERS.</span>
          </h2>
          <p className="mx-auto max-w-xl text-xl text-zinc-400 font-medium text-center">
            Don't take our word for it. Listen to the developers who stopped
            bleeding cash and started building with certainty.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="break-inside-avoid mb-8"
            >
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#CFFF04]/50 transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed text-sm font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#CFFF04]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#CFFF04] border border-[#CFFF04]/20">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#CFFF04] font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
