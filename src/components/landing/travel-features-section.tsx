import { MapPin, Ticket, UtensilsCrossed, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export default function TravelFeaturesSection() {
  return (
    <section id="travel-features" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
         <div className="relative">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Traveler exploring a city"
            width={600}
            height={600}
            className="mx-auto rounded-xl object-cover shadow-xl"
            data-ai-hint="travel city"
          />
         </div>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary-foreground">
            Guest Experience
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            More Than a TV, It's a Tour Guide
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Swift180 enhances the entire travel experience by providing guests with curated information about their surroundings, all powered by our intelligent AI.
          </p>
          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Nearby Attractions</h3>
                <p className="text-muted-foreground">Discover local gems and must-see sights.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Ticket className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Book Tours</h3>
                <p className="text-muted-foreground">Find and book exciting local tours and activities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dining Options</h3>
                <p className="text-muted-foreground">Explore top-rated restaurants and cafes.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Hotel Services</h3>
                <p className="text-muted-foreground">Order room service or view hotel promotions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
