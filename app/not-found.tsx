import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center py-5">
            <h1 className="fw-bold mb-0" style={{ fontSize: 150, color: "#FFC43F", lineHeight: 1 }}>404</h1>
            <h2 className="display-6 fw-bold mb-3">Page Not Found</h2>
            <p className="lead text-muted mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <div className="card border-0 shadow-sm rounded-4 mb-4 mx-auto" style={{ maxWidth: 500 }}>
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3">Try searching:</h6>
                <form className="d-flex gap-0" action="/shop">
                  <input className="form-control rounded-start rounded-0" type="text" name="q" placeholder="Search products, categories..." />
                  <button className="btn btn-primary rounded-end rounded-0" type="submit">Search</button>
                </form>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
              <Link href="/" className="btn btn-primary btn-lg">Go to Homepage</Link>
              <Link href="/shop" className="btn btn-outline-dark btn-lg">Browse Shop</Link>
              <Link href="/contact" className="btn btn-outline-dark btn-lg">Contact Us</Link>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold mb-3">Popular Categories</h5>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {["Fruits & Vegetables", "Dairy & Eggs", "Bakery", "Beverages", "Snacks", "Meat & Seafood"].map((cat, i) => (
                  <Link href="/shop" className="btn btn-sm btn-warning rounded-pill px-3" key={i}>{cat}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
