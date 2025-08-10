"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getPersonalizedRecommendationsAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Sparkles, MapPin, Hotel, List, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  location: z.string().min(2, { message: 'Location must be at least 2 characters.' }),
  hotel: z.string().min(2, { message: 'Hotel name must be at least 2 characters.' }),
  interests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiDiscoverySection() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: 'New York, NY',
      hotel: 'The Plaza Hotel',
      interests: 'art, fine dining',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setRecommendations([]);
    const result = await getPersonalizedRecommendationsAction(values);

    if (result.error) {
       toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      });
    } else {
      setRecommendations(result.recommendations || []);
    }
    setIsLoading(false);
  }

  return (
    <section id="ai-discovery" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Sparkles className="mr-2 inline-block h-4 w-4" />
                Powered by AI
            </div>
            <h2 className="font-headline mt-2 text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Destination</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered concierge provides personalized recommendations for attractions, tours, and dining right from the hotel room TV. Try it out below!
            </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Get Recommendations</CardTitle>
              <CardDescription>Enter your details to see what our AI suggests.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="e.g., Paris, France" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hotel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hotel</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="e.g., The Ritz" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interests (optional)</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <List className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="e.g., museums, nightlife" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                       <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Get AI Recommendations
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            <Card className="w-full min-h-[300px]">
              <CardHeader>
                <CardTitle>Your Personalized Itinerary</CardTitle>
                <CardDescription>Recommendations will appear here.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center gap-4 pt-8 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p>Our AI is crafting your suggestions...</p>
                  </div>
                )}
                
                {!isLoading && recommendations.length > 0 && (
                  <ul className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                          <Sparkles className="h-3 w-3" />
                        </div>
                        <span className="flex-1">{rec}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {!isLoading && recommendations.length === 0 && (
                  <div className="flex flex-col items-center justify-center gap-4 pt-8 text-center text-muted-foreground">
                    <Sparkles className="h-8 w-8" />
                    <p>Ready for an adventure? Fill out the form to get started!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
