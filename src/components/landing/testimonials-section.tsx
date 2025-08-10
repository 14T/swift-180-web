import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Swift180 has been a game-changer for our guest satisfaction scores. The setup was incredibly simple, and our guests love the personalized entertainment options.",
    name: "Maria Rodriguez",
    title: "General Manager, The Grand Hotel",
    avatar: "MR",
    image: "https://placehold.co/100x100.png"
  },
  {
    quote: "As a frequent traveler, I'm always disappointed by hotel TVs. Swift180 was a breath of fresh air. The AI recommendations for local restaurants were spot on!",
    name: "David Chen",
    title: "Business Traveler",
    avatar: "DC",
    image: "https://placehold.co/100x100.png"
  },
  {
    quote: "The ability to access my own Netflix and Prime accounts seamlessly made my stay feel so much more like home. A fantastic and much-needed innovation for hotels.",
    name: "Emily White",
    title: "Leisure Traveler",
    avatar: "EW",
    image: "https://placehold.co/100x100.png"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Loved by Hotels and Guests Alike</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what people are saying about their Swift180 experience.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="flex-grow pt-6">
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-lg font-semibold leading-snug">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
