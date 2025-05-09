
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

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
    <Card className="overflow-hidden border-none shadow-sm">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-square object-cover"
        />
        {discount && (
          <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded">
            - {discount}%
          </div>
        )}
      </div>
      
      <CardContent className="p-3">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0">
        <Button className="w-full bg-red-500 hover:bg-red-600">
          Выбрать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
