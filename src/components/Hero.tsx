import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7283209/pexels-photo-7283209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Craft workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-800/70 to-stone-900/80" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-8 animate-bounce" style={{ animationDelay: "0.3s" }}>
        <div className="w-12 h-12 rounded-full bg-amber-400/30 backdrop-blur-sm flex items-center justify-center border border-amber-400/40">
          <Heart className="w-5 h-5 text-amber-300" />
        </div>
      </div>
      <div className="absolute top-32 right-12 animate-bounce" style={{ animationDelay: "0.7s" }}>
        <div className="w-10 h-10 rounded-full bg-rose-400/30 backdrop-blur-sm flex items-center justify-center border border-rose-400/40">
          <Star className="w-4 h-4 text-rose-300" />
        </div>
      </div>
      <div className="absolute bottom-40 left-16 animate-bounce" style={{ animationDelay: "1s" }}>
        <div className="w-10 h-10 rounded-full bg-yellow-400/30 backdrop-blur-sm flex items-center justify-center border border-yellow-400/40">
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-amber-200 text-sm font-medium">100% Handmade with Love</span>
        </div>

        <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Where Every Piece
          <br />
          <span className="text-amber-400 italic">Tells a Story</span>
        </h1>

        <p className="text-stone-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover one-of-a-kind handmade drawings, paper scoring art, and DIY
          treasures crafted by passionate artisans. Each piece is made with care,
          creativity, and soul.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all shadow-lg hover:shadow-amber-500/40 hover:scale-105"
          >
            Explore Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-105"
          >
            How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Handmade Items" },
            { value: "120+", label: "Happy Buyers" },
            { value: "50+", label: "Artisans" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
            >
              <p className="text-2xl font-bold text-amber-400 font-playfair">{stat.value}</p>
              <p className="text-xs text-stone-300 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 52C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#fffbeb"
          />
        </svg>
      </div>
    </section>
  );
}
