import { Card } from '@/components/ui/card';
import { Leaf, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source all our plants and flowers from eco-friendly suppliers who share our commitment to the planet.',
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Every product is handpicked and quality-checked to ensure you receive only the freshest, healthiest plants.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building a community of plant lovers who care about nature and sustainable living.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our expert team brings years of botanical knowledge to help you find the perfect plants for your space.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-accent-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">About EcoBloom</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're on a mission to bring the beauty of nature into every home while protecting our planet for future generations
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, EcoBloom was born from a simple belief: that everyone deserves to have beautiful, 
                living plants in their homes, and that this can be done in a way that respects and nurtures our environment.
              </p>
              <p>
                What started as a small local nursery has grown into a thriving online community of plant enthusiasts 
                who share our passion for sustainability and natural beauty. We work directly with eco-conscious growers 
                who use organic practices and sustainable methods.
              </p>
              <p>
                Every plant we sell comes with care instructions and our commitment to your success. We're not just 
                selling plants – we're helping you create a greener, healthier living space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="p-6 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '500+', label: 'Plant Varieties' },
              { number: '100%', label: 'Eco-Friendly' },
              { number: '50+', label: 'Partner Growers' },
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
