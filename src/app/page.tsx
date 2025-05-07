import Products from '@/components/homepage/Products.Component';
import ProductsLoading from '@/components/loading/Products.Loading';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className='my-10'>
      <div className='container'>
        <Suspense fallback={<ProductsLoading />}>
          <Products />
        </Suspense>
      </div>
    </section>
  );
}
