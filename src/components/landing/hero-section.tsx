import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HERO_IMAGE_URL } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 text-white">
      <Image
        src={HERO_IMAGE_URL}
        alt="Traveler enjoying in-room entertainment"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="travel technology"
        priority
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Upgrade Your Stay.
          <br />
          <span className="text-secondary">Instantly.</span>
        </h1>
        <p className="max-w-2xl text-lg text-slate-200 sm:text-xl md:text-2xl">
          Swift180 transforms your hotel TV into a personalized 4K entertainment hub. Movies, games, local guides, and more—all at your fingertips.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#cta">Request a Demo</a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#transformation">How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
