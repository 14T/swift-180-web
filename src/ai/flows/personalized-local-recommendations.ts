// 'use server';

/**
 * @fileOverview Provides personalized local recommendations for travelers based on their location and hotel.
 *
 * - getPersonalizedRecommendations - A function that returns personalized recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  location: z.string().describe('The current location of the traveler.'),
  hotel: z.string().describe('The name of the hotel the traveler is staying at.'),
  interests: z.string().optional().describe('The interests of the traveler.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of personalized recommendations for the traveler.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedLocalRecommendationsFlow(input);
}

const personalizedLocalRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedLocalRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are a travel expert providing personalized recommendations to travelers.

  Based on the traveler's current location: {{{location}}}, and the hotel they are staying at: {{{hotel}}},
  provide a list of recommendations for nearby attractions, tours, and dining options.

  Consider the traveler's interests: {{{interests}}}.

  Format the recommendations as a list of strings.
  Limit the recommendations to 5 items.
  Make the recommendations sound exciting and appealing to the traveler.
  `,
});

const personalizedLocalRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedLocalRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedLocalRecommendationsPrompt(input);
    return output!;
  }
);
