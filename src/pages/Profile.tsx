import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Profile: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col relative shadow-2xl overflow-hidden font-display">
            <header className="sticky top-0 z-20 px-6 py-4 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm"
                >
                    <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
                </button>
                <h1 className="text-lg font-semibold">Profile</h1>
                <button 
                    onClick={() => navigate('/settings')}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm"
                >
                    <span className="material-symbols-outlined text-xl">settings</span>
                </button>
            </header>
            <main className="flex-1 px-6 pb-24">
                <div className="mt-4 mb-8 flex flex-col items-center">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-lg">
                            <img alt="User Profile Image" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8NvTm5oqaSu05NpC84Nh8r0aJZS5nKzVFb0NqXYYYt6KBTYN8C8Lg_nePwfVSI6Hn91osVNg7qZ5PndZwohwMBSIIGJxVQo4yx6h9RnJLNud4-OjwsN05owbB5mjpulnPrwVvkQoV8s5whz4HxINq65PJuQYxzQJGt0T9rUvBxHhDcVjy68-OLxhDJTO0hLyfV42wiU56UXDa7NDmgUCODPfmBIxWMXN-YPpNMqn1DkmPJXZlDYfnoAuEY307oDn8obdxoF6jy6nf"/>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white dark:border-surface-dark cursor-pointer">
                            <span className="material-symbols-outlined text-sm leading-none">edit</span>
                        </div>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight">Kabir Sharma</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">kabir.sharma@example.com</p>
                </div>
                <div className="space-y-4">
                    <button 
                        onClick={() => navigate('/orders')}
                        className="w-full flex items-center p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 group active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-900/20 text-primary">
                            <span className="material-symbols-outlined">local_mall</span>
                        </div>
                        <div className="ml-4 flex-1 text-left">
                            <h3 className="font-medium">My Orders</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">View and track your purchases</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                    </button>
                    <button 
                        onClick={() => navigate('/saved')}
                        className="w-full flex items-center p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 group active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-500">
                            <span className="material-symbols-outlined">place</span>
                        </div>
                        <div className="ml-4 flex-1 text-left">
                            <h3 className="font-medium">Saved Addresses</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Manage your delivery locations</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                    </button>
                    <button 
                        onClick={() => navigate('/payment-methods')}
                        className="w-full flex items-center p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 group active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div className="ml-4 flex-1 text-left">
                            <h3 className="font-medium">Payment Methods</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Cards, UPI and wallet settings</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                    </button>
                    <button 
                        onClick={() => navigate('/support')}
                        className="w-full flex items-center p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 group active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-500">
                            <span className="material-symbols-outlined">headset_mic</span>
                        </div>
                        <div className="ml-4 flex-1 text-left">
                            <h3 className="font-medium">Help & Support</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">FAQs and customer assistance</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
                    </button>
                </div>
                <div className="mt-8 p-5 bg-gradient-to-br from-primary to-orange-400 rounded-3xl text-white shadow-xl shadow-primary/20 flex items-center justify-between overflow-hidden relative">
                    <div className="relative z-10 w-full">
                        <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Limited Offer</p>
                        <h4 className="text-xl font-bold leading-tight mt-1">Join Gourmet Elite</h4>
                        <p className="text-sm opacity-90 mt-1">Free shipping & exclusive artisanal early access.</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                    </div>
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                </div>
                <div className="mt-12 text-center pb-8">
                    <button className="text-slate-400 dark:text-slate-500 font-medium hover:text-primary transition-colors py-2 px-4 rounded-full border border-slate-200 dark:border-slate-800">
                        Log Out
                    </button>
                    <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-6 uppercase tracking-widest">Version 2.4.0</p>
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default Profile;
