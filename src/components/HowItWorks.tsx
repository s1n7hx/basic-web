import { Search, ShoppingBag, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Discover",
    description:
      "Explore hundreds of handmade drawings, scoring art, and DIY treasures from talented artisans worldwide.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: ShoppingBag,
    step: "02",
    title: "Choose & Order",
    description:
      "Pick your favourite pieces, add them to cart, and place your order securely in just a few clicks.",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
  },
  {
    icon: Truck,
    step: "03",
    title: "Packed with Care",
    description:
      "Every item is carefully packed by the artisan to ensure it arrives safely and beautifully presented.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Smile,
    step: "04",
    title: "Enjoy & Share",
    description:
      "Receive your one-of-a-kind handmade creation and share the joy with friends and family.",
    color: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            How It <span className="text-amber-500 italic">Works</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Getting your perfect handmade piece is easy and delightful.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-200 via-rose-200 to-violet-200 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-9 h-9 text-white" />
                </div>

                {/* Step Number */}
                <span className="text-xs font-black text-stone-300 tracking-widest mb-2">
                  STEP {step.step}
                </span>

                <h3 className="font-playfair text-xl font-bold text-stone-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md border border-amber-100">
            <img
              src="https://images.pexels.com/photos/7605950/pexels-photo-7605950.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=80&w=120"
              alt="Crafting"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="text-left">
              <p className="font-playfair font-bold text-stone-800 text-lg">
                Ready to find your perfect piece?
              </p>
              <p className="text-stone-500 text-sm">Join 120+ happy customers today.</p>
            </div>
            <a
              href="#shop"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-sm whitespace-nowrap"
            >
              Shop Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
