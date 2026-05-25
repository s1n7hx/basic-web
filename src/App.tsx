import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, quantity: qty } : c))
    );
  };

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50 font-nunito">
      <Navbar totalItems={totalItems} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={addToCart} />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}
