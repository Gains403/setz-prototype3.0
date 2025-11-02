"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >

            
            <div className="flex items-center justify-center md:justify-start  mb-3">
              <Image
                src="/images/setzTestlogo2.png"   
                alt="SETZ Logo"
                width={80}
                height={60}
                className="object-contain"
              />
              <h2 className="text-3xl font-bold tracking-wide">SETZ</h2>
            </div>

            <p className="text-white/60 text-sm max-w-xs">
              Precision meets performance — redefining smart fitness design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 text-white/80 text-sm"
          >
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </motion.ul>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center md:justify-end gap-5"
          >
            <Link href="#" className="hover:text-white/70 transition"><Instagram /></Link>
            <Link href="#" className="hover:text-white/70 transition"><Twitter /></Link>
            <Link href="#" className="hover:text-white/70 transition"><Facebook /></Link>
            <Link href="#" className="hover:text-white/70 transition"><Youtube /></Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-white/50 text-xs"
        >
          © {new Date().getFullYear()} SETZ. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
