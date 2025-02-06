import { Package } from "lucide-react";

export default function OrderTracking() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-semibold mb-6">Order #123456</h1>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Order Confirmed</p>
                <p className="text-sm text-gray-500">Your order has been placed</p>
              </div>
            </div>
            
            {/* More tracking steps would go here */}
            
            <div className="border-t pt-6 mt-6">
              <h2 className="font-medium mb-4">Shipping Address</h2>
              <p className="text-gray-600">
                John Doe<br />
                123 Main St<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}