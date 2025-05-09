
import React from 'react';
import AppHeader from '@/components/AppHeader';
import DeliveryToggle from '@/components/DeliveryToggle';
import PromoBanner from '@/components/PromoBanner';
import FoodCategories from '@/components/FoodCategories';
import FoodCard from '@/components/FoodCard';
import BottomNavigation from '@/components/BottomNavigation';

const comboItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1638431362735-687ebdce122e?q=80&w=1974&auto=format&fit=crop",
    title: "Комбо Чикен",
    description: "Донер Чикен (400 гр), Картофель Фри, Кола 0.5",
    price: 14.00,
    discount: 10
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1935&auto=format&fit=crop",
    title: "Комбо Бёрги",
    description: "Донер Бёрги (400 гр), Картофель Фри, Кола 0.5",
    price: 15.00,
    discount: 15
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=1974&auto=format&fit=crop",
    title: "Комбо Терияки",
    description: "Донер Терияки (400 гр), Картофель Фри, Кола 0.5",
    price: 16.00,
    discount: 15
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1610970878459-a0e464d7592b?q=80&w=1924&auto=format&fit=crop",
    title: "Комбо Стартер",
    description: "Донер Стартер (400 гр), Картофель Фри, Кола 0.5",
    price: 13.50,
    discount: 15
  }
];

const Index = () => {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <AppHeader />
      <DeliveryToggle />
      <PromoBanner />
      
      <div className="mb-6">
        <FoodCategories />
        
        <div className="px-4 grid grid-cols-2 gap-4">
          {comboItems.map((item) => (
            <FoodCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
