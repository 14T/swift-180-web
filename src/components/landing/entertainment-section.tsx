import { entertainmentItems } from '@/lib/constants';

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Premium Content & Local Insights</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Your In-Room Entertainment, Tailored for Travel</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From blockbuster movies to local cultural highlights, guests have access to a rich library of content that both entertains and informs their journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-8 py-12 md:grid-cols-4">
          {entertainmentItems.map((item) => (
            <div key={item.title} className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
