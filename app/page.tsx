import { products, categories } from "@/data/products";
import { blogPosts } from "@/data/blog-posts";
import ProductGrid from "./ProductGrid";
import ProductsCarousel from "./ProductsCarousel";
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

      {/* 25% Discount Section */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="bg-secondary py-5 my-5 rounded-5" style={{ background: "url('/images/bg-leaves-img-pattern.png') no-repeat" }}>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-6 p-5">
                  <div className="section-header">
                    <h2 className="section-title display-4">Get <span className="text-primary">25% Discount</span> on your first purchase</h2>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
                </div>
                <div className="col-md-6 p-5">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control form-control-lg" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="abc@mail.com" />
                    </div>
                    <div className="form-check form-check-inline mb-3">
                      <label className="form-check-label" htmlFor="subscribe">
                        <input className="form-check-input" type="checkbox" id="subscribe" value="subscribe" />
                        Subscribe to the newsletter
                      </label>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Popular Products Carousel */}
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex justify-content-between">
                <h2 className="section-title">Most popular products</h2>
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
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </section>

      {/* Just Arrived Carousel */}
      <section className="py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex justify-content-between">
                <h2 className="section-title">Just arrived</h2>
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
              <ProductsCarousel products={[...products].reverse()} />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog */}
      <section id="latest-blog" className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="section-header d-flex align-items-center justify-content-between my-5">
              <h2 className="section-title">Our Recent Blog</h2>
              <div className="btn-wrap align-right">
                <Link href="/blog" className="d-flex align-items-center nav-link">Read All Articles <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></Link>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.slice(0, 3).map((post) => (
              <div className="col-md-4" key={post.id}>
                <article className="post-item card border-0 shadow-sm p-3">
                  <div className="image-holder zoom-effect">
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.image} alt="post" className="card-img-top" />
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                      <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>{post.date}</div>
                      <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>{post.category}</div>
                    </div>
                    <div className="post-header">
                      <h3 className="post-title">
                        <Link href={`/blog/${post.slug}`} className="text-decoration-none">{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-5 my-5">
        <div className="container-fluid">
          <div className="bg-warning py-5 rounded-5" style={{ backgroundImage: "url('/images/bg-pattern-2.png') no-repeat" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img src="/images/phone.png" alt="phone" className="image-float img-fluid" />
                </div>
                <div className="col-md-8">
                  <h2 className="my-5">Shop faster with foodmart App</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <img src="/images/app-store.jpg" alt="app-store" />
                    <img src="/images/google-play.jpg" alt="google-play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People Also Looking For */}
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="my-5">People are also looking for</h2>
          {["Blue diamon almonds", "Angie's Boomchickapop Corn", "Salty kettle Corn", "Chobani Greek Yogurt", "Sweet Vanilla Yogurt", "Foster Farms Takeout Crispy wings", "Warrior Blend Organic", "Chao Cheese Creamy", "Chicken meatballs", "Blue diamon almonds", "Angie's Boomchickapop Corn", "Salty kettle Corn", "Chobani Greek Yogurt", "Sweet Vanilla Yogurt", "Foster Farms Takeout Crispy wings", "Warrior Blend Organic", "Chao Cheese Creamy", "Chicken meatballs"].map((tag, i) => (
            <Link href="/shop" className="btn btn-warning me-2 mb-2" key={i}>{tag}</Link>
          ))}
        </div>
      </section>

      {/* Features with Icons */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
            <div className="col">
              <div className="card mb-3 border-0">
                <div className="row">
                  <div className="col-md-2 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Z"/></svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body p-0">
                      <h5>Free delivery</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border-0">
                <div className="row">
                  <div className="col-md-2 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78Z"/></svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body p-0">
                      <h5>100% secure payment</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border-0">
                <div className="row">
                  <div className="col-md-2 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Z"/></svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body p-0">
                      <h5>Quality guarantee</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border-0">
                <div className="row">
                  <div className="col-md-2 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Z"/></svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body p-0">
                      <h5>Guaranteed savings</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 border-0">
                <div className="row">
                  <div className="col-md-2 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Z"/></svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body p-0">
                      <h5>Daily offers</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
