import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@ecobloom.com',
      description: 'We typically respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '(555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Green Street',
      description: 'Nature City, NC 12345',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={info.title}
                className="p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="font-medium mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 max-w-2xl mx-auto animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us how we can help..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-2 min-h-[150px]"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
