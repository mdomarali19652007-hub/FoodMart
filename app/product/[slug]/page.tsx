import { products, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import ProductGrid from "../../ProductGrid";

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <div className="container-fluid">
        <nav className="breadcrumb-nav my-4" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item"><Link href="/shop">Shop</Link></li>
            <li className="breadcrumb-item active">{product.name}</li>
          </ol>
        </nav>
      </div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="bg-light rounded-4 p-5 text-center" style={{ minHeight: 400 }}>
                <Image src={product.image} alt={product.name} width={350} height={350} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-info ps-lg-4">
                <span className={`badge ${product.inStock ? "bg-success" : "bg-danger"} mb-2`}>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                <h2 className="display-6 fw-bold">{product.name}</h2>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="text-warning">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</div>
                  <span className="text-muted">({product.rating} Rating)</span>
                </div>
                <div className="mb-3">
                  <span className="h3 fw-bold text-dark">${product.price.toFixed(2)}</span>
                  {product.originalPrice && <span className="text-muted text-decoration-line-through ms-2">${product.originalPrice.toFixed(2)}</span>}
                  {product.discount && <span className="badge bg-danger ms-2">{product.discount}% OFF</span>}
                </div>
                <p className="text-muted">{product.description}</p>
                <div className="mb-3"><strong>Category:</strong> {product.category}</div>
                <div className="mb-3"><strong>Quantity:</strong> {product.qty}</div>
                <AddToCartButton product={product} />
                <hr />
                <div className="row text-muted small">
                  <div className="col-6 mb-2"><strong>SKU:</strong> FM-{String(product.id).padStart(3, "0")}</div>
                  <div className="col-6 mb-2"><strong>Category:</strong> {product.category}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Tab */}
          <div className="row mt-5">
            <div className="col-12">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#desc" type="button">Description</button></li>
                <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#info" type="button">Additional Info</button></li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane fade show active" id="desc"><p>{product.description}</p><ul><li>100% quality guaranteed</li><li>Fresh from local farms</li><li>No artificial preservatives</li></ul></div>
                <div className="tab-pane fade" id="info">
                  <table className="table"><tbody><tr><th>Weight</th><td>{product.qty}</td></tr><tr><th>Origin</th><td>Local Farms</td></tr><tr><th>Storage</th><td>Store in a cool, dry place</td></tr></tbody></table>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="row mt-5">
              <div className="col-12"><h3 className="fw-bold mb-4">Related Products</h3></div>
              <ProductGrid products={related} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
