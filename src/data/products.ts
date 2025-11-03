import monsteraPlant from '@/assets/monstera-plant.jpg';
import roseBouquet from '@/assets/rose-bouquet.jpg';
import succulents from '@/assets/succulents.jpg';
import snakePlant from '@/assets/snake-plant.jpg';
import wildflowerBouquet from '@/assets/wildflower-bouquet.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'plants' | 'flowers' | 'bouquets';
  image: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    description: 'Beautiful tropical plant with iconic split leaves. Perfect for adding a touch of jungle to your home.',
    price: 45.99,
    category: 'plants',
    image: monsteraPlant,
    inStock: true,
  },
  {
    id: '2',
    name: 'Rose Garden Bouquet',
    description: 'Elegant arrangement of fresh pink and white roses, beautifully wrapped in eco-friendly kraft paper.',
    price: 68.99,
    category: 'bouquets',
    image: roseBouquet,
    inStock: true,
  },
  {
    id: '3',
    name: 'Succulent Collection',
    description: 'Set of 3 adorable succulents in ceramic pots. Low maintenance and perfect for beginners.',
    price: 29.99,
    category: 'plants',
    image: succulents,
    inStock: true,
  },
  {
    id: '4',
    name: 'Snake Plant',
    description: 'Hardy and air-purifying snake plant in modern grey ceramic pot. Thrives in low light.',
    price: 39.99,
    category: 'plants',
    image: snakePlant,
    inStock: true,
  },
  {
    id: '5',
    name: 'Wildflower Bouquet',
    description: 'Cheerful mix of sunflowers, daisies, and seasonal wildflowers. Brings joy to any space.',
    price: 54.99,
    category: 'bouquets',
    image: wildflowerBouquet,
    inStock: true,
  },
  {
    id: '6',
    name: 'Peace Lily',
    description: 'Elegant white flowering plant known for its air-purifying qualities. Easy to care for.',
    price: 42.99,
    category: 'plants',
    image: monsteraPlant,
    inStock: true,
  },
  {
    id: '7',
    name: 'Orchid Beauty',
    description: 'Stunning purple orchid in decorative pot. A sophisticated gift for any occasion.',
    price: 58.99,
    category: 'flowers',
    image: roseBouquet,
    inStock: false,
  },
  {
    id: '8',
    name: 'Herb Garden Kit',
    description: 'Grow your own basil, mint, and rosemary. Complete starter kit with pots and seeds.',
    price: 34.99,
    category: 'plants',
    image: succulents,
    inStock: true,
  },
];
