"use client";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/data/products";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <div className="d-flex align-items-center gap-3 mb-4">
      <div className="input-group" style={{ maxWidth: 150 }}>
        <button className="btn btn-outline-dark" type="button" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
        <input type="text" className="form-control text-center" value={qty} readOnly />
        <button className="btn btn-outline-dark" type="button" onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <button className="btn btn-primary btn-lg px-5" onClick={() => { addItem(product, qty); router.push("/cart"); }} disabled={!product.inStock}>
        Add to Cart
      </button>
    </div>
  );
}
