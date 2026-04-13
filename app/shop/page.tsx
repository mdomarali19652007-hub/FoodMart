import { products, categories } from "@/data/products";
import ProductGrid from "../ProductGrid";
import Link from "next/link";

export const metadata = { title: "Shop - FoodMart" };

export default function ShopPage() {
  return (
    <>
      <div className="container-fluid">
        <nav className="breadcrumb-nav my-4" aria-label="breadcrumb">
          <ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Shop</li></ol>
        </nav>
      </div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop-sidebar mb-4">
                <div className="widget mb-4">
                  <h5 className="fw-bold mb-3">Categories</h5>
                  <ul className="list-unstyled">
                    {categories.map((cat, i) => (
                      <li className="mb-2" key={i}><Link href="/shop" className="nav-link d-flex justify-content-between"><span>{cat.name}</span><span className="badge bg-light text-dark rounded-pill">{cat.count}</span></Link></li>
                    ))}
                  </ul>
                </div>
                <div className="widget mb-4">
                  <h5 className="fw-bold mb-3">Price Range</h5>
                  {["Under $5", "$5 - $10", "$10 - $25", "$25 & Above"].map((p, i) => (
                    <div className="form-check mb-2" key={i}><input className="form-check-input" type="checkbox" id={`price${i}`} /><label className="form-check-label" htmlFor={`price${i}`}>{p}</label></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="text-muted mb-0">Showing {products.length} products</p>
                <select className="form-select w-auto"><option>Sort by: Default</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Best Rating</option></select>
              </div>
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
