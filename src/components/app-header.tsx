
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
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-purple-300/20">
        <div className="container px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative rounded-full hover:bg-purple-100 active:scale-95 transition-all" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Icon name={isExpanded ? "X" : "Menu"} className="h-5 w-5 text-primary" />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white animate-pulse">
                4
              </span>
            </Button>
            <div className="flex items-center gap-1">
              <span className="text-xl font-extrabold text-gradient-party">HYPE</span>
              <span className="text-xl font-extrabold text-gradient-neon">FOOD</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="text-sm font-medium flex items-center gap-1 rounded-full border-purple-200 bg-purple-50/50 px-3 hover:bg-purple-100 transition-all"
            >
              <Icon name="MapPin" className="h-4 w-4 text-primary" />
              Минск
              <Icon name="ChevronDown" className="h-4 w-4 text-primary" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-purple-50 hover:bg-purple-100 active:scale-95 transition-all"
            >
              <Icon name="Search" className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>
      </header>
      
      {isExpanded && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsExpanded(false)}>
          <div 
            className="absolute left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-background p-4 shadow-lg animated-gradient-bg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4 bg-white/90 h-full rounded-xl backdrop-blur-sm p-4 shadow-inner">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="h-12 w-12 rounded-full bg-gradient-neon flex items-center justify-center">
                  <Icon name="User" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">HYPE Гость</p>
                  <Button variant="link" className="h-auto p-0 text-sm text-primary font-semibold">
                    Войти за скидос 🔥
                  </Button>
                </div>
              </div>
              
              <nav className="space-y-1.5">
                <MenuItem icon="Home" label="Главная" active />
                <MenuItem icon="Zap" label="Топ предложения" badge="HOT" />
                <MenuItem icon="Bell" label="Уведомления" badge="2" />
                <MenuItem icon="History" label="История заказов" />
                <MenuItem icon="Heart" label="Избранное" />
                <MenuItem icon="Settings" label="Настройки" />
              </nav>
              
              <div className="mt-auto">
                <div className="bg-gradient-party rounded-lg p-4 text-white shadow-lg">
                  <h3 className="font-bold text-lg">50% СКИДКА!</h3>
                  <p className="text-sm opacity-90 mb-2">Приведи друга и получи скидку на следующий заказ</p>
                  <Button size="sm" variant="secondary" className="w-full font-semibold">
                    Пригласить 👋
                  </Button>
                </div>
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
      variant={active ? "default" : "ghost"} 
      className={cn(
        "w-full justify-start font-semibold text-base",
        active ? "bg-primary neon-shadow-purple" : "hover:bg-purple-50"
      )}
    >
      <Icon name={icon} className="mr-2 h-5 w-5" />
      {label}
      {badge && (
        typeof badge === 'number' ? (
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
            {badge}
          </span>
        ) : (
          <span className="ml-auto bg-gradient-party text-[10px] font-bold text-white px-1.5 py-0.5 rounded">
            {badge}
          </span>
        )
      )}
    </Button>
  );
}
