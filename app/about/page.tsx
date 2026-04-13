import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About Us - FoodMart" };

export default function AboutPage() {
  return (
    <>
      <div className="container-fluid"><nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">About Us</li></ol></nav></div>
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image src="/images/banner-image-1.jpg" alt="About FoodMart" width={600} height={400} className="img-fluid rounded-4" />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Welcome to FoodMart</h2>
              <p className="lead text-muted">We are dedicated to providing the freshest groceries and finest quality food products. With over 20,000 products, FoodMart is your one-stop shop.</p>
              <p>Founded in 2020, FoodMart has grown from a small local store to a trusted online grocery marketplace, partnering with local farmers and top brands.</p>
              <div className="row mt-4">
                {[["20K+", "Products"], ["15K+", "Customers"], ["200+", "Partners"]].map(([num, label], i) => (
                  <div className="col-sm-4 text-center mb-3" key={i}><h3 className="fw-bold text-primary display-6">{num}</h3><p className="text-muted">{label}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid">
          <div className="text-center mb-5"><h2 className="display-6 fw-bold">Our Mission</h2><p className="text-muted mx-auto" style={{ maxWidth: 600 }}>To make fresh, high-quality groceries accessible to everyone while supporting local communities.</p></div>
          <div className="row g-4">
            {[["Quality Guaranteed", "We rigorously inspect every product to ensure only the finest quality."], ["Fresh Daily", "Our produce is sourced and delivered fresh daily from local farms."], ["Community First", "We support local farmers and producers, strengthening our community."]].map(([title, desc], i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100"><div className="card-body"><h5 className="fw-bold">{title}</h5><p className="text-muted">{desc}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="text-center mb-5"><h2 className="display-6 fw-bold">Our Team</h2></div>
          <div className="row g-4">
            {[["John Smith", "CEO & Founder", "/images/reviewer-1.jpg"], ["Sarah Johnson", "Head of Operations", "/images/reviewer-2.jpg"], ["Mike Wilson", "Product Manager", "/images/reviewer-3.jpg"]].map(([name, role, img], i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm rounded-4 text-center h-100"><div className="card-body p-4">
                  <Image src={img} alt={name} width={120} height={120} className="rounded-circle mb-3" style={{ objectFit: "cover" }} />
                  <h5 className="fw-bold mb-1">{name}</h5><p className="text-primary mb-0">{role}</p>
                </div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
