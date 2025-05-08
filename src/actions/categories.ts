import { Category } from '@/types';
import { baseUrl } from '@/utils/constants';

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${baseUrl}/categories`, {
    cache: 'force-cache', // Use 'force-cache' to cache the response
    next: {
      revalidate: 1800, // Revalidate the data every 30 minutes
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
