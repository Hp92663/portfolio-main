'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@/lib/utils';

const Select = SelectPrimitive.Root;

const SelectTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn('flex items-center px-3 py-2', className)} {...props} />
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export { Select, SelectTrigger };