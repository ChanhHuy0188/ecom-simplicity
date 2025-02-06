import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/layout/CartDrawer";
import ProductGrid from "@/components/products/ProductGrid";
import { CartProvider } from "@/contexts/CartContext";

export default function Index() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar openCart={() => setIsCartOpen(true)} />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
          <ProductGrid />
        </main>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}