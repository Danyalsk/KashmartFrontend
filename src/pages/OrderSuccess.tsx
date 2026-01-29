import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const OrderSuccess: React.FC = () => {
    const navigate = useNavigate();
    const { lastOrder } = useCartStore();

    useEffect(() => {
        if (!lastOrder) {
            navigate('/');
        }
    }, [lastOrder, navigate]);

    if (!lastOrder) return null;

    const { items, total, date } = lastOrder;
    const orderNumber = '#GH-' + Math.floor(100000 + Math.random() * 900000); // Random mock order ID

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
            <main className="max-w-md mx-auto px-6 pt-12 pb-10 flex flex-col items-center min-h-screen">
                <div className="mb-10 relative">
                    <div className="w-32 h-32 bg-orange-50 dark:bg-orange-950/20 rounded-full flex items-center justify-center relative z-10">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
                        </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-200 dark:bg-orange-800 rounded-full blur-sm opacity-60"></div>
                    <div className="absolute bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full blur-md"></div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Order Placed Successfully</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm px-4">Your artisanal treasures are being prepared with care and will be on their way soon.</p>
                </div>

                <div className="w-full bg-surface-light dark:bg-surface-dark rounded-[32px] p-6 shadow-sm border border-slate-100 dark:border-slate-800 mb-8">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-50 dark:border-slate-800">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Order Number</p>
                            <p className="font-bold text-slate-800 dark:text-white">{orderNumber}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Order Date</p>
                            <p className="font-bold text-slate-800 dark:text-white">{date}</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        {items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 flex-shrink-0">
                                    <img alt={item.name} className="w-full h-full object-cover" src={item.image}/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm truncate">{item.name}</p>
                                    <p className="text-xs text-slate-500">{item.quantity} x {item.weight || 'unit'}</p>
                                </div>
                                <p className="font-bold text-sm">₹{item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3 pt-6 border-t border-slate-50 dark:border-slate-800">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Subtotal</span>
                            <span className="font-medium text-slate-800 dark:text-white">₹{total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Shipping</span>
                            <span className="font-medium text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="font-bold text-slate-800 dark:text-white">Total Amount</span>
                            <span className="text-xl font-bold text-primary">₹{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-3 mt-auto">
                    <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all">
                        Track Order
                    </button>
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full bg-surface-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 font-semibold py-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>

                <div className="mt-8 text-center flex items-center justify-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    <span className="text-xs">Confirmation email sent to you</span>
                </div>
            </main>
        </div>
    );
};

export default OrderSuccess;
