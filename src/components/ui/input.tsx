import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'placeholder:font-text font-text border-customGray-100 text-customGray-400 file:text-foreground placeholder:text-customGray-200 flex h-12 w-full border-b bg-transparent px-3 py-2 text-base outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-base placeholder:font-normal placeholder:leading-[1.2] disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
