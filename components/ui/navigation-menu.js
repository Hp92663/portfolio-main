'use client';

import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenu = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={cn('flex items-center', className)} {...props} />
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export { NavigationMenu };