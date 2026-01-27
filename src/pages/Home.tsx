import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavDrawer from '../components/NavDrawer';

const Home: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const categories = [
    { icon: 'flare', name: 'Saffron', bg: 'bg-orange-100/50 dark:bg-orange-950/30', text: 'text-primary' },
    { icon: 'eco', name: 'Dry Fruits', bg: 'bg-amber-100/50 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-500' },
    { icon: 'coffee', name: 'Teas', bg: 'bg-green-100/50 dark:bg-green-950/30', text: 'text-green-600 dark:text-green-500' },
    { icon: 'add', name: 'Honey', bg: 'bg-yellow-100/50 dark:bg-yellow-950/30', text: 'text-yellow-600 dark:text-yellow-500' },
    { icon: 'grass', name: 'Spices', bg: 'bg-red-100/50 dark:bg-red-950/30', text: 'text-red-600 dark:text-red-500' },
  ];

  const bestsellers = [
    { name: 'Wild Turmeric Powder', price: '₹340', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxSJZGoR_5e5S1CCqrCThMfZBt8yc7DzUw4QaJqBT01tsnV01c96JdDmzCPmc2LUV6-1Xvhf9-pkpgMxzVKEo3ZRPGkrdwPtwKuH5g_JGYPsuBtN1mSvGoq8P_6Kh9UxobRGI3UPLtVkH3pU4NZusOAF6Q8pNPZdn9zMzWm8KxzhvbUfbF_5wZZDWI_o3M_JCsC16IFMgtiU4q9jhok9SFqq6IvT5RHoyI87jOqNELyWQLF1t9ws9FScLhj_tC9MCRHr7-f8uPrDeW' },
    { name: 'Tellicherry Pepper', price: '₹420', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay' },
    { name: 'Sri Lankan Cinnamon', price: '₹580', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG9TTp-DjuymfgNOkEl3krU4Pt6ncG2aSE5cQRo9bP8mwkjSsu8o5znx5LTRXRkXLjU1Dz8fLdrLcvbl2TJbU4qCXqO-_m0pC81K8lkX6I3SIvfdna-qPmKoVhMozHaJAwYPe56rp6WJ_B8uC2tSiPu8apdxJCktR2-Cs_KBNEjsC9MAriO94X3rkjU6judybCe9LzcnnzE2dj1PdnkuE-mu_j90W7E9Vjs2z-fU0yFvXbaXb-BAjQwPHwoUa8LEJXmLbsv2YtFjv' },
  ];

  const teas = [
    { name: 'Midnight Jasmine', type: 'Loose Leaf', price: '₹650', bg: 'bg-green-50/50 dark:bg-green-950/10', border: 'border-green-100 dark:border-green-900/30', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_ogqsH15gyJ0rqisNq2HOceEpGf_pFoaQPDusjzY0fc9nbGsy6VjgBhz0CtPuiUh6B6eW0Q_TvubMOeDfkRm2p-JYEzi-WphkqndZ7ZCYZuGj_mtM-JNWRdJmpqhVQMAw6HvRXNptg9-pO28jLaJuZ-MJhJBOtK7Y1kgQhWg5f6B4ONVx2rR05HEfziZU3NJt0Eb624H9PU6D5p-InLYIWSOpkB_i6Oo36C392-tFsoB_J0aT2aGkvkQmwVROwNZ9P1peirRC1dZ' },
    { name: 'Damask Rose Tea', type: 'Wellness Blend', price: '₹720', bg: 'bg-rose-50/50 dark:bg-rose-950/10', border: 'border-rose-100 dark:border-rose-900/30', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG9TTp-DjuymfgNOkEl3krU4Pt6ncG2aSE5cQRo9bP8mwkjSsu8o5znx5LTRXRkXLjU1Dz8fLdrLcvbl2TJbU4qCXqO-_m0pC81K8lkX6I3SIvfdna-qPmKoVhMozHaJAwYPe56rp6WJ_B8uC2tSiPu8apdxJCktR2-Cs_KBNEjsC9MAriO94X3rkjU6judybCe9LzcnnzE2dj1PdnkuE-mu_j90W7E9Vjs2z-fU0yFvXbaXb-BAjQwPHwoUa8LEJXmLbsv2YtFjv' },
  ];

  return (
    <div className="pb-32 bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-slate-100">
      <NavDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      {/* Header */}
      <header className="relative bg-background-light dark:bg-background-dark px-5 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm"
            onClick={() => setIsNavOpen(true)}
          >
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-xl">menu</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight">KashMart</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-xl">notifications</span>
          </button>
        </div>
        {!isNavOpen && (
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="w-full h-12 pl-12 pr-4 bg-surface-light dark:bg-surface-dark border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 text-base outline-none" 
              placeholder="Search for artisanal treasures..." 
              type="text"
            />
          </div>
        )}
      </header>

      <main className="space-y-10 mt-4">
        {/* Hero Section */}
        <section className="px-5">
          <div className="relative h-64 rounded-[32px] overflow-hidden shadow-xl">
            <img alt="Lush green tea plantation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX_ogqsH15gyJ0rqisNq2HOceEpGf_pFoaQPDusjzY0fc9nbGsy6VjgBhz0CtPuiUh6B6eW0Q_TvubMOeDfkRm2p-JYEzi-WphkqndZ7ZCYZuGj_mtM-JNWRdJmpqhVQMAw6HvRXNptg9-pO28jLaJuZ-MJhJBOtK7Y1kgQhWg5f6B4ONVx2rR05HEfziZU3NJt0Eb624H9PU6D5p-InLYIWSOpkB_i6Oo36C392-tFsoB_J0aT2aGkvkQmwVROwNZ9P1peirRC1dZ"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-7">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Summer Harvest 2024</span>
              <h2 className="text-3xl font-bold text-white leading-tight">The Art of Fine Living</h2>
              <p className="text-white/80 text-sm mt-1 max-w-[220px]">Exquisite gourmet collections sourced directly from the growers.</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-lg font-bold">Explore by Category</h3>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar px-5 pb-2">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${cat.text} text-3xl`}>{cat.icon}</span>
                </div>
                <span className="text-xs font-semibold">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bestsellers */}
        <section>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-lg font-bold">Bestselling Spices</h3>
            <button className="text-primary text-sm font-semibold">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-5 pb-4">
            {bestsellers.map((item, i) => (
              <div key={i} className="min-w-[180px] flex flex-col bg-surface-light dark:bg-surface-dark rounded-3xl p-3 shadow-sm border border-slate-50 dark:border-slate-800">
                <div className="w-full h-32 rounded-2xl overflow-hidden mb-3 flex-shrink-0">
                  <img alt={item.name} className="w-full h-full object-cover" src={item.image}/>
                </div>
                <div className="h-10 mb-1">
                  <h4 className="font-bold text-sm leading-tight line-clamp-2">{item.name}</h4>
                </div>
                <div className="flex items-center justify-between mt-auto pt-1">
                  <span className="font-bold text-primary">{item.price}</span>
                  <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Harvest */}
        <section className="px-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Fresh from the Harvest</h3>
          </div>
          <div className="relative rounded-[32px] overflow-hidden shadow-lg aspect-[4/3]">
            <img alt="Harvested honey" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div className="text-white">
                <div className="flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-primary text-sm">verified</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Limited Reserve</span>
                </div>
                <h4 className="text-2xl font-bold">Sidr Forest Honey</h4>
                <p className="text-white/70 text-sm">Unfiltered, raw nectar from the deep valley.</p>
                <p className="text-xl font-bold mt-2">₹1,250 <span className="text-xs font-normal text-white/60">/ 500g</span></p>
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform">Add</button>
            </div>
          </div>
        </section>

        {/* Specials Grid */}
        <section className="px-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Kashmiri Specials</h3>
            <button className="text-primary text-sm font-semibold">Explore Origin</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Grade A++ Saffron', price: '₹950', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxSJZGoR_5e5S1CCqrCThMfZBt8yc7DzUw4QaJqBT01tsnV01c96JdDmzCPmc2LUV6-1Xvhf9-pkpgMxzVKEo3ZRPGkrdwPtwKuH5g_JGYPsuBtN1mSvGoq8P_6Kh9UxobRGI3UPLtVkH3pU4NZusOAF6Q8pNPZdn9zMzWm8KxzhvbUfbF_5wZZDWI_o3M_JCsC16IFMgtiU4q9jhok9SFqq6IvT5RHoyI87jOqNELyWQLF1t9ws9FScLhj_tC9MCRHr7-f8uPrDeW' },
              { name: 'Paper Shell Walnuts', price: '₹720', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay' },
              { name: 'Gurbandi Almonds', price: '₹880', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_ogqsH15gyJ0rqisNq2HOceEpGf_pFoaQPDusjzY0fc9nbGsy6VjgBhz0CtPuiUh6B6eW0Q_TvubMOeDfkRm2p-JYEzi-WphkqndZ7ZCYZuGj_mtM-JNWRdJmpqhVQMAw6HvRXNptg9-pO28jLaJuZ-MJhJBOtK7Y1kgQhWg5f6B4ONVx2rR05HEfziZU3NJt0Eb624H9PU6D5p-InLYIWSOpkB_i6Oo36C392-tFsoB_J0aT2aGkvkQmwVROwNZ9P1peirRC1dZ' },
              { name: 'Saffron Kahwa Tea', price: '₹495', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG9TTp-DjuymfgNOkEl3krU4Pt6ncG2aSE5cQRo9bP8mwkjSsu8o5znx5LTRXRkXLjU1Dz8fLdrLcvbl2TJbU4qCXqO-_m0pC81K8lkX6I3SIvfdna-qPmKoVhMozHaJAwYPe56rp6WJ_B8uC2tSiPu8apdxJCktR2-Cs_KBNEjsC9MAriO94X3rkjU6judybCe9LzcnnzE2dj1PdnkuE-mu_j90W7E9Vjs2z-fU0yFvXbaXb-BAjQwPHwoUa8LEJXmLbsv2YtFjv' },
            ].map((special, i) => (
              <div key={i} className="bg-surface-light dark:bg-surface-dark flex flex-col rounded-3xl p-4 shadow-sm border border-slate-50 dark:border-slate-800">
                <div className="aspect-square rounded-2xl overflow-hidden mb-3 flex-shrink-0">
                  <img alt={special.name} className="w-full h-full object-cover" src={special.img}/>
                </div>
                <div className="h-10 mb-1">
                  <h4 className="font-bold text-sm leading-tight line-clamp-2">{special.name}</h4>
                </div>
                <div className="mt-auto">
                    <p className="text-primary font-bold">{special.price}</p>
                    <button className="mt-3 w-full py-2.5 bg-white dark:bg-white text-primary border border-primary/20 rounded-xl text-xs font-bold active:bg-primary active:text-white transition-colors">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tea Blends */}
        <section>
          <div className="flex items-center justify-between px-5 mb-4">
            <h3 className="text-lg font-bold">Artisanal Tea Blends</h3>
            <button className="text-primary text-sm font-semibold">Brew Guide</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-5 pb-4">
            {teas.map((tea, i) => (
              <div key={i} className={`min-w-[280px] ${tea.bg} rounded-[32px] p-5 flex gap-4 border ${tea.border}`}>
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img alt={tea.name} className="w-full h-full object-cover" src={tea.image}/>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100">{tea.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-2">{tea.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">{tea.price}</span>
                    <button className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Info */}
        <section className="px-5">
          <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-[40px] border border-orange-100/50 dark:border-orange-900/30">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200">Process & Authenticity</h4>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'eco', label: '100% NATURAL' },
                { icon: 'pan_tool_alt', label: 'HAND PICKED' },
                { icon: 'science', label: 'LAB TESTED' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 mx-auto bg-white dark:bg-surface-dark rounded-full flex items-center justify-center shadow-md mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold block leading-tight text-slate-600 dark:text-slate-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-8 py-4 flex items-center justify-between z-50 rounded-t-[32px] shadow-2xl">
        <button className="flex flex-col items-center gap-1 group">
          <span className="material-symbols-outlined text-primary">home</span>
          <span className="text-[10px] font-bold text-primary">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">search</span>
          <span className="text-[10px] font-medium text-slate-400 group-hover:text-primary">Search</span>
        </button>
        <button 
          onClick={() => navigate('/cart')}
          className="flex flex-col items-center gap-1 relative group"
        >
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-white text-[9px] rounded-full flex items-center justify-center font-bold">3</div>
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">shopping_cart</span>
          <span className="text-[10px] font-medium text-slate-400 group-hover:text-primary">Cart</span>
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">person</span>
          <span className="text-[10px] font-medium text-slate-400 group-hover:text-primary">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;
