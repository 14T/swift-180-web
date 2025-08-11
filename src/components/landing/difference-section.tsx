import { Tv2, Sparkles, Building, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const featureItems = [
    {
        icon: Palette,
        title: "Fully Personalized Experience",
        description: "From a personalized welcome message to a UI themed for their stay (e.g., Honeymoon, Business), guests feel uniquely catered to."
    },
    {
        icon: Sparkles,
        title: "AI-Powered Local Discovery",
        description: "Our AI curates nearby attractions, dining, and tours, turning the TV into a personal concierge for an authentic local experience."
    },
    {
        icon: Building,
        title: "Seamless Hotel Integration",
        description: "Access room service menus, view hotel promotions, and get important Wi-Fi info directly from the screen for ultimate convenience."
    },
    {
        icon: Tv2,
        title: "Ultimate Entertainment Hub",
        description: "Guests get 4K streaming with all their favorite apps like Netflix and Prime, plus games, music, and the latest movies on demand."
    }
];

export default function DifferenceSection() {
  return (
    <section id="difference" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Your All-in-One Travel Companion</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">More Than a TV. It's an Experience.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Swift180 integrates entertainment, personalization, and hotel services into one seamless interface, creating an unforgettable stay for every guest.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map((item) => (
             <Card key={item.title} className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
               <CardHeader className="flex-grow">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-8 w-8" />
                </div>
                <CardTitle>{item.title}</CardTitle>
               </CardHeader>
               <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
