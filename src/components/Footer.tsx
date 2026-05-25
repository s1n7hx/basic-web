import { Scissors, Heart, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Shop: ["Hand Drawings", "Paper Scoring", "DIY Kits", "Painted Art", "Scrapbooking", "Gift Crafts"],
  Help: ["FAQ", "Shipping Info", "Returns", "Order Tracking", "Contact Us"],
  Company: ["About Us", "Our Artisans", "Blog", "Careers", "Press"],
};

export default function Footer() {
  return (
    <footer id="about" className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-white block leading-none">
                  Crafty Hands
                </span>
                <span className="text-[10px] text-amber-500 font-semibold tracking-widest uppercase">
                  Handmade with love
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              A marketplace celebrating the beauty of handmade art — from
              pencil sketches to intricate paper scoring and creative DIY kits.
              Every piece is made with heart.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              {[
                { icon: Mail, text: "hello@craftyhands.shop" },
                { icon: Phone, text: "+1 (555) 234-5678" },
                { icon: MapPin, text: "Portland, OR, USA" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-stone-400">
                  <Icon className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {["📸", "👍", "🐦", "▶️"].map((emoji, i) => {
                const labels = ["Instagram", "Facebook", "Twitter", "YouTube"];
                return (
                  <a
                    key={labels[i]}
                    href="#"
                    aria-label={labels[i]}
                    title={labels[i]}
                    className="w-9 h-9 rounded-full bg-stone-800 hover:bg-amber-500 border border-stone-700 hover:border-amber-500 flex items-center justify-center transition-all text-base"
                  >
                    {emoji}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Crafty Hands. All rights reserved.
          </p>
          <p className="text-stone-500 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> by artisans around the world
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
