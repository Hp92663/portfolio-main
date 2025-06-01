'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Carousel = React.forwardRef(({ opts, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);

  return (
    <div ref={carouselRef} className={cn('relative', className)} {...props}>
      {children}
    </div>
  );
});
Carousel.displayName = 'Carousel';

export { Carousel };