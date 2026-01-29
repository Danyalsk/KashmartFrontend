import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, increaseQuantity, decreaseQuantity, clearCart, getTotalPrice } = useCartStore();

  const subtotal = getTotalPrice();
  const deliveryFee = 0; // Free
  const tax = subtotal * 0.05; // 5% tax example
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex justify-center font-display">
      <div className="w-full max-w-[430px] bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative">
        <header className="relative bg-background-light dark:bg-background-dark px-6 pt-12 pb-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-xl font-bold">Shopping Cart</h1>
          {items.length > 0 ? (
            <button 
              onClick={clearCart}
              className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-wide"
            >
              Clear
            </button>
          ) : (
            <div className="w-10"></div>
          )}
        </header>

        <main className="flex-1 px-5 pb-40">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full pt-20">
              <span className="material-symbols-outlined text-6xl text-slate-300">shopping_cart_off</span>
              <h2 className="text-lg font-bold text-slate-500 mt-4">Your cart is empty</h2>
              <button 
                onClick={() => navigate('/')}
                className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <p>Deliver to <span className="font-semibold text-slate-800 dark:text-slate-200">Home • 12/B Valley View...</span></p>
                <span className="material-symbols-outlined text-sm ml-auto">expand_more</span>
              </div>

              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white dark:bg-surface-dark p-4 rounded-3xl flex gap-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-all">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img alt={item.name} className="w-full h-full object-cover" src={item.image}/>
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <h3 className="font-bold text-base leading-tight">{item.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item.origin ? `Origin: ${item.origin}` : ''} {item.weight ? `• ${item.weight}` : ''}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-lg text-primary">₹{item.price}</span>
                      <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700">
                        <button 
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-400"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => increaseQuantity(item.id)}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-white dark:bg-slate-600 shadow-sm text-primary"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 ml-1">Coupons</h4>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-slate-400">confirmation_number</span>
                  <input 
                    className="w-full pl-12 pr-28 py-4 bg-white dark:bg-surface-dark border-none rounded-full shadow-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all text-base font-medium outline-none" 
                    placeholder="Enter coupon code" 
                    type="text"
                  />
                  <button className="absolute right-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-tight active:scale-95 transition-transform">Apply</button>
                </div>
              </div>

              <div className="bg-white dark:bg-surface-dark p-6 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-800">
                <h4 className="text-base font-bold mb-4">Bill Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <span>Delivery Fee</span>
                      <span className="material-symbols-outlined text-[14px]">info</span>
                    </div>
                    <span className="text-green-600 font-medium font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
                    <span>Tax & Fees (5%)</span>
                    <span className="font-medium">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-xl text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 opacity-40 grayscale">
                <span className="material-symbols-outlined">verified_user</span>
                <span className="material-symbols-outlined">payments</span>
                <span className="material-symbols-outlined">local_shipping</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">Safe & Secure</p>
              </div>
            </>
          )}
        </main>
        
        {items.length > 0 && (
          <footer className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 z-30">
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-primary hover:bg-orange-600 text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              Proceed to Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Cart;
