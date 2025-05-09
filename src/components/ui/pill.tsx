
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pillVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/5 text-primary hover:bg-primary/10",
        selected: "border-transparent bg-primary text-primary-foreground shadow-sm",
        outline: "border-border text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface PillProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLButtonElement, PillProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(pillVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Pill.displayName = "Pill"

export { Pill, pillVariants }
