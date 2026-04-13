import Link from "next/link";
import Image from "next/image";
import { products, categories } from "@/data/products";
import ProductGrid from "./ProductGrid";

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="py-3" style={{ backgroundImage: "url('/images/background-pattern.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-blocks">
                <div className="banner-ad large bg-info block-1">
                  <div className="row banner-content p-5" style={{ minHeight: 400 }}>
                    <div className="content-wrapper col-md-7">
                      <div className="categories my-3" style={{ fontFamily: "Garamond", fontSize: 37, color: "#FFC43F" }}>100% natural</div>
                      <h3 className="display-4 fw-bold">Fresh Smoothie &amp; Summer Juice</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                      <Link href="/shop" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</Link>
                    </div>
                    <div className="img-wrapper col-md-5 text-center">
                      <Image src="/images/product-thumb-1.png" alt="Fresh Smoothie" width={300} height={300} className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="banner-ad bg-success-subtle block-2" style={{ background: "url('/images/ad-image-1.png') no-repeat right bottom" }}>
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">20% off</div>
                      <h3 className="banner-title">Fruits &amp; Vegetables</h3>
                      <Link href="/shop" className="d-flex align-items-center nav-link">Shop Collection &rarr;</Link>
                    </div>
                  </div>
                </div>
                <div className="banner-ad bg-danger block-3" style={{ background: "url('/images/ad-image-2.png') no-repeat right bottom" }}>
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">15% off</div>
                      <h3>Baked Products</h3>
                      <Link href="/shop" className="d-flex align-items-center nav-link">Shop Collection &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="section-header d-flex flex-wrap justify-content-between mb-5">
            <h2 className="section-title">Category</h2>
            <Link href="/shop" className="btn-link text-decoration-none">View All Categories &rarr;</Link>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
            {categories.slice(0, 6).map((cat, i) => (
              <div className="col" key={i}>
                <Link href="/shop" className="nav-link category-item text-center d-block">
                  <Image src={cat.icon} alt={cat.name} width={60} height={60} />
                  <h3 className="category-title mt-2">{cat.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="section-header d-flex flex-wrap justify-content-between mb-5">
            <h2 className="section-title">Best Selling Products</h2>
            <Link href="/shop" className="btn-link text-decoration-none">View All Products &rarr;</Link>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Ad Banners */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="rounded-4 p-5 position-relative overflow-hidden" style={{ background: "#e6f3fb", minHeight: 250 }}>
                <h3 className="fw-bold">Fresh Fruits<br />Collection</h3>
                <p className="text-muted">Up to 30% off on selected items</p>
                <Link href="/shop" className="btn btn-dark text-uppercase">Shop Now</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rounded-4 p-5 position-relative overflow-hidden" style={{ background: "#FFF9EB", minHeight: 250 }}>
                <h3 className="fw-bold">Organic<br />Vegetables</h3>
                <p className="text-muted">Farm fresh delivered daily</p>
                <Link href="/shop" className="btn btn-dark text-uppercase">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
            {[
              { title: "Free delivery", desc: "Free shipping on orders over $50" },
              { title: "100% secure payment", desc: "Your payment information is safe" },
              { title: "Quality guarantee", desc: "We ensure the highest quality" },
              { title: "Guaranteed savings", desc: "Best prices on all products" },
              { title: "Daily offers", desc: "New deals every single day" },
            ].map((f, i) => (
              <div className="col" key={i}>
                <div className="card mb-3 border-0">
                  <div className="card-body p-0">
                    <h5>{f.title}</h5>
                    <p className="card-text text-muted small">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
