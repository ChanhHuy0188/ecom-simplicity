import { ArrowRight, Laptop, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Chánh Huy Đẹp Trai
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your Trusted Source for Authentic Tech Products
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-purple-50 p-6 rounded-xl">
            <Laptop className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Devices</h3>
            <p className="text-gray-600">
              Explore our collection of high-end laptops, MacBooks, and smart
              devices from leading brands.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Authentic</h3>
            <p className="text-gray-600">
              We guarantee the authenticity of all our products with official
              warranty and support.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <Star className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
            <p className="text-gray-600">
              Our team provides professional consultation to help you choose the
              perfect device.
            </p>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                alt="Laptops"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  Premium Laptops & MacBooks
                </h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img
                src="https://images.unsplash.com/photo-1512686096451-a15c19314d59"
                alt="Smart Devices"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  Smart Devices & Accessories
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 mb-8">
            At Chánh Huy Đẹp Trai, we pride ourselves on offering only genuine,
            high-quality tech products. Our commitment to authenticity and customer
            satisfaction has made us a trusted name in the industry. Whether you're
            looking for the latest MacBook, a powerful laptop, or smart devices,
            we've got you covered with competitive prices and expert support.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-semibold"
          >
            View Our Collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}