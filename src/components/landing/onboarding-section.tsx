import { Plug, Tv, Wifi } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function OnboardingSection() {
  return (
    <section id="onboarding" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Effortless Onboarding</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Getting started with Swift180 is as easy as 1-2-3. No technicians, no downtime, just instant entertainment.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Plug className="h-6 w-6" />
              </div>
              <CardTitle>1. Plug In</CardTitle>
              <CardDescription>Connect the SwiftStick™ to the TV's HDMI port.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Wifi className="h-6 w-6" />
              </div>
              <CardTitle>2. Connect</CardTitle>
              <CardDescription>Connect the device to your hotel's Wi-Fi network.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Tv className="h-6 w-6" />
              </div>
              <CardTitle>3. Enjoy</CardTitle>
              <CardDescription>Guests can now enjoy a world of entertainment.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
