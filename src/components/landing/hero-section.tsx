import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Traveler enjoying in-room entertainment"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
        data-ai-hint="travel technology"
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Upgrade Your Stay.
          <br />
          <span className="text-primary">Instantly.</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Swift180 transforms your hotel TV into a personalized 4K entertainment hub. Movies, games, local guides, and more—all at your fingertips.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#ai-discovery">Experience Swift180</a>
          </Button>
          <Button size="lg" variant="outline">
            How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
