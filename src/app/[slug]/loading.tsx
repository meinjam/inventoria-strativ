import React from 'react';

const loading = () => {
  return (
    <section className='my-10'>
      <div className='container'>
        <div className='mb-8 flex flex-wrap items-center gap-3'>
          <div className='h-8 w-48 animate-pulse rounded bg-gray-200'></div>
          <div className='h-8 w-24 animate-pulse rounded bg-gray-200'></div>
        </div>

        <div className='mx-auto max-w-5xl'>
          <div className='grid items-start gap-8 md:grid-cols-2'>
            {/* Image Skeleton */}
            <div className='aspect-square w-full animate-pulse rounded-2xl bg-gray-200'></div>

            {/* Info Skeleton */}
            <div className='space-y-5'>
              <div className='h-8 w-3/4 animate-pulse rounded bg-gray-200'></div>

              <div className='h-6 w-40 animate-pulse rounded-full bg-gray-200'></div>

              <div className='h-6 w-24 animate-pulse rounded bg-gray-200'></div>

              <div className='space-y-2'>
                <div className='h-5 w-28 animate-pulse rounded bg-gray-200'></div>
                <div className='h-4 w-full animate-pulse rounded bg-gray-200'></div>
                <div className='h-4 w-5/6 animate-pulse rounded bg-gray-200'></div>
              </div>

              <div className='space-y-1'>
                <div className='h-4 w-40 animate-pulse rounded bg-gray-200'></div>
                <div className='h-4 w-40 animate-pulse rounded bg-gray-200'></div>
              </div>

              <div className='h-10 w-32 animate-pulse rounded-lg bg-gray-200'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
