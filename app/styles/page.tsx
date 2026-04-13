import Link from "next/link";

export const metadata = { title: "Style Guide - FoodMart" };

export default function StylesPage() {
  return (
    <>
      <div className="container-fluid"><nav className="breadcrumb-nav my-4"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item active">Style Guide</li></ol></nav></div>
      <section className="py-5">
        <div className="container-fluid">
          <h2 className="display-5 fw-bold mb-5">Style Guide</h2>

          <div className="mb-5">
            <h3 className="fw-bold border-bottom pb-3 mb-4">Typography</h3>
            <h1>Heading 1 - Nunito Bold</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>
            <p className="lead mt-4">Lead paragraph text for important introductions.</p>
            <p>Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p><strong>Bold</strong> | <em>Italic</em> | <Link href="#">Link</Link> | <small>Small</small></p>
          </div>

          <div className="mb-5">
            <h3 className="fw-bold border-bottom pb-3 mb-4">Colors</h3>
            <div className="row g-3">
              {[["#FFC43F", "Primary", true], ["#222222", "Dark", true], ["#f8f8f8", "Light", false], ["#a3be4c", "Success", true], ["#FFEADA", "Danger", false], ["#e6f3fb", "Info", false]].map(([bg, name, isWhite], i) => (
                <div className="col-md-2 col-4" key={i}><div className={`rounded-4 p-4 text-center ${isWhite ? "text-white" : ""}`} style={{ background: bg as string }}>{name as string}<br /><small>{bg as string}</small></div></div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h3 className="fw-bold border-bottom pb-3 mb-4">Buttons</h3>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {["primary", "outline-primary", "dark", "outline-dark", "success", "danger", "warning"].map(v => (
                <button className={`btn btn-${v}`} key={v}>{v.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}</button>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-primary btn-lg">Large</button>
              <button className="btn btn-primary">Default</button>
              <button className="btn btn-primary btn-sm">Small</button>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="fw-bold border-bottom pb-3 mb-4">Form Elements</h3>
            <div className="row g-3">
              <div className="col-md-6"><label className="form-label">Text Input</label><input type="text" className="form-control" placeholder="Enter text..." /></div>
              <div className="col-md-6"><label className="form-label">Select</label><select className="form-select"><option>Option 1</option><option>Option 2</option></select></div>
              <div className="col-12"><label className="form-label">Textarea</label><textarea className="form-control" rows={3} placeholder="Enter message..."></textarea></div>
              <div className="col-12">
                <div className="form-check form-check-inline"><input className="form-check-input" type="checkbox" defaultChecked /><label className="form-check-label">Checkbox</label></div>
                <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="r" defaultChecked /><label className="form-check-label">Radio 1</label></div>
                <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="r" /><label className="form-check-label">Radio 2</label></div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="fw-bold border-bottom pb-3 mb-4">Badges &amp; Alerts</h3>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {["primary", "success", "danger", "warning", "info", "dark"].map(v => (
                <span className={`badge bg-${v} ${v === "warning" ? "text-dark" : ""}`} key={v}>{v}</span>
              ))}
              <span className="badge rounded-pill bg-primary">Pill</span>
            </div>
            {["primary", "success", "danger", "warning"].map(v => (
              <div className={`alert alert-${v}`} role="alert" key={v}>This is a {v} alert!</div>
            ))}
          </div>

          <div className="mb-5">
            <h3 className="fw-bold border-bottom pb-3 mb-4">Cards</h3>
            <div className="row g-4">
              <div className="col-md-4"><div className="card border-0 shadow-sm rounded-4"><div className="card-body"><h5 className="card-title fw-bold">Simple Card</h5><p className="card-text text-muted">Card with text content.</p><Link href="#" className="btn btn-primary btn-sm">Action</Link></div></div></div>
              <div className="col-md-4"><div className="card border-0 shadow-sm rounded-4 text-center"><div className="card-body p-4"><h5 className="fw-bold">Centered Card</h5><p className="text-muted">Centered layout variant.</p><Link href="#" className="btn btn-outline-dark btn-sm">Learn More</Link></div></div></div>
              <div className="col-md-4"><div className="card border-0 shadow-sm rounded-4 bg-primary text-white"><div className="card-body p-4"><h5 className="fw-bold">Colored Card</h5><p>Primary background for emphasis.</p><Link href="#" className="btn btn-dark btn-sm">Action</Link></div></div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
