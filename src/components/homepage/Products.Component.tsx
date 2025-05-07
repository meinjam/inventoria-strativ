import { getProducts } from '@/actions/products';
import React from 'react';
import ErrorDisplay from '@/components/error/ErrorDisplay.Component';
import ProductTable from '@/components/homepage/ProductTable.Component';

const Products = async () => {
  try {
    const products = await getProducts();
    // console.log(products);

    return (
      <>
        <h1 className='text-3xl font-bold mb-4'>Products</h1>
        <ProductTable products={products} />
      </>
    );
  } catch (error) {
    <>
      <h1 className='text-3xl font-bold mb-4'>Products</h1>
      <ErrorDisplay message={error instanceof Error ? error.message : 'Failed to load products'} />
    </>;
  }
};

export default Products;
