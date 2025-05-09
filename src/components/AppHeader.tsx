
import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="relative p-1.5 rounded-full hover:bg-gray-100">
          <Icon name="Menu" className="text-gray-800" size={22} />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            4
          </span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex items-center gap-1.5 font-semibold text-lg py-1.5 px-3 rounded-full hover:bg-gray-100"
        >
          Минск
          <Icon name="ChevronDown" className="text-gray-500" size={18} />
        </Button>
        
        <Button variant="ghost" className="p-1.5 rounded-full hover:bg-gray-100">
          <Icon name="Search" className="text-gray-800" size={22} />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
