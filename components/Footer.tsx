import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <Image src="/images/logo.png" alt="FoodMart" width={160} height={40} />
                <div className="social-links mt-5">
                  <ul className="d-flex list-unstyled gap-2">
                    <li><a href="#" className="btn btn-outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"/></svg></a></li>
                    <li><a href="#" className="btn btn-outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Z"/></svg></a></li>
                    <li><a href="#" className="btn btn-outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12Z"/></svg></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Quick Links</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item"><Link href="/about" className="nav-link">About us</Link></li>
                  <li className="menu-item"><Link href="/shop" className="nav-link">Shop</Link></li>
                  <li className="menu-item"><Link href="/blog" className="nav-link">Our Blog</Link></li>
                  <li className="menu-item"><Link href="/contact" className="nav-link">Contact</Link></li>
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
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">My Account</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item"><Link href="/account" className="nav-link">My Account</Link></li>
                  <li className="menu-item"><Link href="/cart" className="nav-link">View Cart</Link></li>
                  <li className="menu-item"><Link href="/checkout" className="nav-link">Checkout</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Subscribe Us</h5>
                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                <form className="d-flex mt-3 gap-0">
                  <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" />
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
            <div className="col-md-6 copyright"><p>&copy; 2024 Foodmart. All rights reserved.</p></div>
            <div className="col-md-6 credit-link text-start text-md-end"><p>Built with Next.js</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
