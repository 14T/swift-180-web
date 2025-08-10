import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { TV_UI_IMAGE_URL } from '@/lib/constants';

export default function TvUiSection() {
  return (
    <section id="tv-ui" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Designed for the Traveler</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive TV interface is tailor-made for hotel rooms, providing seamless access to entertainment and local discovery, making every stay unforgettable.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <Image
                src={TV_UI_IMAGE_URL}
                alt="Swift180 TV UI"
                width={1200}
                height={675}
                className="aspect-video w-full object-cover"
                data-ai-hint="hotel television interface"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
