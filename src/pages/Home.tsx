
import React, { useState } from 'react';
import AppHeader from '@/components/app-header';
import AddressSelector from '@/components/address-selector';
import PromoSlider from '@/components/promo-slider';
import CategoryFilter from '@/components/category-filter';
import { DishCard } from '@/components/ui/dish-card';
import BottomNavigation from '@/components/bottom-navigation';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Mock data
const promos = [
  {
    id: '1',
    title: 'СВИСС ИЗИ!',
    subtitle: 'Новый вкус! -30% до конца мая',
    image: 'https://images.unsplash.com/photo-1683276123541-47f9cdbf1127?q=80&w=1587&auto=format&fit=crop',
    gradientColor: 'bg-gradient-to-r from-pink-500/80 to-purple-500/80',
    badge: 'Limited'
  },
  {
    id: '2',
    title: 'ДОНЕР GANG',
    subtitle: 'Собери свою банду донеров',
    image: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1470&auto=format&fit=crop',
    gradientColor: 'bg-gradient-to-r from-orange-500/80 to-red-500/80',
    badge: 'Trending'
  },
  {
    id: '3',
    title: 'ФРИ VIBES',
    subtitle: 'Бери больше - плати меньше',
    image: 'https://images.unsplash.com/photo-1615996003711-555bd5759a3d?q=80&w=1470&auto=format&fit=crop',
    gradientColor: 'bg-gradient-to-r from-blue-500/80 to-cyan-500/80'
  }
];

const categories = [
  { id: 'combo', name: 'Комбо', icon: '🍱' },
  { id: 'doner', name: 'Донеры', icon: '🌯' },
  { id: 'fries', name: 'Фри', icon: '🍟' },
  { id: 'boxes', name: 'Боксы', icon: '📦' },
  { id: 'drinks', name: 'Напитки', icon: '🥤' },
  { id: 'sauces', name: 'Соусы', icon: '🧂' }
];

const dishes = [
  {
    id: '1',
    name: 'Комбо Чикен HYPE',
    description: 'Донер Чикен (400 гр), Картофель Фри, Кола 0.5',
    price: 14.00,
    oldPrice: 15.55,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1638431362735-687ebdce122e?q=80&w=1974&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '2',
    name: 'Комбо Бёрги FLEX',
    description: 'Донер Бёрги (400 гр), Картофель Фри, Кола 0.5',
    price: 15.00,
    oldPrice: 17.65,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1935&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Комбо Терияки VIBE',
    description: 'Донер Терияки (400 гр), Картофель Фри, Кола 0.5',
    price: 16.00,
    oldPrice: 18.80,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=1974&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '4',
    name: 'Комбо Стартер COOL',
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
    <div className="pb-24 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <AppHeader />
      
      <main className="container px-4 pt-20">
        <AddressSelector className="mb-6" />
        
        <PromoSlider promos={promos} className="mb-8" />
        
        <CategoryFilter 
          categories={categories} 
          onSelectCategory={setActiveCategory} 
          className="mb-6"
        />
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-gradient-party">Популярные комбо</h2>
            <Button 
              variant="ghost" 
              className="text-primary font-bold text-sm px-3 py-2 h-auto rounded-xl hover:bg-purple-100 flex items-center gap-1"
            >
              Показать все
              <Icon name="ArrowRight" size={16} />
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
        
        <div className="bg-gradient-party rounded-2xl p-5 mb-8 shadow-lg neon-shadow-purple">
          <h3 className="text-xl font-black text-white mb-2">🎁 Получи скидку 20%</h3>
          <p className="text-white/90 text-sm mb-3">Подпишись на наши обновления и получи приветственную скидку на первый заказ</p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-white text-primary font-bold flex-1">
              Подписаться
            </Button>
            <Button size="sm" variant="ghost" className="text-white border border-white/30 font-bold">
              Потом
            </Button>
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
