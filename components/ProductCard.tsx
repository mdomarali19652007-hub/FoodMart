"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-item">
      {product.discount && <span className="badge bg-success position-absolute m-3">-{product.discount}%</span>}
      <button className="btn-wishlist" onClick={() => alert("Added to wishlist!")}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"/></svg>
      </button>
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image src={product.image} alt={product.name} width={200} height={200} className="tab-image" />
        </Link>
      </figure>
      <h3><Link href={`/product/${product.slug}`} className="text-decoration-none text-dark">{product.name}</Link></h3>
      <span className="qty">{product.qty}</span>
      <span className="rating">
        <svg width="24" height="24" className="text-primary" viewBox="0 0 15 15"><path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"/></svg>
        {" "}{product.rating}
      </span>
      <span className="price">${product.price.toFixed(2)}</span>
      {product.originalPrice && <span className="text-muted text-decoration-line-through ms-2 small">${product.originalPrice.toFixed(2)}</span>}
      <div className="d-flex align-items-center justify-content-between mt-2">
        <button className="btn btn-sm btn-primary" onClick={() => { addItem(product); }}>
          Add to Cart
        </button>
        <Link href={`/product/${product.slug}`} className="btn btn-sm btn-outline-dark">Details</Link>
      </div>
    </div>
  );
}
