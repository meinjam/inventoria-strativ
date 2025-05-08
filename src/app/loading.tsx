import ProductsLoading from '@/components/loading/Products.Loading';

export default function Loading() {
  return (
    <section className='my-10'>
      <div className='container animate-pulse'>
        <h1 className='mb-4 h-10 w-40 animate-pulse rounded bg-gray-200'></h1>

        {/* Filter */}
        <div className='mb-4 flex flex-wrap items-center gap-4'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='h-10 w-40 animate-pulse rounded bg-gray-200'></div>
          ))}
        </div>

        {/* Products */}
        <ProductsLoading />

        {/* Pagination */}
        <div className='mt-4 flex justify-end gap-2'>
          <div className='h-9 w-9 animate-pulse rounded-full bg-gray-200' />
          {[...Array(3)].map((_, i) => (
            <div key={i} className='h-9 w-9 animate-pulse rounded-full bg-gray-200' />
          ))}
          <div className='h-9 w-9 animate-pulse rounded-full bg-gray-200' />
        </div>
      </div>
    </section>
  );
}
