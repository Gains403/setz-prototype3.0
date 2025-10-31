"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className={`
        relative w-full min-h-screen flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        transition-all duration-700
        md:bg-[url('/images/setzHeroD.png')]
        bg-[url('/images/setzHeroM.png')]
      `}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent md:from-black/0"></div>

      <div
        className="
          relative z-10 max-w-7xl mx-auto px-6 py-20
          flex flex-col-reverse md:flex-row items-center justify-between gap-10
        "
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Count Your Sets <br className="hidden md:block" />
            <span className="text-red-700">Without Distractions</span>
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-md mx-auto md:mx-0">
            SETZ helps you track your workout sets and avoid unnecessary
            conversations — focus purely on your progress.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full text-lg shadow-lg">
              Buy Now
            </Button>
            <a
              href="#features"
              className="text-red-700 font-medium hover:underline"
            >
              Learn more
            </a>
          </div>
        </motion.div>

        {/* Product Image (Drop-in Animation) */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <Image
            src="/images/setzProductH.png"
            alt="SETZ device"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
