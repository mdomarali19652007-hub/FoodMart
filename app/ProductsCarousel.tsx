"use client";
import ProductCarouselSlide from "@/components/ProductCarouselSlide";
import type { Product } from "@/data/products";

export default function ProductsCarousel({ products }: { products: Product[] }) {
  return (
    <div className="products-carousel swiper">
      <div className="swiper-wrapper">
        {products.map(product => (
          <ProductCarouselSlide key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
