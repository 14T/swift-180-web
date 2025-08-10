import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Bluetooth } from 'lucide-react';

export default function TransformationSection() {
  return (
    <section id="transformation" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground font-medium">
            Seamless Integration
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            From Standard TV to Smart Hub
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Swift180 turns any hotel TV into a powerful entertainment system. Our simple, plug-and-play solution requires no complex installation, offering an instant upgrade to the guest experience.
          </p>
          <div className="grid gap-4 pt-4">
             <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">The SwiftStick™</h3>
                <p className="text-muted-foreground">A compact, powerful streaming stick that plugs directly into the TV's HDMI port.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Bluetooth className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">The SwiftRemote™</h3>
                <p className="text-muted-foreground">An intuitive Bluetooth remote for effortless navigation and control.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Swift180 Streaming Stick"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            data-ai-hint="streaming stick"
          />
          <Image
            src="https://placehold.co/600x400.png"
            alt="Swift180 Bluetooth Remote"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            data-ai-hint="bluetooth remote"
          />
        </div>
      </div>
    </section>
  );
}
