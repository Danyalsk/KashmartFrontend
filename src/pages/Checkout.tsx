import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const { items, getTotalPrice, placeOrder } = useCartStore();
    const subtotal = getTotalPrice();
    const deliveryFee = 0; // Free
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    // UI-only state for payment method selection
    const [selectedPayment, setSelectedPayment] = useState('upi');

    const handlePlaceOrder = () => {
        // In a real app, this would process payment
        placeOrder();
        navigate('/order-success', { replace: true });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-5 pt-4 pb-4 border-b border-slate-100 dark:border-slate-800/50">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-xl font-bold">Secure Checkout</h1>
                </div>
            </header>
            <main className="px-5 py-6 space-y-8 pb-48 max-w-[430px] mx-auto">
                <section className="relative">
                    <div className="flex justify-between items-center relative z-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Cart</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Checkout</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary text-white ring-4 ring-primary/20 flex items-center justify-center text-xs font-bold">
                                3
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Payment</span>
                        </div>
                    </div>
                    <div className="absolute top-4 left-0 w-full h-[2px] bg-primary/20 -z-0">
                        <div className="h-full bg-primary w-2/3"></div>
                    </div>
                </section>
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Shipping Details</h3>
                        <button className="text-primary text-xs font-bold">Edit</button>
                    </div>
                    <div className="bg-surface-light dark:bg-white/5 p-5 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-800/50 space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-slate-400">person</span>
                            <div>
                                <p className="text-sm font-semibold">Sarah Jenkins</p>
                                <p className="text-xs text-slate-500 mt-0.5">+1 (555) 0123 4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-slate-400">location_on</span>
                            <div>
                                <p className="text-sm font-medium leading-relaxed">742 Evergreen Terrace, Suite 102<br/>North Springfield, OR 97403</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Payment Method</h3>
                    <div className="space-y-3">
                        <label className={`relative flex items-center p-4 bg-surface-light dark:bg-white/5 rounded-2xl border-2 ${selectedPayment === 'upi' ? 'border-primary' : 'border-slate-100 dark:border-slate-800'} shadow-sm cursor-pointer transition-all`}>
                            <input 
                                className="hidden" 
                                name="payment" 
                                type="radio" 
                                checked={selectedPayment === 'upi'}
                                onChange={() => setSelectedPayment('upi')}
                            />
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold">UPI / Google Pay</p>
                                    <p className="text-xs text-slate-500">Pay securely via your UPI apps</p>
                                </div>
                                <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'upi' ? 'border-primary' : 'border-slate-200'} flex items-center justify-center`}>
                                    {selectedPayment === 'upi' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                                </div>
                            </div>
                        </label>
                        <label className={`relative flex items-center p-4 bg-surface-light dark:bg-white/5 rounded-2xl border ${selectedPayment === 'card' ? 'border-primary border-2' : 'border-slate-100 dark:border-slate-800'} shadow-sm cursor-pointer transition-all`}>
                            <input 
                                className="hidden" 
                                name="payment" 
                                type="radio"
                                checked={selectedPayment === 'card'}
                                onChange={() => setSelectedPayment('card')}
                            />
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-400">credit_card</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold">Credit / Debit Card</p>
                                    <p className="text-xs text-slate-500">Visa, Mastercard, Amex</p>
                                </div>
                                <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'card' ? 'border-primary' : 'border-slate-200'} flex items-center justify-center`}>
                                    {selectedPayment === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                                </div>
                            </div>
                        </label>
                        <label className={`relative flex items-center p-4 bg-surface-light dark:bg-white/5 rounded-2xl border ${selectedPayment === 'apple' ? 'border-primary border-2' : 'border-slate-100 dark:border-slate-800'} shadow-sm cursor-pointer transition-all`}>
                            <input 
                                className="hidden" 
                                name="payment" 
                                type="radio"
                                checked={selectedPayment === 'apple'}
                                onChange={() => setSelectedPayment('apple')}
                            />
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-400">smartphone</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold">Apple Pay</p>
                                    <p className="text-xs text-slate-500">Express checkout with FaceID</p>
                                </div>
                                <div className={`w-5 h-5 rounded-full border-2 ${selectedPayment === 'apple' ? 'border-primary' : 'border-slate-200'} flex items-center justify-center`}>
                                    {selectedPayment === 'apple' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                                </div>
                            </div>
                        </label>
                    </div>
                </section>
                <section className="bg-surface-light dark:bg-white/5 p-6 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-800/50 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Subtotal ({items.length} items)</span>
                        <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Shipping</span>
                        <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <span className="font-bold">Total Amount</span>
                        <span className="text-xl font-bold text-primary">₹{total.toFixed(2)}</span>
                    </div>
                </section>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/90 dark:bg-surface-dark/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 px-6 py-5 z-50 rounded-t-[32px]">
                <div className="max-w-md mx-auto">
                    <button 
                        onClick={handlePlaceOrder}
                        className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                    >
                        Place Order
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-widest flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[12px] align-middle">verified_user</span> 
                        Secure 256-bit SSL encrypted
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
