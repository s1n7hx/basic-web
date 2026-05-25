import { useState } from "react";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import { CartItem } from "../App";

interface FeaturedProductsProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const allProducts = [
  {
    id: 1,
    name: "Floral Watercolor Portrait",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.9,
    reviews: 28,
    category: "Painted Art",
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    image: "https://images.pexels.com/photos/2543260/pexels-photo-2543260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Hand-painted watercolor floral art on premium 300gsm paper.",
  },
  {
    id: 2,
    name: "Pencil Sketch Set",
    price: 24.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 41,
    category: "Hand Drawings",
    badge: "New",
    badgeColor: "bg-emerald-500",
    image: "https://images.pexels.com/photos/3951826/pexels-photo-3951826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Original pencil sketches with fine details and textures.",
  },
  {
    id: 3,
    name: "Paper Scoring Art Piece",
    price: 19.99,
    originalPrice: 27.99,
    rating: 4.7,
    reviews: 19,
    category: "Paper Scoring",
    badge: "Sale",
    badgeColor: "bg-rose-500",
    image: "https://images.pexels.com/photos/27837185/pexels-photo-27837185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Geometric scored paper art — perfect for wall decor or gifting.",
  },
  {
    id: 4,
    name: "Complete DIY Craft Kit",
    price: 42.00,
    originalPrice: null,
    rating: 5.0,
    reviews: 15,
    category: "DIY Kits",
    badge: "Popular",
    badgeColor: "bg-violet-500",
    image: "https://images.pexels.com/photos/7869797/pexels-photo-7869797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Everything you need to create your own handmade crafts at home.",
  },
  {
    id: 5,
    name: "Colorful Marker Drawing",
    price: 29.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 22,
    category: "Hand Drawings",
    badge: "New",
    badgeColor: "bg-emerald-500",
    image: "https://images.pexels.com/photos/35597592/pexels-photo-35597592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Vibrant hand-drawn illustration using premium artist markers.",
  },
  {
    id: 6,
    name: "Handmade Scrapbook Album",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 31,
    category: "Scrapbooking",
    badge: "Sale",
    badgeColor: "bg-rose-500",
    image: "https://images.pexels.com/photos/16605273/pexels-photo-16605273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Custom handmade memory scrapbook — a perfect personal keepsake.",
  },
  {
    id: 7,
    name: "Mixed Media Collage",
    price: 38.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 17,
    category: "DIY Kits",
    badge: null,
    badgeColor: "",
    image: "https://images.pexels.com/photos/33808051/pexels-photo-33808051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Unique collage art combining paper, paint, and mixed textures.",
  },
  {
    id: 8,
    name: "Art Supply Starter Kit",
    price: 31.50,
    originalPrice: 40.00,
    rating: 4.7,
    reviews: 26,
    category: "DIY Kits",
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    image: "https://images.pexels.com/photos/19364657/pexels-photo-19364657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "A vibrant assortment of art supplies — perfect for beginners.",
  },
];

const filterTabs = ["All", "Hand Drawings", "Paper Scoring", "DIY Kits", "Painted Art", "Scrapbooking"];

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered =
    activeFilter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeFilter);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Featured Collection
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            Handpicked <span className="text-amber-500 italic">Masterpieces</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Every item is lovingly handmade by our community of talented artisans.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === tab
                  ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                  : "bg-amber-50 text-stone-600 hover:bg-amber-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-stone-100 h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id)
                          ? "text-rose-500 fill-rose-500"
                          : "text-stone-400"
                      }`}
                    />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <Eye className="w-4 h-4 text-stone-400" />
                  </button>
                </div>
                {/* Category tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/80 backdrop-blur-sm text-stone-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-stone-200 fill-stone-200"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-stone-400 ml-1">({product.reviews})</span>
                </div>

                <h3 className="font-playfair font-bold text-stone-800 text-base mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-stone-400 text-xs mb-3 line-clamp-2 flex-1">
                  {product.description}
                </p>

                {/* Price & Cart */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-amber-600">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-stone-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category,
                      })
                    }
                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-full text-xs font-semibold transition-colors shadow-sm hover:shadow-md"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all text-sm hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
