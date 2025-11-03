import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Package, MapPin, Mail, Phone, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/');
  };

  const dummyOrders = [
    {
      id: 'ORD-001',
      date: '2024-03-15',
      items: 'Monstera Plant, Succulent Collection',
      total: 75.98,
      status: 'Delivered',
    },
    {
      id: 'ORD-002',
      date: '2024-03-10',
      items: 'Rose Garden Bouquet',
      total: 68.99,
      status: 'Delivered',
    },
    {
      id: 'ORD-003',
      date: '2024-03-05',
      items: 'Snake Plant, Wildflower Bouquet',
      total: 94.98,
      status: 'In Transit',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold">My Profile</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 animate-slide-up">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                <p className="text-muted-foreground mb-6">Member since March 2024</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>123 Green Street, Nature City, NC 12345</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-6">
                Edit Profile
              </Button>
            </Card>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <Card className="p-6 animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Package className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Order History</h2>
              </div>

              <div className="space-y-4">
                {dummyOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-border rounded-lg p-4 hover:shadow-soft transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{order.items}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">${order.total.toFixed(2)}</span>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {dummyOrders.length === 0 && (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No orders yet</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
