export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  weight?: string;
  origin?: string;
  category?: string;
  rating?: number;
  description?: string;
}

export const bestsellers: Product[] = [
  { 
    id: '101', 
    name: 'Wild Turmeric Powder', 
    price: 340, 
    originalPrice: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxSJZGoR_5e5S1CCqrCThMfZBt8yc7DzUw4QaJqBT01tsnV01c96JdDmzCPmc2LUV6-1Xvhf9-pkpgMxzVKEo3ZRPGkrdwPtwKuH5g_JGYPsuBtN1mSvGoq8P_6Kh9UxobRGI3UPLtVkH3pU4NZusOAF6Q8pNPZdn9zMzWm8KxzhvbUfbF_5wZZDWI_o3M_JCsC16IFMgtiU4q9jhok9SFqq6IvT5RHoyI87jOqNELyWQLF1t9ws9FScLhj_tC9MCRHr7-f8uPrDeW',
    origin: 'Lakadong, Meghalaya',
    weight: '100g',
    description: 'High curcumin content turmeric powder, ground from organically grown turmeric roots.'
  },
  { 
    id: '102', 
    name: 'Tellicherry Pepper', 
    price: 420, 
    originalPrice: 550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay',
    origin: 'Tellicherry, Kerala',
    weight: '100g',
    description: 'The finest grade of black pepper, known for its large size, rich aroma, and robust flavor.'
  },
  { 
    id: '103', 
    name: 'Sri Lankan Cinnamon', 
    price: 580, 
    originalPrice: 700,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG9TTp-DjuymfgNOkEl3krU4Pt6ncG2aSE5cQRo9bP8mwkjSsu8o5znx5LTRXRkXLjU1Dz8fLdrLcvbl2TJbU4qCXqO-_m0pC81K8lkX6I3SIvfdna-qPmKoVhMozHaJAwYPe56rp6WJ_B8uC2tSiPu8apdxJCktR2-Cs_KBNEjsC9MAriO94X3rkjU6judybCe9LzcnnzE2dj1PdnkuE-mu_j90W7E9Vjs2z-fU0yFvXbaXb-BAjQwPHwoUa8LEJXmLbsv2YtFjv',
    origin: 'Kandy, Sri Lanka',
    weight: '50g',
    description: 'True Ceylon cinnamon, distinctively sweet and delicate, perfect for baking and desserts.'
  },
];

export const specials: Product[] = [
  { 
    id: '201', 
    name: 'Grade A++ Saffron', 
    price: 950, 
    originalPrice: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxSJZGoR_5e5S1CCqrCThMfZBt8yc7DzUw4QaJqBT01tsnV01c96JdDmzCPmc2LUV6-1Xvhf9-pkpgMxzVKEo3ZRPGkrdwPtwKuH5g_JGYPsuBtN1mSvGoq8P_6Kh9UxobRGI3UPLtVkH3pU4NZusOAF6Q8pNPZdn9zMzWm8KxzhvbUfbF_5wZZDWI_o3M_JCsC16IFMgtiU4q9jhok9SFqq6IvT5RHoyI87jOqNELyWQLF1t9ws9FScLhj_tC9MCRHr7-f8uPrDeW',
    origin: 'Pampore, Kashmir',
    weight: '1g',
    description: 'World-renowned Kashmiri saffron, hand-harvested for superior color and aroma.'
  },
  { 
    id: '202', 
    name: 'Paper Shell Walnuts', 
    price: 720, 
    originalPrice: 900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay',
    origin: 'Kashmir Valley',
    weight: '500g',
    description: 'Premium soft-shell walnuts, easy to crack and packed with omega-3s.'
  },
  { 
    id: '203', 
    name: 'Gurbandi Almonds', 
    price: 880, 
    originalPrice: 1100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_ogqsH15gyJ0rqisNq2HOceEpGf_pFoaQPDusjzY0fc9nbGsy6VjgBhz0CtPuiUh6B6eW0Q_TvubMOeDfkRm2p-JYEzi-WphkqndZ7ZCYZuGj_mtM-JNWRdJmpqhVQMAw6HvRXNptg9-pO28jLaJuZ-MJhJBOtK7Y1kgQhWg5f6B4ONVx2rR05HEfziZU3NJt0Eb624H9PU6D5p-InLYIWSOpkB_i6Oo36C392-tFsoB_J0aT2aGkvkQmwVROwNZ9P1peirRC1dZ',
    origin: 'Afghanistan',
    weight: '500g',
    description: 'Rich in oil and nutrients, Gurbandi almonds are perfect for snacking or making almond milk.'
  },
  { 
    id: '204', 
    name: 'Saffron Kahwa Tea', 
    price: 495, 
    originalPrice: 600,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG9TTp-DjuymfgNOkEl3krU4Pt6ncG2aSE5cQRo9bP8mwkjSsu8o5znx5LTRXRkXLjU1Dz8fLdrLcvbl2TJbU4qCXqO-_m0pC81K8lkX6I3SIvfdna-qPmKoVhMozHaJAwYPe56rp6WJ_B8uC2tSiPu8apdxJCktR2-Cs_KBNEjsC9MAriO94X3rkjU6judybCe9LzcnnzE2dj1PdnkuE-mu_j90W7E9Vjs2z-fU0yFvXbaXb-BAjQwPHwoUa8LEJXmLbsv2YtFjv',
    origin: 'Kashmir',
    weight: '100g',
    description: 'Traditional Kashmiri green tea blended with saffron, almonds, and spices.'
  },
];

export const teas: Product[] = [
  { 
    id: '301', 
    name: 'Midnight Jasmine', 
    price: 650, 
    originalPrice: 800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_ogqsH15gyJ0rqisNq2HOceEpGf_pFoaQPDusjzY0fc9nbGsy6VjgBhz0CtPuiUh6B6eW0Q_TvubMOeDfkRm2p-JYEzi-WphkqndZ7ZCYZuGj_mtM-JNWRdJmpqhVQMAw6HvRXNptg9-pO28jLaJuZ-MJhJBOtK7Y1kgQhWg5f6B4ONVx2rR05HEfziZU3NJt0Eb624H9PU6D5p-InLYIWSOpkB_i6Oo36C392-tFsoB_J0aT2aGkvkQmwVROwNZ9P1peirRC1dZ',
    origin: 'Darjeeling',
    weight: '100g',
    category: 'Loose Leaf',
    description: 'A fragrant floral green tea infused with night-blooming jasmine flowers.'
  },
  { 
    id: '302', 
    name: 'Damask Rose Tea', 
    price: 720, 
    originalPrice: 900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG9TTp-DjuymfgNOkEl3krU4Pt6ncG2aSE5cQRo9bP8mwkjSsu8o5znx5LTRXRkXLjU1Dz8fLdrLcvbl2TJbU4qCXqO-_m0pC81K8lkX6I3SIvfdna-qPmKoVhMozHaJAwYPe56rp6WJ_B8uC2tSiPu8apdxJCktR2-Cs_KBNEjsC9MAriO94X3rkjU6judybCe9LzcnnzE2dj1PdnkuE-mu_j90W7E9Vjs2z-fU0yFvXbaXb-BAjQwPHwoUa8LEJXmLbsv2YtFjv',
    origin: 'Himachal Pradesh',
    weight: '75g',
    category: 'Wellness Blend',
    description: 'A soothing herbal blend featuring dried Damask rose petals for a calming experience.'
  },
];

export const featuredHero: Product = {
  id: '401',
  name: 'Sidr Forest Honey',
  price: 1250,
  originalPrice: 1500,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKm5ISPM5NdtBSS2NqvHKrx7-KT7RqGQuFmueBKW9os8MvlMfCYg0Va-6c5WT0KA6n7ke4Cn05C0SaoATBqdTX5v0UWP5NzlVyTR3ESsFeClJgUH9FxVoOJGaGaCrA8Ebw8YnQOyCVgV1Ymj_MypXF7IF0L-10p6qARvYV2dHwn7Ym4OJ_V5CNYibyS9dU-D1xqcME4gUqB3nidv1hhLipQ_6zSdd7JU4Gb_lMkrNe3kP9vcBlbzJuDVuSDwQabnFFZF1ArNiSktay',
  origin: 'Sundarbans',
  weight: '500g',
  description: 'Rare and exquisite raw honey harvested from the nectar of Sidr trees in deep forests.'
};

export const allProducts = [...bestsellers, ...specials, ...teas, featuredHero];
