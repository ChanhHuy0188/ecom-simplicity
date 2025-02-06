import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    price: 1299,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: 3,
    name: "AI Assistant",
    price: 199,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    id: 4,
    name: "Circuit Board",
    price: 99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}