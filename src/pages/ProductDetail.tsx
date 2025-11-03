import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft, Check, Leaf, Heart } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const features = [
    'Sustainably sourced',
    'Eco-friendly packaging',
    'Care instructions included',
    'Satisfaction guaranteed',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center text-primary hover:text-primary-hover mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20 shadow-hover">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              {!product.inStock && (
                <p className="text-sm text-destructive text-center">
                  This item is currently unavailable
                </p>
              )}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">Sustainably grown</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">With Love</h3>
                  <p className="text-sm text-muted-foreground">Handpicked care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
