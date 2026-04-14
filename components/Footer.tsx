import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <img src="/images/logo.png" alt="logo" />
                <div className="social-links mt-5">
                  <ul className="d-flex list-unstyled gap-2">
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"/></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Z"/></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z"/></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12Z"/></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Ultras</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item"><Link href="/about" className="nav-link">About us</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Conditions</Link></li>
                  <li className="menu-item"><Link href="/blog" className="nav-link">Our Journals</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Careers</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Affiliate Programme</Link></li>
                  <li className="menu-item"><Link href="/blog" className="nav-link">Ultras Press</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item"><Link href="/contact" className="nav-link">FAQ</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Contact</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Privacy Policy</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Returns &amp; Refunds</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Cookie Guidelines</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Delivery Information</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item"><Link href="/contact" className="nav-link">FAQ</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Contact</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Privacy Policy</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Returns &amp; Refunds</Link></li>
                  <li className="menu-item"><Link href="/about" className="nav-link">Cookie Guidelines</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Delivery Information</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Subscribe Us</h5>
                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                <form className="d-flex mt-3 gap-0" role="newsletter">
                  <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" aria-label="Email Address" />
                  <button className="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>&copy; 2023 Foodmart. All rights reserved.</p>
            </div>
            <div className="col-md-6 credit-link text-start text-md-end">
              <p>Free HTML Template by <a href="https://templatesjungle.com/">TemplatesJungle</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
