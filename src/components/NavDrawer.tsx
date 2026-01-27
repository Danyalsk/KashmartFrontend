import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <aside className={`absolute inset-y-0 left-0 w-[85%] max-w-[320px] bg-background-light dark:bg-background-dark shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 pb-10 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
              <img alt="User Avatar" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl7aZol6bGo6e67NSdav4neo_SjtIc2t-nEOryxwhXxtEix2VxxwCf7Myd_CakJ9X5E6TaWkkwZFPy1G1KBhQbTf6Owhxrthws3YMmosk4R9iuEm-PI6L55-Gn02yMg-253jR67-L0jASeFmuD0rhj8sL9m4RFo_yiMeAr6OQro3_1aHvadZY-LUDoruQGdQqS3tAGcx2wusAfObVTQzRxIjXW7vZ7mGWzXlFp0F2gaf0Vj6eKKXlrdnTw3Ofl0hF8ug421sFfyRyg"/>
            </div>
            <div>
              <h2 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">Julian Barnes</h2>
              <Link className="text-xs font-semibold text-primary mt-1 inline-block" to="/profile" onClick={onClose}>View Profile</Link>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto no-scrollbar">
          <Link 
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-primary/10 text-primary group" 
            to="/" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined font-variation-fill">home</span>
            <span className="font-bold text-[15px]">Home</span>
          </Link>
          <Link 
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" 
            to="/shop" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined">grid_view</span>
            <span className="font-semibold text-[15px]">Shop by Category</span>
          </Link>
          <Link 
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" 
            to="/orders" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined">package_2</span>
            <span className="font-semibold text-[15px]">My Orders</span>
          </Link>
          <Link 
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" 
            to="/subscription" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined">auto_awesome_motion</span>
            <span className="font-semibold text-[15px]">Subscription Box</span>
          </Link>
          <Link 
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" 
            to="/saved" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined">favorite</span>
            <span className="font-semibold text-[15px]">Saved Treasures</span>
          </Link>
          <Link 
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" 
            to="/heritage" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-semibold text-[15px]">Heritage & Story</span>
          </Link>
        </nav>

        <div className="px-8 py-10 border-t border-slate-100 dark:border-slate-800 space-y-6">
          <div className="space-y-4">
            <Link 
              className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" 
              to="/settings" 
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </Link>
            <Link 
              className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" 
              to="/support" 
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-[20px]">headset_mic</span>
              <span className="text-sm font-medium">Customer Support</span>
            </Link>
          </div>
          <button className="flex items-center gap-3 text-red-500/80 hover:text-red-600 font-bold transition-colors pt-2">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="text-sm">Logout</span>
          </button>
        </div>
        
        <div className="px-8 pb-8">
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Version 2.4.0</span>
        </div>
      </aside>
    </div>
  );
};

export default NavDrawer;
