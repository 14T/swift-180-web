import { Film, Gamepad2, Radio, Tv2 } from 'lucide-react';

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground font-medium">Premium Content</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Endless 4K Entertainment</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Give your guests access to a vast library of high-definition content. From blockbuster movies to the latest games, there's something for everyone.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-8 py-12 md:grid-cols-4">
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Film className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">Movies</h3>
            <p className="text-sm text-muted-foreground">Latest releases and timeless classics.</p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Tv2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">TV Shows</h3>
            <p className="text-sm text-muted-foreground">Binge-worthy series and popular shows.</p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Radio className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">Radio & Podcasts</h3>
            <p className="text-sm text-muted-foreground">Global stations and trending podcasts.</p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Gamepad2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold">Games</h3>
            <p className="text-sm text-muted-foreground">Casual games for all ages.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
