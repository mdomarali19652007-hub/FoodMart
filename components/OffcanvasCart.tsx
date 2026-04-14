"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function OffcanvasCart() {
  const { items, subtotal, totalItems, removeItem } = useCart();

  return (
    <>
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasCart" aria-labelledby="My Cart">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{totalItems}</span>
            </h4>
            <ul className="list-group mb-3">
              {items.length === 0 ? (
                <li className="list-group-item text-center text-muted py-4">Your cart is empty</li>
              ) : (
                <>
                  {items.map(item => (
                    <li key={item.product.id} className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{item.product.name}</h6>
                        <small className="text-body-secondary">Qty: {item.quantity}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="text-body-secondary">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <button className="btn btn-sm btn-link text-danger p-0" onClick={() => removeItem(item.product.id)}>&times;</button>
                      </div>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${subtotal.toFixed(2)}</strong>
                  </li>
                </>
              )}
            </ul>
            <Link href="/checkout" className="w-100 btn btn-primary btn-lg" data-bs-dismiss="offcanvas">Continue to checkout</Link>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasSearch" aria-labelledby="Search">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Search</span>
            </h4>
            <form role="search" action="/shop" method="get" className="d-flex mt-3 gap-0">
              <input className="form-control rounded-start rounded-0 bg-light" type="text" name="q" placeholder="What are you looking for?" aria-label="What are you looking for?" />
              <button className="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
