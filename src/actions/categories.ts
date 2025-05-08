import { Category } from '@/types';
import { baseUrl } from '@/utils/constants';

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${baseUrl}/categories`, {
    cache: 'no-store', // Disable caching
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
