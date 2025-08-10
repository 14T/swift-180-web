import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section id="cta" className="relative w-full overflow-hidden bg-primary/90 py-20 text-primary-foreground md:py-32">
       <Image
        src="https://placehold.co/1920x400.png"
        alt="Abstract background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
        data-ai-hint="abstract texture"
      />
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Ready to Revolutionize Your Guest Experience?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Join the growing number of hotels delighting their guests with Swift180. Get in touch with our team today to schedule a demo and learn how we can tailor a solution for you.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
