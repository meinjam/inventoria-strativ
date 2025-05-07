import Products from '@/components/Home/Products.Component';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className='my-10'>
      <div className='container'>
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <Products />
        </Suspense>
      </div>
    </section>
  );
}
