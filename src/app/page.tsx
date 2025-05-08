import CategoryFilter from '@/components/homepage/CategoryFilter.Component';
import FilterReset from '@/components/homepage/FilterReset.Component';
import PriceFilter from '@/components/homepage/PriceFilter.Component';
import Products from '@/components/homepage/Products.Component';
import Search from '@/components/homepage/Search.Component';
import ProductsLoading from '@/components/loading/Products.Loading';
import { Suspense } from 'react';

type Props = {
  searchParams: Promise<{
    query: string;
    page: string;
    priceMin: string;
    priceMax: string;
    categorySlug: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const query = (await searchParams).query || '';
  const currentPage = (await searchParams).page || '1';
  const priceMin = (await searchParams).priceMin || '';
  const priceMax = (await searchParams).priceMax || '';
  const categorySlug = (await searchParams).categorySlug || '';

  // console.log(currentPage, query, priceMin, priceMax, categorySlug);

  return (
    <section className='my-10'>
      <div className='container'>
        <h1 className='mb-4 text-3xl font-bold'>Products</h1>
        {/* Filter */}
        <div className='mb-4 flex flex-wrap items-center gap-4'>
          <Search placeholder='Search by name...' query={query} />
          <CategoryFilter categorySlug={categorySlug} />
          <PriceFilter priceMin={priceMin} priceMax={priceMax} />
          <FilterReset query={query} priceMin={priceMin} priceMax={priceMax} categorySlug={categorySlug} />
        </div>
        {/* Products */}
        <Suspense fallback={<ProductsLoading />} key={query + currentPage + priceMin + priceMax + categorySlug}>
          <Products
            query={query}
            currentPage={currentPage}
            priceMin={priceMin}
            priceMax={priceMax}
            categorySlug={categorySlug}
          />
        </Suspense>
      </div>
    </section>
  );
}
