import { getProducts } from '@/actions/products';
import React from 'react';
import ErrorDisplay from '@/components/error/ErrorDisplay.Component';
import ProductTable from '@/components/homepage/ProductTable.Component';
import CustomPagination from '../reusable/CustomPagination.Component';

type Props = {
  query: string;
  currentPage: string;
  priceMin: string;
  priceMax: string;
  categorySlug: string;
};

const Products = async ({ query, currentPage, priceMin, priceMax, categorySlug }: Props) => {
  try {
    const products = await getProducts(currentPage, query, priceMin, priceMax, categorySlug);
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
