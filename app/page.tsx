import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* Add more ProductCards as needed */}
      </div>
    </div>
  );
}
