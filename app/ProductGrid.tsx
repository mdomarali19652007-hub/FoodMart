"use client";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {products.map(product => (
        <div className="col" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
