import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";

export const metadata = { title: "Blog - FoodMart" };

export default function BlogPage() {
  return (
    <>
      <div className="container-fluid"><nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Blog</li></ol></nav></div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                {blogPosts.map(post => (
                  <div className="col-md-6" key={post.id}>
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                      <Image src={post.image} alt={post.title} width={600} height={220} className="card-img-top" style={{ height: 220, objectFit: "cover" }} />
                      <div className="card-body p-4">
                        <div className="d-flex gap-3 text-muted small mb-2"><span>{post.date}</span><span>{post.readTime}</span></div>
                        <h5 className="fw-bold"><Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">{post.title}</Link></h5>
                        <p className="text-muted">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="btn btn-outline-dark btn-sm">Read More &rarr;</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3">Categories</h5>
                <ul className="list-unstyled mb-0">
                  {["Healthy Eating", "Recipes", "Tips & Tricks", "Sustainability"].map((cat, i) => (
                    <li className="mb-2" key={i}><Link href="/blog" className="nav-link">{cat}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3">Popular Posts</h5>
                {blogPosts.slice(0, 3).map(post => (
                  <div className="d-flex gap-3 mb-3 pb-3 border-bottom" key={post.id}>
                    <Image src={post.image} alt="" width={80} height={60} className="rounded-3" style={{ objectFit: "cover" }} />
                    <div><h6 className="mb-1 small fw-bold"><Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">{post.title}</Link></h6><span className="text-muted small">{post.date}</span></div>
                  </div>
                ))}
              </div>
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3">Tags</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["Organic", "Healthy", "Recipes", "Fresh", "Vegetables", "Fruits", "Cooking"].map((tag, i) => (
                    <Link href="/blog" className="btn btn-sm btn-outline-dark rounded-pill" key={i}>{tag}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
