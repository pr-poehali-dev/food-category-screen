
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface DeliveryMethod {
  id: string;
  name: string;
}

interface AddressSelectorProps {
  className?: string;
}

const deliveryMethods: DeliveryMethod[] = [
  { id: 'delivery', name: 'Доставка' },
  { id: 'pickup', name: 'Самовывоз' }
];

export default function AddressSelector({ className }: AddressSelectorProps) {
  const [activeMethod, setActiveMethod] = useState<string>('delivery');
  const [address, setAddress] = useState<string>('улица Кулешова, 1Ак18');

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex">
        {deliveryMethods.map((method) => (
          <Button
            key={method.id}
            variant="ghost"
            className={cn(
              "flex-1 rounded-none border-b-2 py-3 font-medium transition-all",
              activeMethod === method.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setActiveMethod(method.id)}
          >
            {method.name}
          </Button>
        ))}
      </div>
      
      {activeMethod === 'delivery' && (
        <div className="flex items-center gap-3 p-3 bg-accent/30">
          <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
            <Icon name="MapPin" className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{address}</p>
          </div>
          <Button variant="ghost" size="sm" className="flex-shrink-0 h-8 w-8 rounded-full p-0">
            <Icon name="ChevronRight" className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}
