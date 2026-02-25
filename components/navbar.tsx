"use client";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Facebook } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "The Trap", href: "#problem" },
    { name: "The Protocol", href: "#protocol" },
    { name: "The Guarantee", href: "#guarantee" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
              </motion.div>
            </Button>
          </div>
          <div className="flex sm:hidden">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/eris-engineering-logo.svg"
                alt="Eris Engineering Logo"
                width={32}
                height={32}
                className="h-8 w-auto dark:hidden block"
              />
              <Image
                src="/eris-engineering-logo-dark.svg"
                alt="Eris Engineering Logo"
                width={32}
                height={32}
                className="h-8 w-auto hidden dark:block"
              />
              <span className="sr-only">Eris Engineering</span>
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/eris-engineering-logo.svg"
                alt="Eris Engineering Logo"
                width={40}
                height={40}
                className="h-10 w-auto dark:hidden block"
              />
              <Image
                src="/eris-engineering-logo-dark.svg"
                alt="Eris Engineering Logo"
                width={40}
                height={40}
                className="h-10 w-auto hidden dark:block"
              />
              <span className="sr-only">Eris Engineering</span>
            </Link>

            {menuItems.map((item) => (
              <Button key={item.name} asChild variant="ghost" size="sm">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden sm:flex hover:text-[#1877F2] hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
              size="sm"
            >
              <Link
                href="https://www.facebook.com/profile.php?id=61581890138497"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on <Facebook className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sm:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-2 mt-2"
                >
                  <Link
                    href="https://www.facebook.com/profile.php?id=61581890138497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-[#1877F2] rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connect on <Facebook className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
