
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  className?: string;
}

export default function AppHeader({ className }: AppHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("relative z-50", className)}>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative rounded-full" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Icon name={isExpanded ? "X" : "Menu"} className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                4
              </span>
            </Button>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold">FOOD</span>
              <span className="text-xl font-bold text-primary">EXPRESS</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="text-sm font-medium flex items-center gap-1 rounded-full border-none bg-accent/50 px-3"
            >
              <Icon name="MapPin" className="h-4 w-4 text-primary" />
              Минск
              <Icon name="ChevronDown" className="h-4 w-4 text-muted-foreground" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {isExpanded && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsExpanded(false)}>
          <div className="absolute left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-background p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Гость</p>
                  <Button variant="link" className="h-auto p-0 text-xs text-primary">
                    Войти в аккаунт
                  </Button>
                </div>
              </div>
              
              <nav className="space-y-1">
                <MenuItem icon="Home" label="Главная" active />
                <MenuItem icon="Gift" label="Акции и предложения" />
                <MenuItem icon="Bell" label="Уведомления" badge="2" />
                <MenuItem icon="Clock" label="История заказов" />
                <MenuItem icon="Heart" label="Избранное" />
                <MenuItem icon="Settings" label="Настройки" />
              </nav>
              
              <div className="mt-auto border-t pt-4">
                <MenuItem icon="HelpCircle" label="Поддержка" />
                <MenuItem icon="Info" label="О приложении" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface MenuItemProps {
  icon: string;
  label: string;
  badge?: string;
  active?: boolean;
}

function MenuItem({ icon, label, badge, active }: MenuItemProps) {
  return (
    <Button 
      variant={active ? "secondary" : "ghost"} 
      className="w-full justify-start font-normal"
    >
      <Icon name={icon} className="mr-2 h-5 w-5" />
      {label}
      {badge && (
        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
          {badge}
        </span>
      )}
    </Button>
  );
}
