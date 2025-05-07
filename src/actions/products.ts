import { Product } from '@/types';
import { baseUrl } from '@/utils/constants';

export async function getProducts(page: string | string[], query: string | string[], limit = 10): Promise<Product[]> {
  const response = await fetch(`${baseUrl}/products?offset=${page}&limit=${limit}&title=${query}`, {
    cache: 'no-store', // Disable caching
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const response = await fetch(`${baseUrl}/products/slug/${slug}`, {
    // next: { revalidate: 3600 }, // Revalidate every hour
    cache: 'no-store', // Disable caching
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status} ${response.statusText}`);
  }

  //   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  return response.json();
}
