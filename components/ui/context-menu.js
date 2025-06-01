'use client';

import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '@/lib/utils';

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Content ref={ref} className={cn('rounded-md bg-white p-4', className)} {...props} />
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

export { ContextMenu, ContextMenuTrigger, ContextMenuContent };