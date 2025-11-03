import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

import roseBouquet from '@/assets/rose-bouquet.jpg';

const BouquetCustomizer = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [flowerType, setFlowerType] = useState('roses');
  const [color, setColor] = useState('mixed');
  const [wrapper, setWrapper] = useState('kraft');
  const [size, setSize] = useState('medium');

  const flowerTypes = [
    { value: 'roses', label: 'Roses', price: 50 },
    { value: 'tulips', label: 'Tulips', price: 40 },
    { value: 'sunflowers', label: 'Sunflowers', price: 45 },
    { value: 'mixed', label: 'Mixed Wildflowers', price: 48 },
  ];

  const colors = [
    { value: 'red', label: 'Red' },
    { value: 'pink', label: 'Pink' },
    { value: 'white', label: 'White' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'mixed', label: 'Mixed Colors' },
  ];

  const wrappers = [
    { value: 'kraft', label: 'Kraft Paper' },
    { value: 'tissue', label: 'Tissue Paper' },
    { value: 'burlap', label: 'Burlap' },
    { value: 'none', label: 'No Wrapper' },
  ];

  const sizes = [
    { value: 'small', label: 'Small (10 stems)', multiplier: 0.7 },
    { value: 'medium', label: 'Medium (20 stems)', multiplier: 1 },
    { value: 'large', label: 'Large (30 stems)', multiplier: 1.5 },
  ];

  const calculatePrice = () => {
    const basePrice = flowerTypes.find((f) => f.value === flowerType)?.price || 50;
    const sizeMultiplier = sizes.find((s) => s.value === size)?.multiplier || 1;
    return basePrice * sizeMultiplier;
  };

  const handleAddToCart = () => {
    const customBouquet = {
      id: `custom-${Date.now()}`,
      name: `Custom ${flowerType.charAt(0).toUpperCase() + flowerType.slice(1)} Bouquet`,
      description: `A beautiful ${size} bouquet of ${color} ${flowerType} wrapped in ${wrapper}`,
      price: calculatePrice(),
      category: 'bouquets' as const,
      image: roseBouquet,
      inStock: true,
    };
    addToCart(customBouquet);
    toast.success('Custom bouquet added to cart!');
    navigate('/cart');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Customize Your Bouquet</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a unique bouquet that's perfect for any occasion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customization Options */}
          <div className="space-y-6 animate-slide-up">
            {/* Flower Type */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Choose Flowers</h3>
              <RadioGroup value={flowerType} onValueChange={setFlowerType}>
                {flowerTypes.map((type) => (
                  <div key={type.value} className="flex items-center space-x-3 mb-3">
                    <RadioGroupItem value={type.value} id={type.value} />
                    <Label htmlFor={type.value} className="flex-1 cursor-pointer">
                      {type.label} - ${type.price}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Color */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Choose Color</h3>
              <RadioGroup value={color} onValueChange={setColor}>
                {colors.map((c) => (
                  <div key={c.value} className="flex items-center space-x-3 mb-3">
                    <RadioGroupItem value={c.value} id={c.value} />
                    <Label htmlFor={c.value} className="flex-1 cursor-pointer">
                      {c.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Wrapper */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Choose Wrapper</h3>
              <RadioGroup value={wrapper} onValueChange={setWrapper}>
                {wrappers.map((w) => (
                  <div key={w.value} className="flex items-center space-x-3 mb-3">
                    <RadioGroupItem value={w.value} id={w.value} />
                    <Label htmlFor={w.value} className="flex-1 cursor-pointer">
                      {w.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>

            {/* Size */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Choose Size</h3>
              <RadioGroup value={size} onValueChange={setSize}>
                {sizes.map((s) => (
                  <div key={s.value} className="flex items-center space-x-3 mb-3">
                    <RadioGroupItem value={s.value} id={s.value} />
                    <Label htmlFor={s.value} className="flex-1 cursor-pointer">
                      {s.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>
          </div>

          {/* Preview */}
          <div className="animate-fade-in">
            <Card className="p-6 sticky top-24">
              <h3 className="text-2xl font-semibold mb-6">Your Bouquet</h3>
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20 mb-6">
                <img
                  src={roseBouquet}
                  alt="Bouquet preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Flowers:</span>
                  <span className="font-medium">
                    {flowerTypes.find((f) => f.value === flowerType)?.label}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Color:</span>
                  <span className="font-medium">
                    {colors.find((c) => c.value === color)?.label}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Wrapper:</span>
                  <span className="font-medium">
                    {wrappers.find((w) => w.value === wrapper)?.label}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium">
                    {sizes.find((s) => s.value === size)?.label}
                  </span>
                </div>
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${calculatePrice().toFixed(2)}</span>
                </div>
              </div>
              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BouquetCustomizer;
