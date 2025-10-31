"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SETZ?",
    answer:
      "SETZ is a compact smart charging module designed to keep your fitness devices powered and organized, whether at home or in the gym.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "SETZ offers up to 30 hours of continuous use per charge, depending on connected devices and usage intensity.",
  },
  {
    question: "Is SETZ water or sweat resistant?",
    answer:
      "Yes — SETZ is built with a durable, sweat-resistant finish ideal for gym environments.",
  },
  {
    question: "Does it work with all gym equipment?",
    answer:
      "SETZ can be used with most standard gym setups including bench press stations, squat racks, and cable machines.",
  },
  {
    question: "How do I charge SETZ?",
    answer:
      "You can charge SETZ via USB-C using any standard wall adapter. A full charge typically takes under 2 hours.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="w-full bg-[#f3f2f0] py-20 text-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(i)}
              >
                <span className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
