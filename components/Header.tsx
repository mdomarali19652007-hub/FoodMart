"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";

export default function Header() {
  const { items, subtotal, totalItems } = useCart();

  return (
    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <Link href="/"><Image src="/images/logo.png" alt="FoodMart" width={160} height={40} className="img-fluid" /></Link>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-11 col-md-7">
                <form className="text-center" action="/shop">
                  <input type="text" name="q" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                </form>
              </div>
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 text-muted">For Support?</span>
              <h5 className="mb-0">+980-34984089</h5>
            </div>
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li><Link href="/account" className="rounded-circle bg-light p-2 mx-1"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/></svg></Link></li>
              <li><Link href="/shop" className="rounded-circle bg-light p-2 mx-1"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"/></svg></Link></li>
              <li className="d-lg-none"><Link href="/cart" className="rounded-circle bg-light p-2 mx-1 position-relative"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"/></svg>{totalItems > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize:'0.6rem'}}>{totalItems}</span>}</Link></li>
            </ul>
            <div className="cart text-end d-none d-lg-block">
              <Link href="/cart" className="border-0 bg-transparent d-flex flex-column gap-2 lh-1 text-decoration-none">
                <span className="fs-6 text-muted">Your Cart ({totalItems})</span>
                <span className="cart-total fs-5 fw-bold">${subtotal.toFixed(2)}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row py-3">
          <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
            <nav className="main-menu d-flex navbar navbar-expand-lg">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <select className="filter-categories border-0 mb-0 me-5">
                  <option>Shop by Departments</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
                <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                  <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link href="/shop" className="nav-link">Shop</Link></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li><Link href="/about" className="dropdown-item">About Us</Link></li>
                      <li><Link href="/shop" className="dropdown-item">Shop</Link></li>
                      <li><Link href="/product/fresh-avocado" className="dropdown-item">Single Product</Link></li>
                      <li><Link href="/cart" className="dropdown-item">Cart</Link></li>
                      <li><Link href="/checkout" className="dropdown-item">Checkout</Link></li>
                      <li><Link href="/blog" className="dropdown-item">Blog</Link></li>
                      <li><Link href="/blog/tips-freshest-produce" className="dropdown-item">Single Post</Link></li>
                      <li><Link href="/styles" className="dropdown-item">Styles</Link></li>
                      <li><Link href="/contact" className="dropdown-item">Contact</Link></li>
                      <li><Link href="/thankyou" className="dropdown-item">Thank You</Link></li>
                      <li><Link href="/account" className="dropdown-item">My Account</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link href="/blog" className="nav-link">Blog</Link></li>
                  <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
