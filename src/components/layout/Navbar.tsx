
import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ openCart }: { openCart: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            Chánh Huy Đẹp Trai
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link to="/orders" className="text-gray-600 hover:text-gray-800">
              Orders
            </Link>
            <Link to="/auth" className="text-gray-600 hover:text-gray-800">
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={openCart}
              className="relative p-2 text-gray-600 hover:text-gray-800"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
