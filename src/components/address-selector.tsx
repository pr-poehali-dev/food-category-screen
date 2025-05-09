
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface DeliveryMethod {
  id: string;
  name: string;
  icon: string;
}

interface AddressSelectorProps {
  className?: string;
}

const deliveryMethods: DeliveryMethod[] = [
  { id: 'delivery', name: 'Доставка', icon: 'Truck' },
  { id: 'pickup', name: 'Самовывоз', icon: 'Store' }
];

export default function AddressSelector({ className }: AddressSelectorProps) {
  const [activeMethod, setActiveMethod] = useState<string>('delivery');
  const [address, setAddress] = useState<string>('улица Кулешова, 1Ак18');

  return (
    <Card className={cn("overflow-hidden border-none shadow-lg rounded-2xl", className)}>
      <div className="flex bg-gradient-to-r from-purple-500 to-pink-500 p-1">
        {deliveryMethods.map((method) => (
          <Button
            key={method.id}
            variant="ghost"
            className={cn(
              "flex-1 rounded-xl py-3 font-bold text-base gap-2 border-0 transition-all duration-300",
              activeMethod === method.id
                ? "bg-white text-primary shadow-md"
                : "text-white hover:bg-white/20"
            )}
            onClick={() => setActiveMethod(method.id)}
          >
            <Icon name={method.icon} className="h-5 w-5" />
            {method.name}
          </Button>
        ))}
      </div>
      
      {activeMethod === 'delivery' && (
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
            <Icon name="MapPin" className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-base font-bold">{address}</p>
            <p className="text-xs text-muted-foreground">Доставим за 30 минут 🚀</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-shrink-0 h-8 rounded-full border-purple-200 bg-white hover:bg-purple-50 px-3 gap-1 font-medium"
          >
            Изменить
            <Icon name="ChevronRight" className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}
