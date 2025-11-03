import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const FilterBar = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }: FilterBarProps) => {
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'plants', label: 'Plants' },
    { value: 'flowers', label: 'Flowers' },
    { value: 'bouquets', label: 'Bouquets' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-card p-4 rounded-lg border border-border shadow-soft">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name: A to Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
