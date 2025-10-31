"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/usageBench.png", alt: "SETZ on Bench Press", label: "Bench Mode" },
  { src: "/images/usageSquat.png", alt: "SETZ on Squat Rack", label: "Squat Mode" },
  { src: "/images/usageCable.png", alt: "SETZ on Cable Machine", label: "Cable Mode" },
];

export default function UsageCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [index, isPaused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: i === index ? 1 : 0,
                y: i === index ? 0 : -30,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority
              />

              {/* Bold large white label */}
              <div className="absolute bottom-6 left-6 text-white font-extrabold text-2xl md:text-4xl drop-shadow-lg">
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
