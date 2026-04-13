import Link from "next/link";

export const metadata = { title: "Contact Us - FoodMart" };

export default function ContactPage() {
  return (
    <>
      <div className="container-fluid"><nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Contact</li></ol></nav></div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="text-center mb-5"><h2 className="display-5 fw-bold">Get in Touch</h2><p className="text-muted mx-auto" style={{ maxWidth: 600 }}>Have questions? We&apos;d love to hear from you.</p></div>
          <div className="row g-4 mb-5">
            {[["Our Location", "123 Grocery Lane\nFresh City, FC 10001"], ["Phone Number", "+980-34984089\nMon - Fri: 9am - 6pm"], ["Email Address", "info@foodmart.com\nsupport@foodmart.com"]].map(([title, info], i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100"><div className="card-body"><h5 className="fw-bold">{title}</h5><p className="text-muted mb-0" style={{ whiteSpace: "pre-line" }}>{info}</p></div></div>
              </div>
            ))}
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm rounded-4"><div className="card-body p-4">
                <h4 className="fw-bold mb-4">Send us a Message</h4>
                <form><div className="row g-3">
                  <div className="col-sm-6"><label className="form-label">Name *</label><input type="text" className="form-control" required /></div>
                  <div className="col-sm-6"><label className="form-label">Email *</label><input type="email" className="form-control" required /></div>
                  <div className="col-12"><label className="form-label">Subject *</label><select className="form-select" required><option value="">Choose...</option><option>General Inquiry</option><option>Order Support</option><option>Returns</option><option>Feedback</option></select></div>
                  <div className="col-12"><label className="form-label">Message *</label><textarea className="form-control" rows={5} required></textarea></div>
                  <div className="col-12"><button type="submit" className="btn btn-primary btn-lg px-5">Send Message</button></div>
                </div></form>
              </div></div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <div className="bg-light d-flex align-items-center justify-content-center h-100" style={{ minHeight: 400 }}>
                  <div className="text-center p-5"><h5 className="fw-bold">Interactive Map</h5><p className="text-muted">Google Maps integration placeholder<br />123 Grocery Lane, Fresh City</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="text-center mb-5"><h3 className="display-6 fw-bold">FAQ</h3></div>
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faq">
                {[["What are your delivery hours?", "We deliver from 8:00 AM to 9:00 PM, seven days a week."], ["What is your return policy?", "Request a refund or replacement within 24 hours of delivery."], ["Do you offer free delivery?", "Yes! Orders over $50 qualify for free delivery. Under $50, a flat $5 fee applies."], ["How can I track my order?", "You'll receive a tracking email once dispatched. Also track from My Account."]].map(([q, a], i) => (
                  <div className="accordion-item border-0 mb-3 shadow-sm rounded-3" key={i}>
                    <h2 className="accordion-header"><button className={`accordion-button ${i > 0 ? "collapsed" : ""} rounded-3`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>{q}</button></h2>
                    <div id={`faq${i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} data-bs-parent="#faq"><div className="accordion-body text-muted">{a}</div></div>
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
