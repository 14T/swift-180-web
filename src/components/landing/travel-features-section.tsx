import Image from 'next/image';
import { travelFeatures, TRAVEL_FEATURES_IMAGE_URL } from '@/lib/constants';

export default function TravelFeaturesSection() {
  return (
    <section id="travel-features" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
         <div className="relative">
          <Image
            src={TRAVEL_FEATURES_IMAGE_URL}
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
            {travelFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
