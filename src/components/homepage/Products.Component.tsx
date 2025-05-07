import { getProducts } from '@/actions/products';
import React from 'react';
import ErrorDisplay from '@/components/error/ErrorDisplay.Component';
import ProductTable from '@/components/homepage/ProductTable.Component';
import CustomPagination from '../reusable/CustomPagination.Component';

type Props = {
  query: string | string[];
  currentPage: string | string[];
};

const Products = async ({ query, currentPage }: Props) => {
  try {
    const products = await getProducts(currentPage, query);
    // console.log(products);

    return (
      <>
        <ProductTable products={products} />
        <CustomPagination />
      </>
    );
  } catch (error) {
    <>
      <ErrorDisplay message={error instanceof Error ? error.message : 'Failed to load products'} />
    </>;
  }
};

export default Products;
