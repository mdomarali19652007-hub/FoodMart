import Link from "next/link";

export const metadata = { title: "Thank You - FoodMart" };

export default function ThankYouPage() {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center py-5">
            <div className="mb-4">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle" style={{ width: 120, height: 120 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className="text-success"><path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/></svg>
              </div>
            </div>
            <h1 className="display-4 fw-bold mb-3">Thank You!</h1>
            <p className="lead text-muted mb-4">Your order has been placed successfully. We&apos;ve sent a confirmation email with your order details.</p>
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Order Summary</h5>
                <div className="row text-start">
                  <div className="col-6 mb-2"><span className="text-muted">Order Number:</span></div><div className="col-6 mb-2 text-end fw-bold">#FM-{Date.now().toString().slice(-7)}</div>
                  <div className="col-6 mb-2"><span className="text-muted">Date:</span></div><div className="col-6 mb-2 text-end">{new Date().toLocaleDateString()}</div>
                  <div className="col-6 mb-2"><span className="text-muted">Payment:</span></div><div className="col-6 mb-2 text-end">Credit Card</div>
                  <div className="col-6 mb-2"><span className="text-muted">Delivery:</span></div><div className="col-6 mb-2 text-end">Standard (3-5 days)</div>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3">What&apos;s Next?</h6>
                <div className="row g-3">
                  {[["1", "Order confirmed"], ["2", "Shipped to you"], ["3", "Delivered"]].map(([num, text], i) => (
                    <div className="col-md-4 text-center" key={i}>
                      <div className={`d-inline-flex align-items-center justify-content-center rounded-circle ${i === 0 ? "bg-primary-subtle" : "bg-light"} mb-2`} style={{ width: 50, height: 50 }}><span className="fw-bold">{num}</span></div>
                      <p className="small text-muted mb-0">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <Link href="/account" className="btn btn-outline-dark btn-lg">Track Order</Link>
              <Link href="/shop" className="btn btn-primary btn-lg">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
