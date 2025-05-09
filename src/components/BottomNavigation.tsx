
import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('menu');
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 shadow-lg rounded-t-xl">
      <div className="flex items-center justify-around py-2 px-4">
        <NavButton 
          icon="Menu" 
          label="Меню" 
          isActive={activeTab === 'menu'} 
          onClick={() => setActiveTab('menu')} 
        />
        
        <NavButton 
          icon="User" 
          label="Профиль" 
          isActive={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
        />
        
        <NavButton 
          icon="ShoppingCart" 
          label="Корзина" 
          isActive={activeTab === 'cart'} 
          onClick={() => setActiveTab('cart')} 
          badge={3}
        />
      </div>
      
      {/* This is the bottom safe area / home indicator spacer */}
      <div className="h-1 w-[134px] bg-black/80 mx-auto mb-2 rounded-full" />
    </div>
  );
};

interface NavButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  badge?: number;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick, badge }) => {
  return (
    <button 
      className={`relative flex flex-col items-center py-2 px-6 rounded-xl transition-transform active:scale-95 ${
        isActive ? 'text-red-500' : 'text-gray-400'
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <Icon name={icon} size={24} />
        {badge && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            {badge}
          </span>
        )}
      </div>
      <span className={`text-xs mt-1 font-medium ${isActive ? 'text-red-500' : 'text-gray-500'}`}>
        {label}
      </span>
      
      {isActive && (
        <div 
          className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full transition-all duration-300" 
          style={{ transform: 'translateX(-50%)' }}
        />
      )}
    </button>
  );
};

export default BottomNavigation;
