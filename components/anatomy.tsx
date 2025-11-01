"use client";

import Image from "next/image";

export default function AnatomySection() {
  return (
    <section
      id="features"
      className="relative w-full bg-gray-50 flex items-center justify-center py-16 px-6 md:py-28"
    >
      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">
            SETZ Key Features
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Every detail of SETZ engineered for your workout focus.
          </p>
        </div>

        {/* Desktop Anatomy Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/images/AnatomyCanvaDesktop2.png"
            alt="SETZ Anatomy Desktop"
            width={1200}
            height={800}
            priority
            className="mx-auto w-full max-w-5xl object-contain"
          />
        </div>

        {/* Mobile Anatomy Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/images/AnatomyCanvaMobile.png"
            alt="SETZ Anatomy Mobile"
            width={800}
            height={1200}
            priority
            className="mx-auto w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}
