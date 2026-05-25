import { Pencil, Layers, Scissors, Gift, PaintBucket, BookOpen } from "lucide-react";

const categories = [
  {
    icon: Pencil,
    title: "Hand Drawings",
    description: "Original sketches, portraits, and illustrations crafted by talented artists.",
    count: "120+ items",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    image: "https://images.pexels.com/photos/3951826/pexels-photo-3951826.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  {
    icon: Layers,
    title: "Paper Scoring",
    description: "Beautifully scored and folded paper art, cards, and dimensional designs.",
    count: "85+ items",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
    image: "https://images.pexels.com/photos/27837185/pexels-photo-27837185.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  {
    icon: Scissors,
    title: "DIY Kits",
    description: "Complete craft kits so you can create your own masterpiece at home.",
    count: "60+ items",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    image: "https://images.pexels.com/photos/7869797/pexels-photo-7869797.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  {
    icon: PaintBucket,
    title: "Painted Art",
    description: "Watercolor, acrylic and mixed-media paintings on canvas and paper.",
    count: "95+ items",
    color: "from-violet-400 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
    image: "https://images.pexels.com/photos/2543260/pexels-photo-2543260.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  {
    icon: BookOpen,
    title: "Scrapbooking",
    description: "Memory albums, journals, and decorative scrapbook spreads.",
    count: "70+ items",
    color: "from-sky-400 to-blue-500",
    bg: "bg-sky-50",
    border: "border-sky-200",
    image: "https://images.pexels.com/photos/16605273/pexels-photo-16605273.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  {
    icon: Gift,
    title: "Gift Crafts",
    description: "Unique handmade gifts, greeting cards and custom keepsakes.",
    count: "110+ items",
    color: "from-yellow-400 to-amber-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    image: "https://images.pexels.com/photos/6156880/pexels-photo-6156880.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Browse by Category
        </span>
        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
          Find Your <span className="text-amber-500 italic">Craft Style</span>
        </h2>
        <p className="text-stone-500 max-w-xl mx-auto text-base">
          From detailed pencil sketches to intricate paper scoring — explore our wide range
          of handmade categories.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <a
              key={cat.title}
              href="#shop"
              className={`group relative overflow-hidden rounded-2xl border ${cat.border} ${cat.bg} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4`}
            >
              {/* Image overlay (right side decorative) */}
              <div className="absolute right-0 top-0 bottom-0 w-28 overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-stone-800 mb-1">
                  {cat.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-3">
                  {cat.description}
                </p>
                <span className="text-xs font-semibold text-stone-400 bg-white/60 px-2.5 py-1 rounded-full border border-stone-200">
                  {cat.count}
                </span>
              </div>

              {/* Arrow */}
              <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-stone-600 group-hover:text-amber-600 transition-colors">
                Browse Category
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
