"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import type { Product } from "@/data/products";

export default function ProductCarouselSlide({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-item swiper-slide">
      {product.discount && <span className="badge bg-success position-absolute m-3">-{product.discount}%</span>}
      <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
      <figure>
        <Link href={`/product/${product.slug}`} title={product.name}>
          <img src={product.image} className="tab-image" alt={product.name} />
        </Link>
      </figure>
      <h3>{product.name}</h3>
      <span className="qty">{product.qty}</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> {product.rating}</span>
      <span className="price">${product.price.toFixed(2)}</span>
      <div className="d-flex align-items-center justify-content-between">
        <div className="input-group product-qty">
          <span className="input-group-btn">
            <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
              <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
            </button>
          </span>
          <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
          <span className="input-group-btn">
            <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
              <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
            </button>
          </span>
        </div>
        <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); addItem(product); }}>Add to Cart</a>
      </div>
    </div>
  );
}
