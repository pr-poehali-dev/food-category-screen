
import React, { useState } from 'react';
import AppHeader from '@/components/app-header';
import AddressSelector from '@/components/address-selector';
import PromoSlider from '@/components/promo-slider';
import CategoryFilter from '@/components/category-filter';
import { DishCard } from '@/components/ui/dish-card';
import BottomNavigation from '@/components/bottom-navigation';
import { Button } from '@/components/ui/button';

// Mock data
const promos = [
  {
    id: '1',
    title: 'Свисс вернулся!',
    subtitle: 'новый состав',
    image: 'https://images.unsplash.com/photo-1683276123541-47f9cdbf1127?q=80&w=1587&auto=format&fit=crop',
    gradientColor: 'bg-gradient-to-r from-rose-600/80 to-rose-500/30'
  },
  {
    id: '2',
    title: 'Донер Свисс',
    subtitle: 'NEW',
    image: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1470&auto=format&fit=crop',
    gradientColor: 'bg-gradient-to-r from-amber-600/80 to-amber-500/30'
  },
  {
    id: '3',
    title: 'Донер Стартер',
    subtitle: 'ВКУСНО',
    image: 'https://images.unsplash.com/photo-1615996003711-555bd5759a3d?q=80&w=1470&auto=format&fit=crop',
    gradientColor: 'bg-gradient-to-r from-blue-600/80 to-blue-500/30'
  }
];

const categories = [
  { id: 'combo', name: 'Комбо', icon: '🍱' },
  { id: 'doner', name: 'Донеры', icon: '🌯' },
  { id: 'fries', name: 'Картошка', icon: '🍟' },
  { id: 'boxes', name: 'Боксы', icon: '📦' },
  { id: 'drinks', name: 'Напитки', icon: '🥤' },
  { id: 'sauces', name: 'Соусы', icon: '🧂' }
];

const dishes = [
  {
    id: '1',
    name: 'Комбо Чикен',
    description: 'Донер Чикен (400 гр), Картофель Фри, Кола 0.5',
    price: 14.00,
    oldPrice: 15.55,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1638431362735-687ebdce122e?q=80&w=1974&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '2',
    name: 'Комбо Бёрги',
    description: 'Донер Бёрги (400 гр), Картофель Фри, Кола 0.5',
    price: 15.00,
    oldPrice: 17.65,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1935&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Комбо Терияки',
    description: 'Донер Терияки (400 гр), Картофель Фри, Кола 0.5',
    price: 16.00,
    oldPrice: 18.80,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=1974&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '4',
    name: 'Комбо Стартер',
    description: 'Донер Стартер (400 гр), Картофель Фри, Кола 0.5',
    price: 13.50,
    oldPrice: 15.90,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?q=80&w=1924&auto=format&fit=crop',
    isVegetarian: true
  }
];

const navItems = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'search', label: 'Поиск', icon: 'Search' },
  { id: 'cart', label: 'Корзина', icon: 'ShoppingCart', badge: 3 },
  { id: 'profile', label: 'Профиль', icon: 'User' }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeNavItem, setActiveNavItem] = useState('home');

  return (
    <div className="pb-24 bg-background min-h-screen">
      <AppHeader />
      
      <main className="container px-4 pt-20">
        <AddressSelector className="mb-4" />
        
        <PromoSlider promos={promos} className="mb-8" />
        
        <CategoryFilter 
          categories={categories} 
          onSelectCategory={setActiveCategory} 
          className="mb-4"
        />
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">Популярные комбо</h2>
            <Button variant="ghost" className="text-primary font-medium text-sm px-2 py-1 h-auto">
              Показать все
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                oldPrice={dish.oldPrice}
                discount={dish.discount}
                image={dish.image}
                isNew={dish.isNew}
                isPopular={dish.isPopular}
                isVegetarian={dish.isVegetarian}
                onAddToCart={() => console.log(`Added ${dish.name} to cart`)}
              />
            ))}
          </div>
        </div>
      </main>
      
      <BottomNavigation
        items={navItems}
        activeItem={activeNavItem}
        onItemClick={setActiveNavItem}
      />
    </div>
  );
}
