import type { Metadata } from "next";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SvgDefs from "@/components/SvgDefs";
import OffcanvasCart from "@/components/OffcanvasCart";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodMart - Online Grocery Store",
  description: "FoodMart - Your one-stop shop for fresh groceries, produce, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="/css/vendor.css" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <SvgDefs />
          <OffcanvasCart />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous" strategy="beforeInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script id="init-swiper" strategy="afterInteractive">{`
          if (typeof Swiper !== 'undefined') {
            new Swiper(".main-swiper", { speed: 500, pagination: { el: ".swiper-pagination", clickable: true } });
            new Swiper(".category-carousel", { slidesPerView: 6, spaceBetween: 30, speed: 500, navigation: { nextEl: ".category-carousel-next", prevEl: ".category-carousel-prev" }, breakpoints: { 0: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 991: { slidesPerView: 4 }, 1500: { slidesPerView: 6 } } });
            new Swiper(".brand-carousel", { slidesPerView: 4, spaceBetween: 30, speed: 500, navigation: { nextEl: ".brand-carousel-next", prevEl: ".brand-carousel-prev" }, breakpoints: { 0: { slidesPerView: 2 }, 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 }, 1500: { slidesPerView: 4 } } });
            new Swiper(".products-carousel", { slidesPerView: 5, spaceBetween: 30, speed: 500, navigation: { nextEl: ".products-carousel-next", prevEl: ".products-carousel-prev" }, breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 991: { slidesPerView: 4 }, 1500: { slidesPerView: 5 } } });
          }
        `}</Script>
      </body>
    </html>
  );
}
