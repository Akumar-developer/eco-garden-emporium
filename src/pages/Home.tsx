import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Truck } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6">
            Bring Nature Home
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto">
            Discover our eco-friendly collection of plants, flowers, and custom bouquets delivered with love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="hero" size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/customize">
              <Button variant="outline" size="lg" className="bg-card/90 hover:bg-card backdrop-blur-sm">
                Customize Bouquet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">100% Eco-Friendly</h3>
              <p className="text-muted-foreground">
                All our products are sustainably sourced and packaged with biodegradable materials
              </p>
            </div>
            <div className="text-center space-y-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Handpicked with Love</h3>
              <p className="text-muted-foreground">
                Every plant and flower is carefully selected by our expert botanists
              </p>
            </div>
            <div className="text-center space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Free shipping on orders over $50. Your plants arrive fresh and healthy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of beautiful plants and flowers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop">
              <Button size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Create Your Perfect Bouquet
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Use our bouquet customizer to design a unique arrangement that perfectly matches your style
          </p>
          <Link to="/customize">
            <Button variant="outline" size="lg" className="bg-background/90 text-foreground hover:bg-background">
              Start Customizing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
