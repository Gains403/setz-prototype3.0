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
  { src: "/images/usageSquat.png", alt: "SETZ on Squat Rack", label: "Squat Mode" },
  { src: "/images/usageCable.png", alt: "SETZ on Cable Machine", label: "Cable Mode" },
];

export default function UsageCarousel() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [carouselApi, setCarouselApi] = React.useState<any>();

  // Track active slide index for dot indicators
  React.useEffect(() => {
    if (!carouselApi) return;

    setSelectedIndex(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <Carousel
          plugins={[autoplay.current]}
          opts={{
            loop: true, // ✅ looping scroll
            align: "start",
            duration: 0.7, // smoother movement
          }}
          setApi={setCarouselApi}
          className="w-full relative"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                {/* ✅ Fade transition */}
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl transition-opacity duration-700">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Label */}
                  <div className="absolute bottom-6 left-6 text-white font-extrabold text-2xl md:text-4xl drop-shadow-lg">
                    {img.label}
                  </div>

                  {/* Arrows inside the image */}
                  <CarouselPrevious
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                               bg-white/15 hover:bg-white/30 text-white 
                               border-none w-10 h-10 rounded-full backdrop-blur-sm"
                  />
                  <CarouselNext
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                               bg-white/15 hover:bg-white/30 text-white 
                               border-none w-10 h-10 rounded-full backdrop-blur-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* ✅ Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => carouselApi?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all 
              ${selectedIndex === i ? "bg-white scale-125" : "bg-white/40"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
