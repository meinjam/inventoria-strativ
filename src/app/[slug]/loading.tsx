import React from 'react';

const loading = () => {
  return (
    <section className='my-10'>
      <div className='container'>
        <div className='flex items-center gap-3 flex-wrap mb-8'>
          <div className='h-8 w-48 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-8 w-24 bg-gray-200 rounded animate-pulse'></div>
        </div>

        <div className='max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-8 items-start'>
            {/* Image Skeleton */}
            <div className='w-full aspect-square bg-gray-200 rounded-2xl animate-pulse'></div>

            {/* Info Skeleton */}
            <div className='space-y-5'>
              <div className='h-8 w-3/4 bg-gray-200 rounded animate-pulse'></div>

              <div className='h-6 w-40 bg-gray-200 rounded-full animate-pulse'></div>

              <div className='h-6 w-24 bg-gray-200 rounded animate-pulse'></div>

              <div className='space-y-2'>
                <div className='h-5 w-28 bg-gray-200 rounded animate-pulse'></div>
                <div className='h-4 w-full bg-gray-200 rounded animate-pulse'></div>
                <div className='h-4 w-5/6 bg-gray-200 rounded animate-pulse'></div>
              </div>

              <div className='space-y-1'>
                <div className='h-4 w-40 bg-gray-200 rounded animate-pulse'></div>
                <div className='h-4 w-40 bg-gray-200 rounded animate-pulse'></div>
              </div>

              <div className='h-10 w-32 bg-gray-200 rounded-lg animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
