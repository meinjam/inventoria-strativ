import React from 'react';

interface Props {
  params: Promise<{ slug: string }>;
}

async function SingleProduct({ params }: Props) {
  const { slug } = await params;

  return (
    <section className='my-10'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Product Details</h1>
        </div>
        <div className='mt-4'>
          <p className='text-lg'>Product Name: {slug}</p>
          <p className='text-lg'>
            Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec ligula
            facilisis facilisis.
          </p>
          <p className='text-lg'>Price: $99.99</p>
          <p className='text-lg'>Stock: Available</p>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
