"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, shipping, tax, total } = useCart();

  return (
    <>
      <div className="container-fluid">
        <nav className="breadcrumb-nav my-4" aria-label="breadcrumb">
          <ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Shopping Cart</li></ol>
        </nav>
      </div>
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="display-6 fw-bold mb-4">Shopping Cart</h2>
          {items.length === 0 ? (
            <div className="text-center py-5">
              <h4 className="text-muted mb-4">Your cart is empty</h4>
              <Link href="/shop" className="btn btn-primary btn-lg">Continue Shopping</Link>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-8">
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th></th></tr>
                    </thead>
                    <tbody>
                      {items.map(item => (
                        <tr key={item.product.id}>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <Image src={item.product.image} alt={item.product.name} width={80} height={80} className="rounded-3 bg-light p-1" style={{ objectFit: "contain" }} />
                              <div>
                                <h6 className="mb-0"><Link href={`/product/${item.product.slug}`} className="text-decoration-none text-dark">{item.product.name}</Link></h6>
                                <small className="text-muted">{item.product.qty}</small>
                              </div>
                            </div>
                          </td>
                          <td>${item.product.price.toFixed(2)}</td>
                          <td>
                            <div className="input-group" style={{ maxWidth: 130 }}>
                              <button className="btn btn-outline-dark btn-sm" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                              <input type="text" className="form-control form-control-sm text-center" value={item.quantity} readOnly />
                              <button className="btn btn-outline-dark btn-sm" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                            </div>
                          </td>
                          <td className="fw-bold">${(item.product.price * item.quantity).toFixed(2)}</td>
                          <td><button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.product.id)}>Remove</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link href="/shop" className="btn btn-outline-dark">Continue Shopping</Link>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="card rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">Cart Summary</h5>
                    <div className="d-flex justify-content-between mb-2"><span className="text-muted">Subtotal</span><span className="fw-bold">${subtotal.toFixed(2)}</span></div>
                    <div className="d-flex justify-content-between mb-2"><span className="text-muted">Shipping</span><span className="fw-bold">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
                    <div className="d-flex justify-content-between mb-2"><span className="text-muted">Tax (8%)</span><span className="fw-bold">${tax.toFixed(2)}</span></div>
                    <hr />
                    <div className="d-flex justify-content-between mb-4"><span className="h5 fw-bold">Total</span><span className="h5 fw-bold">${total.toFixed(2)}</span></div>
                    {subtotal < 50 && <p className="text-muted small">Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>}
                    <Link href="/checkout" className="btn btn-primary btn-lg w-100">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
