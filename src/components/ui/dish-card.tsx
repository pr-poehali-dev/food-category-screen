
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-background border-none shadow-lg", 
        className
      )} 
      {...props}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {discount && discount > 0 && (
          <Badge 
            variant="hot" 
            className="absolute left-3 top-3 px-3 py-1 text-xs font-bold shadow-lg z-10"
          >
            -{discount}%
          </Badge>
        )}
        
        {isNew && !discount && (
          <Badge 
            variant="new" 
            className="absolute left-3 top-3 px-3 py-1 text-xs font-bold shadow-lg z-10"
          >
            NEW
          </Badge>
        )}
        
        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
          {isPopular && (
            <div className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 p-2 text-white shadow-lg">
              <Icon name="Flame" size={16} />
            </div>
          )}
          
          {isVegetarian && (
            <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2 text-white shadow-lg">
              <Icon name="Leaf" size={16} />
            </div>
          )}
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-xl font-extrabold leading-tight line-clamp-1">{name}</h3>
          {description && (
            <p className="line-clamp-2 mt-1 text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-gradient-party">{price.toFixed(2)}</span>
            {oldPrice && oldPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                {oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            onClick={onAddToCart} 
            size="sm" 
            className="h-10 w-10 rounded-full bg-gradient-party p-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Icon name="Plus" size={20} />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
