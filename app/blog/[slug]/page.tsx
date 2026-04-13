import { blogPosts, getPostBySlug } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <div className="container-fluid"><nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/blog">Blog</Link></li><li className="breadcrumb-item active">{post.title}</li></ol></nav></div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <article>
                <Image src={post.image} alt={post.title} width={900} height={400} className="img-fluid rounded-4 mb-4 w-100" style={{ maxHeight: 400, objectFit: "cover" }} />
                <div className="d-flex gap-3 text-muted small mb-3">
                  <span>{post.date}</span><span>By {post.author}</span><span>{post.readTime}</span><span>{post.category}</span>
                </div>
                <h1 className="display-6 fw-bold mb-4">{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Author Box */}
                <div className="card border-0 shadow-sm rounded-4 mt-4">
                  <div className="card-body p-4">
                    <div className="d-flex gap-3 align-items-center">
                      <Image src={post.authorImage} alt={post.author} width={80} height={80} className="rounded-circle" style={{ objectFit: "cover" }} />
                      <div>
                        <h5 className="fw-bold mb-1">{post.author}</h5>
                        <p className="text-muted mb-0">Food writer and nutrition enthusiast passionate about helping people make better food choices.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="mt-5">
                  <h4 className="fw-bold mb-4">Leave a Comment</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6"><input type="text" className="form-control" placeholder="Your Name *" /></div>
                      <div className="col-md-6"><input type="email" className="form-control" placeholder="Your Email *" /></div>
                      <div className="col-12"><textarea className="form-control" rows={5} placeholder="Your Comment *"></textarea></div>
                      <div className="col-12"><button type="submit" className="btn btn-primary btn-lg">Post Comment</button></div>
                    </div>
                  </form>
                </div>
              </article>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3">Other Posts</h5>
                {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                  <div className="d-flex gap-3 mb-3 pb-3 border-bottom" key={p.id}>
                    <Image src={p.image} alt="" width={80} height={60} className="rounded-3" style={{ objectFit: "cover" }} />
                    <div><h6 className="mb-1 small fw-bold"><Link href={`/blog/${p.slug}`} className="text-decoration-none text-dark">{p.title}</Link></h6><span className="text-muted small">{p.date}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
