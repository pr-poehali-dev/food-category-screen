
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Promo {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  gradientColor: string;
  badge?: string;
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
              <Card 
                className="overflow-hidden border-none shadow-lg h-full rounded-3xl group transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 flex items-center p-6",
                      promo.gradientColor
                    )}
                  >
                    <div className="text-white z-10">
                      <div className="mb-2">
                        {promo.badge && (
                          <Badge variant="hot" className="mb-2 uppercase font-bold">
                            {promo.badge}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-black">{promo.title}</h3>
                      <p className="mt-1 font-medium opacity-90">{promo.subtitle}</p>
                    </div>
                    
                    {/* Декоративные элементы */}
                    <div className="absolute -right-10 -top-10 h-36 w-36 bg-white/20 blur-3xl rounded-full" />
                    <div className="absolute -bottom-10 -left-10 h-36 w-36 bg-black/20 blur-3xl rounded-full" />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="mt-4 flex justify-center gap-2">
        {promos.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === current 
                ? "w-8 bg-gradient-party" 
                : "w-2 bg-purple-200"
            )}
          />
        ))}
      </div>
    </div>
  );
}
