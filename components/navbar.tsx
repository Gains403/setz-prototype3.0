"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll state for blur bg on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mr-0 ">
            <Image
              src="/images/setzTestlogo2.png"
              alt="SETZ"
              width={80}
              height={60}
              className="object-cover self-center rounded-full "
            />
            <span className="text-xl font-semibold text-slate-900">
              SETZ
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-slate-800 font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-red-700 transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full shadow-md">
              Buy Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-md text-slate-900 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white/95 shadow-xl border-l border-gray-200"
            >
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/setzTestlogo2.png"
                    alt="SetCount"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="text-lg font-semibold text-slate-900">
                    SETZ
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-slate-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="px-6 py-2">
                <ul className="flex flex-col gap-4 mt-4">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-medium text-slate-900 py-2 hover:text-red-700 transition"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 px-0">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg"
                  >
                    Buy Now
                  </Button>

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 block text-center text-sm text-slate-600 hover:text-slate-800"
                  >
                    Contact sales
                  </a>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-6 px-0 text-sm text-slate-600">
                  <p>© {new Date().getFullYear()} SETZ</p>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
