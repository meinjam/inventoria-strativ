import { getProductBySlug } from '@/actions/products';
import dayjs from 'dayjs';
import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import ErrorDisplay from '@/components/error/ErrorDisplay.Component';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
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
    //   console.log(product);

    return (
      <section className='my-10'>
        <div className='container'>
          <div className='flex items-center gap-3 flex-wrap mb-8'>
            <h1 className='text-2xl font-bold'>Product Details</h1>
            <a href='#' className='inline-block btn'>
              Go Back
            </a>
          </div>

          <div className='max-w-5xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8 items-start'>
              {/* Product Image */}
              <div className='w-full'>
                <img
                  src='https://m.media-amazon.com/images/I/61o44NZvXIL._AC_SL1500_.jpg'
                  alt='Produk Diupdate'
                  className='rounded-2xl w-full object-cover'
                />
              </div>

              {/* Product Info */}
              <div className='space-y-5'>
                <h1 className='text-3xl font-bold text-gray-900'>{product?.title}</h1>

                <span className='inline-block bg-gray-100 capitalize text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-300'>
                  Category: {product?.category?.name}
                </span>

                <p className='text-2xl font-semibold text-primary'>${product?.price}</p>

                <div>
                  <h2 className='text-lg font-semibold text-gray-800 mb-1'>Description</h2>
                  <p className='text-gray-600 leading-relaxed'>{product?.description}</p>
                </div>

                <div className='text-sm text-gray-400'>
                  <p>
                    Created:{' '}
                    <span className='font-medium text-gray-500'>
                      {dayjs(product?.creationAt).format('DD MMM YYYY; hh:mm A')}
                    </span>
                  </p>
                  <p>
                    Updated:{' '}
                    <span className='font-medium text-gray-500'>
                      {dayjs(product?.updatedAt).format('DD MMM YYYY; hh:mm A')}
                    </span>
                  </p>
                </div>

                <a href='#' className='inline-block mt-4 btn'>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className='my-10'>
        <div className='container'>
          <h1 className='text-3xl font-bold mb-4'>Product Details</h1>
          <ErrorDisplay message={error instanceof Error ? error.message : 'Failed to load product'} />
        </div>
      </section>
    );
  }
}

export default SingleProduct;
