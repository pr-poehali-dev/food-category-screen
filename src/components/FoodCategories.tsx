
import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const categories = [
  { id: 1, name: "Комбо" },
  { id: 2, name: "Донеры" },
  { id: 3, name: "Картошка" },
  { id: 4, name: "Боксы" },
  { id: 5, name: "Напитки" },
  { id: 6, name: "Соусы" }
];

const FoodCategories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="mb-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex-shrink-0 rounded-full px-5 py-2 ${
                activeCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};

export default FoodCategories;
