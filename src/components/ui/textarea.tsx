import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'placeholder:font-text font-text border-customGray-100 text-customGray-400 aceholder:text-customGray-200 flex min-h-[60px] w-full resize-none border-b bg-transparent px-3 py-2 pl-0 text-base placeholder:text-base placeholder:font-normal placeholder:leading-[1.2] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
