import { Product } from '@/types';
import { baseUrl, paginationLimit } from '@/utils/constants';

export async function getProducts(
  page: string,
  query?: string,
  priceMin?: string,
  priceMax?: string,
  categorySlug?: string
): Promise<Product[]> {
  const params = new URLSearchParams();

  params.append('offset', ((Number(page) - 1) * paginationLimit).toString());
  params.append('limit', paginationLimit.toString());
  if (query) params.append('title', query);
  if (priceMin) params.append('price_min', priceMin.toString());
  if (priceMax) params.append('price_max', priceMax.toString());
  if (categorySlug) params.append('categorySlug', categorySlug);

  const response = await fetch(`${baseUrl}/products?${params.toString()}`, {
    cache: 'no-store', // Disable caching
  });

  console.log(response.url);

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
