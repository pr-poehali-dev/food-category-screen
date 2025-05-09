
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pill } from "@/components/ui/pill";

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
        <div className="flex space-x-2 px-4">
          {categories.map((category) => (
            <Pill
              key={category.id}
              variant={selectedCategory === category.id ? "selected" : "default"}
              onClick={() => handleCategorySelect(category.id)}
              className="flex-shrink-0"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </Pill>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
