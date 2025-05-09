
import React from 'react';
import Icon from '@/components/ui/icon';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex items-center justify-around py-2">
        <button className="flex flex-col items-center text-blue-500 py-1 px-4">
          <Icon name="Menu" size={24} />
          <span className="text-xs mt-1">Меню</span>
        </button>
        
        <button className="flex flex-col items-center text-gray-400 py-1 px-4">
          <Icon name="User" size={24} />
          <span className="text-xs mt-1">Профиль</span>
        </button>
        
        <button className="flex flex-col items-center text-gray-400 py-1 px-4">
          <Icon name="ShoppingCart" size={24} />
          <span className="text-xs mt-1">Корзина</span>
        </button>
      </div>
      
      {/* This is the bottom safe area / home indicator spacer */}
      <div className="h-[5px] bg-black w-[30%] mx-auto rounded-full mb-1" />
    </div>
  );
};

export default BottomNavigation;
