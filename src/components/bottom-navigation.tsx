
import React from 'react';
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: number;
}

interface BottomNavigationProps {
  items: NavItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
  className?: string;
}

export default function BottomNavigation({ 
  items, 
  activeItem, 
  onItemClick,
  className 
}: BottomNavigationProps) {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-t shadow-sm", className)}>
      <div className="container flex items-center justify-between px-4 pb-6 pt-2">
        {items.map((item) => (
          <NavButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            badge={item.badge}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </div>
      <div className="absolute -top-5 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-primary shadow-md flex items-center justify-center">
        <Icon name="ShoppingBag" className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="h-1 w-14 bg-black/70 mx-auto mb-1 rounded-full" />
    </div>
  );
}

interface NavButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  badge?: number;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, badge, onClick }: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "relative flex h-auto flex-col items-center gap-1 rounded-lg px-3 py-1",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Icon name={icon} className="h-5 w-5" />
        {badge !== undefined && badge > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {badge}
          </span>
        )}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
      
      {isActive && (
        <span className="absolute -bottom-0.5 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-primary" />
      )}
    </Button>
  );
}
