import { getProductBySlug } from '@/actions/products';
import React from 'react';
import type { Metadata } from 'next';
import ErrorDisplay from '@/components/error/ErrorDisplay.Component';
import NavigationBtn from '@/components/reusable/NavigationBtn.Component';
import ProductDetails from '@/components/productpage/ProductDetails.Component';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const product = await getProductBySlug(slug);
    // console.log(product);

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        images: product.images,
      },
    };
  } catch (error) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
      openGraph: {
        images: [],
      },
    };
  }
}

async function SingleProduct({ params }: Props) {
  const { slug } = await params;
  try {
    const product = await getProductBySlug(slug);
    // console.log(product);

    return (
      <section className='my-10'>
        <div className='container'>
          <div className='mb-8 flex flex-wrap items-center gap-3'>
            <h1 className='text-2xl font-bold'>Product Details</h1>
            <NavigationBtn title='Go Back' type='back' />
          </div>

          <ProductDetails product={product} />
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className='my-10'>
        <div className='container'>
          <h1 className='mb-4 text-3xl font-bold'>Product Details</h1>
          <ErrorDisplay message={error instanceof Error ? error.message : 'Failed to load product'} />
        </div>
      </section>
    );
  }
}

export default SingleProduct;
