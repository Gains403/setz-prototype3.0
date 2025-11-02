"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/images/usageBench.png", alt: "SETZ on Bench Press", label: "Bench Mode" },
  { src: "/images/squatRack.png", alt: "SETZ on Squat Rack", label: "Squat Mode" },
  { src: "/images/BenchPress.png", alt: "SETZ on Cable Machine", label: "Cable Mode" },
];

export default function UsageCarousel() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [api, setApi] = React.useState<any>();

  // Track which slide is active (for dots)
  React.useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* ✅ Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          setApi={setApi}
          className="w-full relative"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />

                  {/* Label */}
                  <div className="absolute bottom-6 left-6 text-white font-extrabold text-2xl md:text-4xl drop-shadow-lg">
                    {img.label}
                  </div>

                  {/* Arrows (stay inside image, show on mobile) */}
                  <CarouselPrevious
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                               bg-white/10 hover:bg-white/20 border-none
                               text-white w-10 h-10 rounded-full backdrop-blur-sm"
                  />
                  <CarouselNext
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                               bg-white/10 hover:bg-white/20 border-none
                               text-white w-10 h-10 rounded-full backdrop-blur-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* ✅ Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === selectedIndex ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
