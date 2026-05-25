import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { CartItem } from "../App";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, qty: number) => void;
}

export default function CartDrawer({
  open,
  onClose,
  cart,
  onRemove,
  onUpdateQuantity,
}: CartDrawerProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 && subtotal < 50 ? 5.99 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <h2 className="font-playfair text-xl font-bold text-stone-800">Your Cart</h2>
            {cart.length > 0 && (
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((sum, c) => sum + c.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-stone-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-9 h-9 text-amber-300" />
              </div>
              <div>
                <p className="font-playfair text-xl font-bold text-stone-700 mb-1">
                  Your cart is empty
                </p>
                <p className="text-stone-400 text-sm">
                  Discover handmade treasures and add them to your cart!
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-stone-50 rounded-xl p-3 border border-stone-100"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-stone-800 text-sm leading-tight mb-0.5 truncate">
                      {item.name}
                    </p>
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity */}
                      <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-1.5 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center hover:text-amber-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-700 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center hover:text-amber-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      {/* Price */}
                      <span className="font-bold text-amber-600 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {/* Remove */}
                  <button
                    onClick={() => onRemove(item.id)}
                    className="self-start mt-0.5 text-stone-300 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-stone-100 p-5 space-y-3">
            {/* Subtotals */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-stone-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-500">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">
                  🎉 Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
              <div className="flex justify-between font-bold text-stone-800 text-base pt-1 border-t border-stone-100">
                <span>Total</span>
                <span className="text-amber-600">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-full transition-colors shadow-md hover:shadow-lg text-sm">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full text-stone-500 hover:text-stone-700 text-sm font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
