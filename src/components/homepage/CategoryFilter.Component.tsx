import { getCategories } from '@/actions/categories';
import React from 'react';
import CategoryFilterOptions from '@/components/homepage/CategoryFilterOptions.Component';

const CategoryFilter = async ({ categorySlug }: { categorySlug: string }) => {
  try {
    const categories = await getCategories();
    return <CategoryFilterOptions categories={categories} categorySlug={categorySlug} />;
  } catch (error) {
    return null;
  }
};

export default CategoryFilter;
