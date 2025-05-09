
import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: "Комбо", icon: "🍱" },
  { id: 2, name: "Донеры", icon: "🌯" },
  { id: 3, name: "Картошка", icon: "🍟" },
  { id: 4, name: "Боксы", icon: "📦" },
  { id: 5, name: "Напитки", icon: "🥤" },
  { id: 6, name: "Соусы", icon: "🧂" }
];

const FoodCategories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 px-4">Категории</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-3 px-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center gap-2 flex-shrink-0 rounded-full px-5 py-2.5 font-medium border transition-all ${
                activeCategory === category.id
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileTap={{ scale: 0.95 }}
              whileHover={activeCategory !== category.id ? { y: -2 } : {}}
            >
              <span className="text-base">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};

export default FoodCategories;
