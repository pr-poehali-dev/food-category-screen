
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  price,
  oldPrice,
  discount
}) => {
  return (
    <div className="transition-all duration-300 hover:-translate-y-1">
      <Card className="overflow-hidden border-none rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-square object-cover"
          />
          {discount && (
            <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2.5 py-1 text-xs font-bold rounded-full shadow-sm">
              -{discount}%
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-1.5 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">{description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">{price.toFixed(2)}</span>
              {oldPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <Button className="bg-red-500 hover:bg-red-600 rounded-full px-4 shadow-sm font-medium transition-transform active:scale-95">
              Выбрать
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodCard;
