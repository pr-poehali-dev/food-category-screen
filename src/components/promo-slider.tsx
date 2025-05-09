
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Promo {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  gradientColor: string;
}

interface PromoSliderProps {
  promos: Promo[];
  className?: string;
}

export default function PromoSlider({ promos, className }: PromoSliderProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={className}>
      <Carousel
        opts={{ loop: true }}
        className="w-full"
        onSelect={(api) => {
          setCurrent(api.selectedScrollSnap());
        }}
      >
        <CarouselContent className="-ml-4">
          {promos.map((promo) => (
            <CarouselItem key={promo.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden border-none h-full">
                <div className="relative aspect-[16/7] overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="h-full w-full object-cover"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 flex items-center p-6",
                      promo.gradientColor
                    )}
                  >
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{promo.title}</h3>
                      <p className="mt-1 text-sm font-medium opacity-90">{promo.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="mt-3 flex justify-center gap-1.5">
        {promos.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === current 
                ? "w-4 bg-primary" 
                : "w-1.5 bg-primary/25"
            )}
          />
        ))}
      </div>
    </div>
  );
}
