import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Art Enthusiast",
    avatar: "https://images.pexels.com/photos/35597592/pexels-photo-35597592.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=80&w=80",
    rating: 5,
    text: "I ordered a custom watercolor portrait and it exceeded all my expectations! The detail and care put into this piece is incredible. It now hangs as the centerpiece of my living room.",
    product: "Watercolor Portrait",
  },
  {
    name: "James R.",
    role: "DIY Lover",
    avatar: "https://images.pexels.com/photos/7869802/pexels-photo-7869802.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=80&w=80",
    rating: 5,
    text: "The DIY craft kit is absolutely perfect. Everything was neatly packed and the instructions were so clear. My kids and I had the most amazing afternoon creating together!",
    product: "Complete DIY Craft Kit",
  },
  {
    name: "Priya K.",
    role: "Gift Buyer",
    avatar: "https://images.pexels.com/photos/3861715/pexels-photo-3861715.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=80&w=80",
    rating: 5,
    text: "Bought a handmade scrapbook as a birthday gift. The recipient was moved to tears — it was so personal and beautifully crafted. Will absolutely be ordering again soon!",
    product: "Handmade Scrapbook Album",
  },
  {
    name: "Emily T.",
    role: "Interior Designer",
    avatar: "https://images.pexels.com/photos/7605950/pexels-photo-7605950.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=80&w=80",
    rating: 5,
    text: "The paper scoring art piece is a true work of genius. The geometric patterns are so precise and elegant. It fits perfectly into the minimalist gallery wall I was designing for a client.",
    product: "Paper Scoring Art Piece",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Customer Love
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            What Our <span className="text-amber-500 italic">Customers Say</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Real stories from people who found their perfect handmade treasure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Product tag */}
              <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2.5 py-1 rounded-full self-start">
                {t.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-amber-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-amber-300"
                />
                <div>
                  <p className="font-bold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white shadow-lg">
          <p className="font-playfair text-3xl font-bold mb-2">⭐ 4.9 / 5.0 Average Rating</p>
          <p className="text-amber-100 text-sm">Based on 120+ verified customer reviews</p>
        </div>
      </div>
    </section>
  );
}
