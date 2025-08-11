import { Star, Clock, UtensilsCrossed, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const differenceItems = [
    {
        icon: Star,
        title: "45% Increase",
        description: "in positive guest reviews mentioning in-room entertainment."
    },
    {
        icon: Clock,
        title: "3+ Hours",
        description: "average daily engagement per active room."
    },
    {
        icon: UtensilsCrossed,
        title: "20% Uplift",
        description: "in room service and ancillary orders via TV interface."
    },
    {
        icon: Zap,
        title: "5-Minute Setup",
        description: "is all it takes to install and activate a room."
    }
];

export default function DifferenceSection() {
  return (
    <section id="difference" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground font-medium">Proven Results</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">The Swift180 Difference</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our solution delivers measurable improvements to guest satisfaction and operational efficiency.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differenceItems.map((item) => (
             <Card key={item.title} className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
               <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-4xl font-bold text-primary">{item.title}</CardTitle>
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
