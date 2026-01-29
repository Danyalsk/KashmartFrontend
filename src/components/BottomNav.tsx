import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartCount = useCartStore((state) => state.getItemCount());

  const navItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Curated', icon: 'dashboard_customize', path: '/curated' },
    { label: 'Cart', icon: 'shopping_bag', path: '/cart', badge: cartCount > 0 ? cartCount : undefined },
    { label: 'Profile', icon: 'person_2', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-8 py-5 flex items-center justify-between z-50 rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1.5 relative group"
          >
            {item.badge && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                {item.badge}
              </div>
            )}
            <span className={`material-symbols-outlined transition-colors ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`}>
              {item.icon}
            </span>
            <span className={`text-[10px] font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
