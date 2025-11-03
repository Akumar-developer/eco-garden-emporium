import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 animate-fade-in bg-gradient-card border-border">
        <div className="aspect-square overflow-hidden bg-secondary/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
            <Button
              variant="default"
              size="icon"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
          {!product.inStock && (
            <p className="text-xs text-destructive font-medium">Out of Stock</p>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
