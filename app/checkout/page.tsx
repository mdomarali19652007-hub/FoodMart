"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, subtotal, shipping, tax, total, clearCart } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => { clearCart(); router.push("/thankyou"); }, 1000);
  };

  if (items.length === 0) {
    return (
      <section className="py-5"><div className="container-fluid text-center py-5">
        <h3 className="text-muted mb-4">Your cart is empty. Add items before checking out.</h3>
        <Link href="/shop" className="btn btn-primary btn-lg">Go to Shop</Link>
      </div></section>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/cart">Cart</Link></li><li className="breadcrumb-item active">Checkout</li></ol></nav>
      </div>
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="display-6 fw-bold mb-4">Checkout</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="row">
              <div className="col-lg-7">
                <div className="card rounded-4 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">Billing Details</h5>
                    <div className="row g-3">
                      <div className="col-sm-6"><label className="form-label">First Name *</label><input type="text" className="form-control" required /></div>
                      <div className="col-sm-6"><label className="form-label">Last Name *</label><input type="text" className="form-control" required /></div>
                      <div className="col-12"><label className="form-label">Email *</label><input type="email" className="form-control" required /></div>
                      <div className="col-12"><label className="form-label">Phone *</label><input type="tel" className="form-control" required /></div>
                      <div className="col-12"><label className="form-label">Street Address *</label><input type="text" className="form-control" required /></div>
                      <div className="col-md-5"><label className="form-label">City *</label><input type="text" className="form-control" required /></div>
                      <div className="col-md-4"><label className="form-label">State *</label><select className="form-select" required><option value="">Choose...</option><option>California</option><option>Texas</option><option>New York</option></select></div>
                      <div className="col-md-3"><label className="form-label">Zip *</label><input type="text" className="form-control" required /></div>
                    </div>
                  </div>
                </div>
                <div className="card rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">Payment Method</h5>
                    <div className="form-check mb-3"><input className="form-check-input" type="radio" name="payment" defaultChecked /><label className="form-check-label fw-bold">Credit / Debit Card</label></div>
                    <div className="form-check mb-3"><input className="form-check-input" type="radio" name="payment" /><label className="form-check-label fw-bold">PayPal</label></div>
                    <div className="form-check mb-3"><input className="form-check-input" type="radio" name="payment" /><label className="form-check-label fw-bold">Cash on Delivery</label></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0">
                <div className="card rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4">Your Order</h5>
                    {items.map(item => (
                      <div className="d-flex justify-content-between align-items-center mb-2" key={item.product.id}>
                        <div className="d-flex align-items-center gap-2">
                          <Image src={item.product.image} alt="" width={40} height={40} className="bg-light rounded p-1" />
                          <span>{item.product.name} x {item.quantity}</span>
                        </div>
                        <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between mb-2"><span className="text-muted">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                    <div className="d-flex justify-content-between mb-2"><span className="text-muted">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
                    <div className="d-flex justify-content-between mb-2"><span className="text-muted">Tax</span><span>${tax.toFixed(2)}</span></div>
                    <hr />
                    <div className="d-flex justify-content-between mb-4"><span className="h5 fw-bold mb-0">Total</span><span className="h5 fw-bold mb-0">${total.toFixed(2)}</span></div>
                    <button type="submit" className="btn btn-primary btn-lg w-100" disabled={placing}>{placing ? "Placing Order..." : "Place Order"}</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
