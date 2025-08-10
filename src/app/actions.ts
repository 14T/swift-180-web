'use server';

import { z } from 'zod';
import {
  getPersonalizedRecommendations,
  PersonalizedRecommendationsInput,
} from '@/ai/flows/personalized-local-recommendations';

const PersonalizedRecommendationsInputSchema = z.object({
  location: z.string(),
  hotel: z.string(),
  interests: z.string().optional(),
});

export async function getPersonalizedRecommendationsAction(input: PersonalizedRecommendationsInput) {
  try {
    const validatedInput = PersonalizedRecommendationsInputSchema.parse(input);
    const result = await getPersonalizedRecommendations(validatedInput);
    return { recommendations: result.recommendations };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
      return { error: 'Failed to get recommendations. Please try again.' };
    }
    return { error: 'An unknown error occurred.' };
  }
}
