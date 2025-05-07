import Products from '@/components/homepage/Products.Component';
import Search from '@/components/homepage/Search.Component';
import ProductsLoading from '@/components/loading/Products.Loading';
import { Suspense } from 'react';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const query = (await searchParams).query || '';
  const currentPage = (await searchParams).page || '1';
  console.log(currentPage);
  console.log(query);

  return (
    <section className='my-10'>
      <div className='container'>
        <h1 className='text-3xl font-bold mb-4'>Products</h1>
        <Search placeholder='Search product...' />
        <Suspense fallback={<ProductsLoading />} key={`${query}_${currentPage}`}>
          <Products query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  );
}
