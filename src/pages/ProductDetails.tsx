import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { allProducts } from '../data/mockData';

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/')} className="text-primary font-bold">Return Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      origin: product.origin,
      weight: product.weight
    });
  };

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="max-w-[430px] mx-auto bg-background-light dark:bg-background-dark min-h-screen relative shadow-2xl overflow-x-hidden pb-32">
        
        {/* Header Actions */}
        <div className="fixed top-0 left-0 right-0 max-w-[430px] mx-auto z-50 flex justify-between items-center p-6 pointer-events-none">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md flex items-center justify-center pointer-events-auto border border-white/20 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back_ios_new</span>
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md flex items-center justify-center pointer-events-auto border border-white/20 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-slate-900 dark:text-white">share</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md flex items-center justify-center pointer-events-auto border border-white/20 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-slate-900 dark:text-white">favorite</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[450px] w-full">
          <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        </div>

        {/* Product Info */}
        <div className="px-6 -mt-12 relative z-10">
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Premium Grade</span>
              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-full">
                <span className="material-symbols-outlined text-amber-500 text-[18px] font-variation-fill">star</span>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400">4.9</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Origin: {product.origin || 'Kashmir'}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-slate-400 line-through text-sm">₹{product.originalPrice}</span>
                  <span className="text-green-600 text-xs font-bold ml-1">{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF</span>
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-3">Product Description</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {product.description || 'Experience the authentic taste of Kashmir with this premium selection. Carefully harvested and packed to retain its natural aroma and nutrients.'}
            </p>
          </div>

          {/* Authenticity Cards */}
          <div className="mt-8 bg-orange-50/50 dark:bg-primary/5 p-6 rounded-3xl border border-orange-100/50 dark:border-primary/10">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <h2 className="font-bold text-slate-800 dark:text-slate-200">Process & Authenticity</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'eco', label: '100% Natural' },
                { icon: 'front_hand', label: 'Hand Harvested' },
                { icon: 'science', label: 'Lab Tested' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-sm mb-3">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-tight text-slate-500 dark:text-slate-400 leading-tight">
                    {item.label.split(' ').map((line, idx) => (
                       <React.Fragment key={idx}>{line}<br/></React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-3">How to Use</h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {[
                { icon: 'coffee', title: 'Tea & Milk', desc: 'Add 2-3 strands to warm milk or tea.' },
                { icon: 'cooking', title: 'Gourmet Cooking', desc: 'Perfect for Biryani and Risotto.' },
                { icon: 'face_5', title: 'Skincare', desc: 'Use in face packs for a natural glow.' }
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-40 bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-slate-100 dark:border-neutral-800">
                  <span className="material-symbols-outlined text-primary mb-2">{item.icon}</span>
                  <p className="text-xs font-bold mb-1">{item.title}</p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-neutral-800 px-6 py-4 pb-8 flex items-center justify-between z-50">
          <div className="flex items-center gap-4 bg-slate-100 dark:bg-neutral-800 px-4 py-2 rounded-2xl">
            <button onClick={handleDecrement} className="text-xl font-bold text-primary w-6">−</button>
            <span className="text-sm font-bold w-4 text-center">{quantity}</span>
            <button onClick={handleIncrement} className="text-xl font-bold text-primary w-6">+</button>
          </div>
          <button 
            onClick={handleAddToCart}
            className="flex-1 ml-4 bg-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
