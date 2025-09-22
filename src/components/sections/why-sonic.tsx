import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function WhySonic() {
  return (
    <section className="relative flex min-h-[420px] w-full items-center md:min-h-[512px] 2xl:min-h-[700px]">
      <div className="absolute inset-0">
        <img
          src="/images/products/product-5.webp"
          alt="Sonic Product"
          className="size-full object-cover"
        />
      </div>
      <div className="from-base-dark absolute inset-0 bg-linear-to-r to-transparent" />
      <div className="relative z-10 container">
        <h2 className="text-background text-5xl font-bold md:text-6xl">
          Why Sonic?
        </h2>
        <p className="text-background mt-4 mb-8 max-w-2xl text-xl">
          Every Sonic speaker is engineered for real life—compact yet bold,
          tough yet refined. Whether you're deep in a busy city or off the grid,
          Sonic delivers consistent, high-quality audio in a sleek form you'll
          love to show off.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="group rounded-full"
          asChild
        >
          <a href="/pricing">
            Buy now
            <ChevronRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
