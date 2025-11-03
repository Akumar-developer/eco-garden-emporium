import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Shop</h1>
          <p className="text-muted-foreground text-lg">
            Discover our full collection of eco-friendly plants and flowers
          </p>
        </div>

        <div className="mb-8 animate-slide-up">
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
