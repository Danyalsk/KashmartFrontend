import React from 'react';
import BottomNav from '../components/BottomNav';

const Curated: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-28 font-sans">
      <header className="relative bg-background-light dark:bg-background-dark px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold tracking-tight">Curated Collections</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
          </button>
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            className="w-full h-12 pl-12 pr-4 bg-white dark:bg-surface-dark border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 text-base outline-none" 
            placeholder="Search our artisan pantry..." 
            type="text"
          />
        </div>
      </header>

      <main className="px-0 mt-2">
        <div className="space-y-2 px-4">
          {[
            { 
              tag: 'Ancient Brews', 
              title: 'The Tea Garden', 
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_ogqsH15gyJ0rqisNq2HOceEpGf_pFoaQPDusjzY0fc9nbGsy6VjgBhz0CtPuiUh6B6eW0Q_TvubMOeDfkRm2p-JYEzi-WphkqndZ7ZCYZuGj_mtM-JNWRdJmpqhVQMAw6HvRXNptg9-pO28jLaJuZ-MJhJBOtK7Y1kgQhWg5f6B4ONVx2rR05HEfziZU3NJt0Eb624H9PU6D5p-InLYIWSOpkB_i6Oo36C392-tFsoB_J0aT2aGkvkQmwVROwNZ9P1peirRC1dZ' 
            },
            { 
              tag: 'Sun-Dried', 
              title: 'Nut & Seed Harvest', 
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay' 
            },
            { 
              tag: 'Wild Harvested', 
              title: 'Forest Gold Honey', 
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxSJZGoR_5e5S1CCqrCThMfZBt8yc7DzUw4QaJqBT01tsnV01c96JdDmzCPmc2LUV6-1Xvhf9-pkpgMxzVKEo3ZRPGkrdwPtwKuH5g_JGYPsuBtN1mSvGoq8P_6Kh9UxobRGI3UPLtVkH3pU4NZusOAF6Q8pNPZdn9zMzWm8KxzhvbUfbF_5wZZDWI_o3M_JCsC16IFMgtiU4q9jhok9SFqq6IvT5RHoyI87jOqNELyWQLF1t9ws9FScLhj_tC9MCRHr7-f8uPrDeW' 
            }
          ].map((collection, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[24px] bg-surface-dark cursor-pointer">
              <div className="relative h-[180px] w-full">
                <img 
                  alt={collection.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                  src={collection.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1 block">{collection.tag}</span>
                      <h2 className="text-2xl font-bold text-white leading-tight">{collection.title}</h2>
                    </div>
                    <span className="material-symbols-outlined text-white/50 group-hover:text-primary transition-colors">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 mb-8 px-4">
          <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-3xl border border-orange-100 dark:border-orange-900/50">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-xl font-variation-fill">verified_user</span>
              <h4 className="font-bold text-sm uppercase tracking-widest leading-none">Process & Authenticity</h4>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: 'eco', label: '100% Natural' },
                { icon: 'pan_tool_alt', label: 'Artisan Crafted' },
                { icon: 'science', label: 'Lab Certified' }
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="w-14 h-14 mx-auto bg-white dark:bg-surface-dark rounded-full flex items-center justify-center shadow-sm border border-orange-100 dark:border-orange-900">
                    <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-[9px] font-bold block leading-tight text-slate-500 uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Curated;
