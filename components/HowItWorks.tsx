"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Attach SETZ",
    description: "Magnetically mount SETZ onto your gym equipment.",
    image: "/images/HIW1.png",
  },
  {
    title: "Activate",
    description: "Tap the reset button to power up instantly.",
    image: "/images/HIW2.png",
  },
  {
    title: "Control & Track",
    description: "Track every set automatically — no distractions.",
    image: "/images/HIW3.png",
  },
];


export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 bg-black">
      <div className="max-w-6xl  mx-auto px-6 text-center">
        <h2 className="text-4xl text-white font-bold mb-14">How To Use</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-[#b7b5b2] w-full h-96 rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Text on Image (bottom aligned) */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#eae6e2]/95 via-[#eae6e2]/70 to-transparent px-6 py-6 text-left">
                <h3 className="text-2xl font-semibold text-black mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-black/80 leading-snug">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
