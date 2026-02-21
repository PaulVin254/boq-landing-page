"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: TwitterLogoIcon,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: LinkedInLogoIcon,
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-black hover:text-zinc-600 transition-colors uppercase"
            >
              ERIS ENGINEERING
            </Link>
            <p className="text-sm text-zinc-500 font-medium">
              Recovering stolen capital for Kenya's elite developers.
            </p>
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-xs text-zinc-500 max-w-2xl mx-auto">
            <p>© {year} Eris Engineering. All rights reserved.</p>
            <p className="italic">
              If you steal this copy or design, we will look for you, we will
              find you, and we will sue you. Liam Neeson style 😅. Enjoy the
              rest of your {currentDay}.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
