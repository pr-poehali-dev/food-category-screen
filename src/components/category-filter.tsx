
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryFilterProps {
  categories: Category[];
  onSelectCategory: (id: string) => void;
  className?: string;
}

export default function CategoryFilter({ 
  categories, 
  onSelectCategory,
  className 
}: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.id);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    onSelectCategory(id);
  };

  return (
    <div className={className}>
      <ScrollArea className="pb-4 w-full">
        <div className="flex space-x-3 px-4">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onClick={() => handleCategorySelect(category.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

interface CategoryButtonProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

function CategoryButton({ category, isSelected, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95",
        isSelected 
          ? "bg-gradient-party text-white shadow-lg neon-shadow-purple" 
          : "bg-purple-50 text-gray-700 hover:bg-purple-100"
      )}
    >
      <span className="text-2xl">{category.icon}</span>
      <span className={cn(
        "text-sm font-bold",
        isSelected ? "text-white" : "text-gray-700"
      )}>
        {category.name}
      </span>
    </button>
  );
}
