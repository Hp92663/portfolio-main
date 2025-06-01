'use client';

import * as React from 'react';
import { OTPInput } from 'input-otp';
import { cn } from '@/lib/utils';

const InputOTP = React.forwardRef(({ className, ...props }, ref) => (
  <OTPInput ref={ref} className={cn('flex items-center gap-2', className)} {...props} />
));
InputOTP.displayName = 'InputOTP';

export { InputOTP };