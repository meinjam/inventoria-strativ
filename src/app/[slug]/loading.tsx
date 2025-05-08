import React from 'react';

const loading = () => {
  return (
    <section className='my-10 animate-pulse'>
      <div className='container'>
        <div className='mb-8 flex flex-wrap items-center gap-3'>
          <div className='h-6 w-40 rounded bg-gray-300' />
          <div className='h-10 w-24 rounded bg-gray-300' />
        </div>

        <div className='mx-auto max-w-5xl'>
          <div className='grid items-start gap-8 md:grid-cols-2'>
            {/* Image Placeholder */}
            <div>
              <div className='relative aspect-square h-full max-h-[300px] w-full rounded-2xl bg-gray-300 md:max-h-[500px]' />
              {/* Thumbnail Skeletons */}
              <div className='mt-8 flex justify-center gap-4'>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className='h-16 w-16 rounded bg-gray-300 sm:h-20 sm:w-20' />
                ))}
              </div>
            </div>

            {/* Product Info Skeleton */}
            <div className='space-y-5'>
              <div className='h-8 w-1/2 rounded bg-gray-300' />

              <div className='h-6 w-40 rounded-full bg-gray-200' />

              <div className='h-6 w-24 rounded bg-gray-300' />

              <div>
                <div className='mb-2 h-5 w-32 rounded bg-gray-300' />
                <div className='space-y-2'>
                  <div className='h-4 w-full rounded bg-gray-200' />
                  <div className='h-4 w-5/6 rounded bg-gray-200' />
                  <div className='h-4 w-2/3 rounded bg-gray-200' />
                </div>
              </div>

              <div className='space-y-2'>
                <div className='h-4 w-48 rounded bg-gray-200' />
                <div className='h-4 w-48 rounded bg-gray-200' />
              </div>

              <div className='h-10 w-32 rounded bg-gray-300' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
