"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/images/usageBench.png", alt: "SETZ on Bench Press", label: "Bench Mode" },
  { src: "/images/usageCable.png", alt: "SETZ on Squat Rack", label: "Squat Mode" },
  { src: "/images/usageSquat.png", alt: "SETZ on Cable Machine", label: "Cable Mode" },
];

export default function UsageCarousel() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-none text-white" />
          <CarouselNext className="bg-white/10 hover:bg-white/20 border-none text-white" />
        </Carousel>
      </div>
    </section>
  );
}
