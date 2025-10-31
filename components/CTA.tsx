"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/SetzCTA.jpg" 
          alt="SETZ background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Power Every Move with SETZ
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Stay charged. Stay connected. Experience the next level of smart fitness design.
        </p>

        <Link
          href="#"
          className="inline-block bg-white text-black font-semibold text-lg px-8 py-3 rounded-full hover:bg-white/90 transition"
        >
          Get Yours Now
        </Link>
      </motion.div>
    </section>
  );
}
