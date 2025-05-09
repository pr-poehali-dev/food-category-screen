
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1683276123541-47f9cdbf1127?q=80&w=1587&auto=format&fit=crop",
    title: "Свисс вернулся!",
    subtitle: "новый состав",
    color: "from-red-600/80 to-red-500/30"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1470&auto=format&fit=crop",
    title: "Донер Свисс",
    subtitle: "NEW",
    color: "from-orange-600/80 to-orange-500/30"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615996003711-555bd5759a3d?q=80&w=1470&auto=format&fit=crop",
    title: "Донер Стартер",
    subtitle: "ВКУСНО",
    color: "from-blue-600/80 to-blue-500/30"
  }
];

const PromoBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="mx-4 mb-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onScrollEnd={(api) => {
          const slide = api.selectedScrollSnap();
          setCurrentIndex(slide);
        }}
      >
        <CarouselContent className="-ml-2">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
              <motion.div 
                className="rounded-xl overflow-hidden aspect-[5/2] relative shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 flex items-center p-6 bg-gradient-to-r ${banner.color}`}>
                  <div className="text-white">
                    <p className="text-xl font-bold">{banner.title}</p>
                    <p className="text-sm font-medium opacity-90 mt-1">{banner.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {banners.map((_, index) => (
          <div 
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-4 bg-red-500" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
