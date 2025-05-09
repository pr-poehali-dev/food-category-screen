
import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="p-1">
          <Icon name="Menu" size={24} />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            4
          </span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex items-center gap-1 font-medium text-lg"
        >
          Минск
          <Icon name="ChevronDown" size={20} />
        </Button>
        
        <Button variant="ghost" className="p-1">
          <Icon name="Search" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
