export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1, title: "10 Tips for Choosing the Freshest Produce", slug: "tips-freshest-produce",
    excerpt: "Learn how to pick the freshest fruits and vegetables at the grocery store with these expert tips.",
    content: `<p class="lead">Selecting fresh produce is an art that can save you money and improve the quality of your meals.</p>
<h3>1. Check the Color</h3><p>Fresh produce should have vibrant, consistent colors. Avoid items that appear dull or have brown spots.</p>
<h3>2. Feel the Firmness</h3><p>Most fresh fruits and vegetables should feel firm to the touch. Avocados should yield slightly when ripe.</p>
<h3>3. Smell the Produce</h3><p>Fresh fruits often have a pleasant, sweet aroma at their stem end.</p>
<blockquote class="bg-light p-4 rounded-4 border-start border-4 border-warning my-4"><p class="mb-0 fst-italic">"The freshest produce comes from local farmers who harvest at peak ripeness."</p><footer class="mt-2 text-muted">- Dr. Sarah Mitchell, Nutritionist</footer></blockquote>
<h3>4. Buy in Season</h3><p>Seasonal produce is not only cheaper but also tastes better and contains more nutrients.</p>
<h3>5. Inspect the Skin</h3><p>Look for produce with smooth, unblemished skin for the best quality.</p>`,
    image: "/images/post-thumb-1.jpg", author: "John Smith", authorImage: "/images/reviewer-1.jpg",
    date: "March 15, 2024", readTime: "5 min read", category: "Healthy Eating"
  },
  {
    id: 2, title: "The Benefits of Organic Food for Your Family", slug: "benefits-organic-food",
    excerpt: "Discover why switching to organic groceries can make a significant difference in your family's health.",
    content: `<p class="lead">Organic food has become increasingly popular as families seek healthier alternatives.</p><p>Studies show that organic produce contains fewer pesticides and often more nutrients than conventionally grown alternatives. Making the switch doesn't have to be expensive if you know where to shop and what to prioritize.</p>`,
    image: "/images/post-thumb-2.jpg", author: "Sarah Johnson", authorImage: "/images/reviewer-2.jpg",
    date: "March 10, 2024", readTime: "7 min read", category: "Healthy Eating"
  },
  {
    id: 3, title: "Quick and Healthy Meal Prep Ideas", slug: "meal-prep-ideas",
    excerpt: "Save time and eat healthier with these simple meal prep strategies that anyone can follow.",
    content: `<p class="lead">Meal prepping is one of the best ways to save time and eat healthier throughout the week.</p><p>Start with simple recipes that store well and can be easily reheated. Focus on proteins, grains, and vegetables that maintain their texture and flavor.</p>`,
    image: "/images/post-thumb-3.jpg", author: "Mike Wilson", authorImage: "/images/reviewer-3.jpg",
    date: "March 5, 2024", readTime: "4 min read", category: "Recipes"
  },
  {
    id: 4, title: "Understanding Food Labels: A Complete Guide", slug: "food-labels-guide",
    excerpt: "Don't be confused by food labels anymore. Here's everything you need to know about nutrition facts.",
    content: `<p class="lead">Reading food labels is an essential skill for making informed dietary choices.</p><p>Learn to identify serving sizes, understand daily values, and spot hidden sugars and sodium in packaged foods.</p>`,
    image: "/images/banner-image-2.jpg", author: "John Smith", authorImage: "/images/reviewer-1.jpg",
    date: "Feb 28, 2024", readTime: "6 min read", category: "Tips & Tricks"
  },
  {
    id: 5, title: "Seasonal Fruits: What to Buy This Month", slug: "seasonal-fruits",
    excerpt: "Eating seasonally is good for both your wallet and the environment.",
    content: `<p class="lead">Seasonal eating is one of the simplest ways to improve your diet and reduce your carbon footprint.</p><p>Each season brings a unique selection of fruits and vegetables at their peak freshness and flavor.</p>`,
    image: "/images/banner-image-1.jpg", author: "Sarah Johnson", authorImage: "/images/reviewer-2.jpg",
    date: "Feb 20, 2024", readTime: "3 min read", category: "Tips & Tricks"
  },
  {
    id: 6, title: "How to Store Groceries for Maximum Freshness", slug: "store-groceries-freshness",
    excerpt: "Keep your groceries fresh longer with these storage tips and tricks.",
    content: `<p class="lead">Proper storage can extend the life of your groceries significantly.</p><p>Different produce items require different storage methods. Some thrive in the refrigerator while others do best at room temperature.</p>`,
    image: "/images/slide-1.jpg", author: "Mike Wilson", authorImage: "/images/reviewer-3.jpg",
    date: "Feb 15, 2024", readTime: "8 min read", category: "Tips & Tricks"
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
