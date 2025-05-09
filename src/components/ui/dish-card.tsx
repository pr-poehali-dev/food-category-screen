
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

interface DishCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  description?: string
  price: number
  oldPrice?: number
  discount?: number
  image: string
  isNew?: boolean
  isPopular?: boolean
  isVegetarian?: boolean
  onAddToCart?: () => void
}

export function DishCard({
  name,
  description,
  price,
  oldPrice,
  discount,
  image,
  isNew,
  isPopular,
  isVegetarian,
  onAddToCart,
  className,
  ...props
}: DishCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-background shadow-sm transition-all duration-300 hover:shadow-md", 
        className
      )} 
      {...props}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {discount && discount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute left-3 top-3 px-2 py-1 text-xs font-bold"
          >
            -{discount}%
          </Badge>
        )}
        
        {isNew && !discount && (
          <Badge 
            variant="success" 
            className="absolute left-3 top-3 px-2 py-1 text-xs font-bold"
          >
            NEW
          </Badge>
        )}
        
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          {isPopular && (
            <div className="rounded-full bg-amber-500 p-2 text-white shadow-sm">
              <Icon name="Star" size={16} />
            </div>
          )}
          
          {isVegetarian && (
            <div className="rounded-full bg-emerald-500 p-2 text-white shadow-sm">
              <Icon name="Leaf" size={16} />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="line-clamp-1 text-lg font-bold">{name}</h3>
          {description && (
            <p className="line-clamp-2 mt-1 text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{price.toFixed(2)} руб</span>
            {oldPrice && oldPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                {oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            onClick={onAddToCart} 
            size="sm" 
            className="h-9 w-9 rounded-full p-0"
          >
            <Icon name="Plus" size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}
