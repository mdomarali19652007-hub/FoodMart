export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  qty: string;
  discount?: number;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  { id: 1, name: "Fresh Avocado", slug: "fresh-avocado", price: 5.99, originalPrice: 7.99, image: "/images/thumb-avocado.png", category: "Fruits & Vegetables", rating: 4.8, qty: "1 Unit", discount: 25, description: "Fresh organic avocados sourced directly from local farms. Rich in healthy fats and nutrients.", inStock: true },
  { id: 2, name: "Fresh Bananas", slug: "fresh-bananas", price: 3.49, image: "/images/thumb-bananas.png", category: "Fruits & Vegetables", rating: 4.5, qty: "1 Bunch", discount: 20, description: "Perfectly ripe bananas, great for smoothies, baking, or snacking.", inStock: true },
  { id: 3, name: "Organic Fresh Milk", slug: "organic-fresh-milk", price: 4.99, image: "/images/thumb-milk.png", category: "Dairy & Eggs", rating: 4.7, qty: "1 Liter", description: "Pure organic milk from grass-fed cows. No hormones or antibiotics.", inStock: true },
  { id: 4, name: "Heinz Tomato Ketchup", slug: "heinz-tomato-ketchup", price: 6.49, originalPrice: 7.99, image: "/images/thumb-tomatoketchup.png", category: "Condiments", rating: 4.3, qty: "500ml", discount: 15, description: "The classic Heinz ketchup made with vine-ripened tomatoes.", inStock: true },
  { id: 5, name: "Fresh Orange Juice", slug: "fresh-orange-juice", price: 7.99, image: "/images/thumb-orange-juice.png", category: "Drinks & Beverages", rating: 4.6, qty: "1 Liter", description: "Freshly squeezed orange juice with no added sugar or preservatives.", inStock: true },
  { id: 6, name: "Fresh Cucumber", slug: "fresh-cucumber", price: 2.99, image: "/images/thumb-cucumber.png", category: "Fruits & Vegetables", rating: 4.2, qty: "500g", description: "Crisp and fresh cucumbers, perfect for salads and sandwiches.", inStock: true },
  { id: 7, name: "Fresh Raspberries", slug: "fresh-raspberries", price: 8.49, originalPrice: 11.99, image: "/images/thumb-raspberries.png", category: "Fruits & Vegetables", rating: 4.9, qty: "250g", discount: 30, description: "Sweet and juicy raspberries, hand-picked for the best quality.", inStock: true },
  { id: 8, name: "Chocolate Biscuits", slug: "chocolate-biscuits", price: 4.29, image: "/images/thumb-biscuits.png", category: "Snacks & Biscuits", rating: 4.4, qty: "200g", description: "Rich chocolate biscuits perfect for tea time or snacking.", inStock: true },
  { id: 9, name: "Fresh Tomatoes", slug: "fresh-tomatoes", price: 4.99, image: "/images/thumb-tomatoes.png", category: "Fruits & Vegetables", rating: 4.6, qty: "1 kg", description: "Vine-ripened tomatoes bursting with flavor.", inStock: true },
  { id: 10, name: "Pure Honey", slug: "pure-honey", price: 12.99, image: "/images/thumb-honey.jpg", category: "Condiments", rating: 4.8, qty: "500g", description: "Raw, unfiltered honey sourced from local beekeepers.", inStock: true },
  { id: 11, name: "Fresh Herb Mix", slug: "fresh-herb-mix", price: 3.99, image: "/images/thumb-herb.jpg", category: "Fruits & Vegetables", rating: 4.3, qty: "100g", description: "A mix of fresh basil, parsley, and cilantro for cooking.", inStock: true },
  { id: 12, name: "Canned Tuna", slug: "canned-tuna", price: 5.49, image: "/images/thumb-tuna.jpg", category: "Meat & Seafood", rating: 4.1, qty: "200g", description: "Premium quality canned tuna in olive oil.", inStock: false },
];

export const categories = [
  { name: "Fruits & Vegetables", icon: "/images/icon-vegetables-broccoli.png", count: 45 },
  { name: "Breads & Bakery", icon: "/images/icon-bread-baguette.png", count: 22 },
  { name: "Drinks & Beverages", icon: "/images/icon-soft-drinks-bottle.png", count: 38 },
  { name: "Wine & Spirits", icon: "/images/icon-wine-glass-bottle.png", count: 12 },
  { name: "Meat & Seafood", icon: "/images/icon-animal-products-drumsticks.png", count: 14 },
  { name: "Flour & Spices", icon: "/images/icon-bread-herb-flour.png", count: 19 },
  { name: "Dairy & Eggs", icon: "/images/icon-vegetables-broccoli.png", count: 17 },
  { name: "Snacks & Biscuits", icon: "/images/icon-vegetables-broccoli.png", count: 29 },
  { name: "Condiments", icon: "/images/icon-vegetables-broccoli.png", count: 15 },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
