import { products, categories } from "@/data/products";
import ProductGrid from "./ProductGrid";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Banner Section */}
      <section className="py-3" style={{ backgroundImage: "url('/images/background-pattern.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">

              <div className="banner-blocks">

                <div className="banner-ad large bg-info block-1">
                  <div className="swiper main-swiper">
                    <div className="swiper-wrapper">

                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories my-3">100% natural</div>
                            <h3 className="display-4">Fresh Smoothie &amp; Summer Juice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <Link href="/shop" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</Link>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img src="/images/product-thumb-1.png" className="img-fluid" alt="Fresh Smoothie" />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories mb-3 pb-3">100% natural</div>
                            <h3 className="banner-title">Fresh Smoothie &amp; Summer Juice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <Link href="/shop" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</Link>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img src="/images/product-thumb-1.png" className="img-fluid" alt="Fresh Smoothie" />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="row banner-content p-5">
                          <div className="content-wrapper col-md-7">
                            <div className="categories mb-3 pb-3">100% natural</div>
                            <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <Link href="/shop" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</Link>
                          </div>
                          <div className="img-wrapper col-md-5">
                            <img src="/images/product-thumb-2.png" className="img-fluid" alt="Heinz Ketchup" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-pagination"></div>
                  </div>
                </div>

                <div className="banner-ad bg-success-subtle block-2" style={{ background: "url('/images/ad-image-1.png') no-repeat right bottom" }}>
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">20% off</div>
                      <h3 className="banner-title">Fruits &amp; Vegetables</h3>
                      <Link href="/shop" className="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></Link>
                    </div>
                  </div>
                </div>

                <div className="banner-ad bg-danger block-3" style={{ background: "url('/images/ad-image-2.png') no-repeat right bottom" }}>
                  <div className="row banner-content p-5">
                    <div className="content-wrapper col-md-7">
                      <div className="categories sale mb-3 pb-3">15% off</div>
                      <h3 className="item-title">Baked Products</h3>
                      <Link href="/shop" className="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></Link>
                    </div>
                  </div>
                </div>

              </div>
              {/* / Banner Blocks */}

            </div>
          </div>
        </div>
      </section>

      {/* Category Carousel */}
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Category</h2>
                <div className="d-flex align-items-center">
                  <Link href="/shop" className="btn-link text-decoration-none">View All Categories &rarr;</Link>
                  <div className="swiper-buttons">
                    <button className="swiper-prev category-carousel-prev btn btn-yellow">&lsaquo;</button>
                    <button className="swiper-next category-carousel-next btn btn-yellow">&rsaquo;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="category-carousel swiper">
                <div className="swiper-wrapper">
                  {categories.map((cat, i) => (
                    <Link href="/shop" className="nav-link category-item swiper-slide" key={i}>
                      <img src={cat.icon} alt={cat.name} />
                      <h3 className="category-title">{cat.name}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Newly Arrived Brands</h2>
                <div className="d-flex align-items-center">
                  <Link href="/shop" className="btn-link text-decoration-none">View All Categories &rarr;</Link>
                  <div className="swiper-buttons">
                    <button className="swiper-prev brand-carousel-prev btn btn-yellow">&lsaquo;</button>
                    <button className="swiper-next brand-carousel-next btn btn-yellow">&rsaquo;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="brand-carousel swiper">
                <div className="swiper-wrapper">
                  {[
                    { img: "/images/product-thumb-11.jpg", label: "Amber Jar", title: "Honey best nectar you wish to get" },
                    { img: "/images/product-thumb-12.jpg", label: "Amber Jar", title: "Honey best nectar you wish to get" },
                    { img: "/images/product-thumb-13.jpg", label: "Amber Jar", title: "Creamy muffins with chocolate" },
                    { img: "/images/product-thumb-14.jpg", label: "Amber Jar", title: "Fresh orange juice collection" },
                  ].map((brand, i) => (
                    <div className="swiper-slide" key={i}>
                      <div className="card mb-3 p-3 rounded-4 shadow border-0">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={brand.img} className="img-fluid rounded" alt={brand.title} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body py-0">
                              <p className="text-muted mb-0">{brand.label}</p>
                              <h5 className="card-title">{brand.title}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="bootstrap-tabs product-tabs">
                <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                  <h3>Trending Products</h3>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a href="#" className="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</a>
                      <a href="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Fruits &amp; Veges</a>
                      <a href="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Juices</a>
                    </div>
                  </nav>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                    <ProductGrid products={products} />
                  </div>
                  <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">
                    <ProductGrid products={products.filter(p => p.category === "Fruits & Vegetables")} />
                  </div>
                  <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">
                    <ProductGrid products={products.filter(p => p.category === "Drinks & Beverages")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banners */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-ad bg-danger mb-3" style={{ background: "url('/images/ad-image-3.png') no-repeat right bottom" }}>
                <div className="banner-content p-5">
                  <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                  <h3 className="banner-title">Luxa Dark Chocolate</h3>
                  <p>Very tasty &amp; creamy vanilla flavour creamy muffins.</p>
                  <Link href="/shop" className="btn btn-dark text-uppercase">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-ad bg-info" style={{ background: "url('/images/ad-image-4.png') no-repeat right bottom" }}>
                <div className="banner-content p-5">
                  <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                  <h3 className="banner-title">Creamy Muffins</h3>
                  <p>Very tasty &amp; creamy vanilla flavour creamy muffins.</p>
                  <Link href="/shop" className="btn btn-dark text-uppercase">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products Carousel */}
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-5">
                <h2 className="section-title">Best selling products</h2>
                <div className="d-flex align-items-center">
                  <Link href="/shop" className="btn-link text-decoration-none">View All Categories &rarr;</Link>
                  <div className="swiper-buttons">
                    <button className="swiper-prev products-carousel-prev btn btn-primary">&lsaquo;</button>
                    <button className="swiper-next products-carousel-next btn btn-primary">&rsaquo;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="products-carousel swiper">
                <div className="swiper-wrapper">
                  {products.slice(0, 8).map(product => (
                    <div className="product-item swiper-slide" key={product.id}>
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
                        <Link href="/cart" className="nav-link">Add to Cart</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
            {[
              { title: "Free delivery", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
              { title: "100% secure payment", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
              { title: "Quality guarantee", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
              { title: "Guaranteed savings", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
              { title: "Daily offers", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
            ].map((f, i) => (
              <div className="col" key={i}>
                <div className="card mb-3 border-0">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>{f.title}</h5>
                        <p className="card-text">{f.desc}</p>
                      </div>
                    </div>
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
