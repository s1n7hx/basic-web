import { useState } from "react";
import { Mail, Sparkles, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-amber-400" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-300 text-sm font-medium">Join the Crafty Community</span>
        </div>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
          Get Crafty <span className="text-amber-400 italic">Inspiration</span>
          <br />Delivered to You
        </h2>

        <p className="text-stone-300 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Subscribe to our newsletter for exclusive DIY tutorials, new product launches,
          artisan spotlights, and special offers — all about handmade goodness.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm backdrop-blur-sm"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 text-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-3 justify-center bg-emerald-500/20 border border-emerald-400/30 rounded-2xl px-8 py-5 max-w-md mx-auto">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <div className="text-left">
              <p className="text-white font-semibold">You're in! 🎉</p>
              <p className="text-emerald-300 text-sm">Thank you for subscribing. Crafty goodness is on its way!</p>
            </div>
          </div>
        )}

        {/* Trust line */}
        <p className="text-stone-500 text-xs mt-5">
          🔒 No spam, ever. Unsubscribe anytime. Trusted by 1,000+ craft lovers.
        </p>

        {/* Perks */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-sm mx-auto">
          {[
            { emoji: "🎨", label: "DIY Tutorials" },
            { emoji: "🛍️", label: "Exclusive Deals" },
            { emoji: "✨", label: "New Arrivals" },
          ].map((perk) => (
            <div
              key={perk.label}
              className="bg-white/5 border border-white/10 rounded-xl p-3"
            >
              <p className="text-2xl mb-1">{perk.emoji}</p>
              <p className="text-stone-400 text-xs font-medium">{perk.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
