
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1683276123541-47f9cdbf1127?q=80&w=1587&auto=format&fit=crop",
    title: "Свисс вернулся!",
    subtitle: "новый состав"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1470&auto=format&fit=crop",
    title: "Донер Свисс",
    subtitle: "NEW"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615996003711-555bd5759a3d?q=80&w=1470&auto=format&fit=crop",
    title: "Донер Стартер",
    subtitle: "ВКУСНО"
  }
];

const PromoBanner = () => {
  return (
    <div className="mx-4 mb-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
              <div className="rounded-lg overflow-hidden aspect-[5/2] relative">
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center p-6 bg-gradient-to-r from-red-500/70 to-transparent">
                  <div className="text-white">
                    <p className="text-lg font-bold">{banner.title}</p>
                    <p className="text-sm">{banner.subtitle}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default PromoBanner;
