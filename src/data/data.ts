import { Product } from '../types';

export const data: Product[] = [
  // Electronics
  {
    id: 'e1',
    name: 'Modern Wireless Headphones',
    category: 'electronics',
    price: 129.99,
    description: 'Premium over-ear wireless headphones with noise cancellation and superior sound quality.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['headphones', 'wireless', 'black', 'tech']
  },
  {
    id: 'e2',
    name: 'Smartphone with Triple Camera',
    category: 'electronics',
    price: 699.99,
    description: 'Latest smartphone featuring a triple-lens camera system and edge-to-edge display.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['phone', 'camera', 'black', 'tech']
  },
  {
    id: 'e3',
    name: 'Gaming Laptop',
    category: 'electronics',
    price: 1299.99,
    description: 'High-performance gaming laptop with RGB backlit keyboard and powerful graphics.',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['laptop', 'gaming', 'RGB', 'computer']
  },
  {
    id: 'e4',
    name: 'Smart Watch',
    category: 'electronics',
    price: 249.99,
    description: 'Feature-rich smartwatch with health tracking and customizable watch faces.',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['watch', 'smart', 'fitness', 'wearable']
  },
  {
    id: 'e5',
    name: 'Wireless Speaker',
    category: 'electronics',
    price: 89.99,
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['speaker', 'bluetooth', 'portable', 'music']
  },
  {
    id: 'e6',
    name: 'Digital Camera',
    category: 'electronics',
    price: 899.99,
    description: 'Professional DSLR camera with interchangeable lenses and 4K video recording.',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['camera', 'DSLR', 'photography', 'professional']
  },

  // Fashion
  {
    id: 'f1',
    name: 'Classic Leather Jacket',
    category: 'fashion',
    price: 199.99,
    description: 'Timeless black leather jacket with a modern slim fit and premium craftsmanship.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['jacket', 'leather', 'black', 'clothing']
  },
  {
    id: 'f2',
    name: 'Designer Sunglasses',
    category: 'fashion',
    price: 159.99,
    description: 'Stylish aviator sunglasses with UV protection and premium metal frame.',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['sunglasses', 'aviator', 'accessories', 'UV']
  },
  {
    id: 'f3',
    name: 'Casual Sneakers',
    category: 'fashion',
    price: 79.99,
    description: 'Comfortable white sneakers perfect for everyday wear with breathable design.',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['sneakers', 'white', 'casual', 'shoes']
  },
  {
    id: 'f4',
    name: 'Elegant Handbag',
    category: 'fashion',
    price: 149.99,
    description: 'Luxurious leather handbag with multiple compartments and adjustable strap.',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['handbag', 'leather', 'elegant', 'accessories']
  },
  {
    id: 'f5',
    name: 'Vintage Denim Jacket',
    category: 'fashion',
    price: 89.99,
    description: 'Classic denim jacket with vintage wash and comfortable relaxed fit.',
    image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['denim', 'jacket', 'vintage', 'blue']
  },
  {
    id: 'f6',
    name: 'Formal Dress Shirt',
    category: 'fashion',
    price: 59.99,
    description: 'Crisp white dress shirt made from premium cotton with tailored fit.',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['shirt', 'formal', 'white', 'cotton']
  },

  // Home & Garden
  {
    id: 'h1',
    name: 'Modern Table Lamp',
    category: 'home',
    price: 79.99,
    description: 'Contemporary table lamp with adjustable brightness and sleek metal base.',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['lamp', 'modern', 'lighting', 'decor']
  },
  {
    id: 'h2',
    name: 'Decorative Plant Pot',
    category: 'home',
    price: 29.99,
    description: 'Beautiful ceramic plant pot with drainage system and modern geometric design.',
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['pot', 'plant', 'ceramic', 'garden']
  },
  {
    id: 'h3',
    name: 'Cozy Throw Pillow',
    category: 'home',
    price: 24.99,
    description: 'Soft velvet throw pillow in neutral tones perfect for any living space.',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['pillow', 'velvet', 'cozy', 'decor']
  },
  {
    id: 'h4',
    name: 'Wooden Coffee Table',
    category: 'home',
    price: 299.99,
    description: 'Handcrafted wooden coffee table with natural finish and modern design.',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['table', 'wood', 'coffee', 'furniture']
  },
  {
    id: 'h5',
    name: 'Aromatherapy Candle',
    category: 'home',
    price: 19.99,
    description: 'Hand-poured soy candle with lavender scent for relaxation and ambiance.',
    image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['candle', 'aromatherapy', 'lavender', 'relaxation']
  },
  {
    id: 'h6',
    name: 'Wall Art Print',
    category: 'home',
    price: 39.99,
    description: 'Abstract geometric wall art print with modern color palette and premium framing.',
    image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['art', 'print', 'abstract', 'wall']
  },

  // Sports & Fitness
  {
    id: 's1',
    name: 'Yoga Mat',
    category: 'sports',
    price: 39.99,
    description: 'Non-slip yoga mat with extra cushioning and eco-friendly materials.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['yoga', 'mat', 'fitness', 'exercise']
  },
  {
    id: 's2',
    name: 'Running Shoes',
    category: 'sports',
    price: 119.99,
    description: 'High-performance running shoes with advanced cushioning and breathable mesh.',
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['shoes', 'running', 'sports', 'athletic']
  },
  {
    id: 's3',
    name: 'Dumbbells Set',
    category: 'sports',
    price: 89.99,
    description: 'Adjustable dumbbell set with comfortable grip handles for strength training.',
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['dumbbells', 'weights', 'strength', 'fitness']
  },
  {
    id: 's4',
    name: 'Basketball',
    category: 'sports',
    price: 29.99,
    description: 'Official size basketball with superior grip and indoor/outdoor compatibility.',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['basketball', 'sports', 'ball', 'game']
  },
  {
    id: 's5',
    name: 'Water Bottle',
    category: 'sports',
    price: 19.99,
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours.',
    image: 'https://images.pexels.com/photos/1031590/pexels-photo-1031590.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['bottle', 'water', 'insulated', 'hydration']
  },
  {
    id: 's6',
    name: 'Tennis Racket',
    category: 'sports',
    price: 149.99,
    description: 'Professional tennis racket with lightweight frame and precision string pattern.',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['tennis', 'racket', 'sports', 'equipment']
  },

  // Books & Media
  {
    id: 'b1',
    name: 'Vintage Book Collection',
    category: 'books',
    price: 49.99,
    description: 'Classic literature collection with beautiful vintage covers and premium binding.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['books', 'vintage', 'literature', 'collection']
  },
  {
    id: 'b2',
    name: 'Art Photography Book',
    category: 'books',
    price: 34.99,
    description: 'Stunning coffee table book featuring contemporary landscape photography.',
    image: 'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['book', 'photography', 'art', 'coffee table']
  },
  {
    id: 'b3',
    name: 'Cookbook Collection',
    category: 'books',
    price: 39.99,
    description: 'Comprehensive cookbook with international recipes and beautiful food photography.',
    image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['cookbook', 'recipes', 'food', 'cooking']
  },
  {
    id: 'b4',
    name: 'Travel Guide',
    category: 'books',
    price: 24.99,
    description: 'Comprehensive travel guide with insider tips and stunning destination photos.',
    image: 'https://images.pexels.com/photos/1010644/pexels-photo-1010644.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['travel', 'guide', 'destinations', 'adventure']
  },
  {
    id: 'b5',
    name: 'Design Magazine',
    category: 'books',
    price: 12.99,
    description: 'Latest issue of premier design magazine featuring modern architecture and interiors.',
    image: 'https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['magazine', 'design', 'architecture', 'modern']
  },
  {
    id: 'b6',
    name: 'Notebook Set',
    category: 'books',
    price: 18.99,
    description: 'Premium leather-bound notebook set with lined pages and elastic closure.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['notebook', 'leather', 'writing', 'journal']
  },

  // Food & Beverage
  {
    id: 'food1',
    name: 'Artisan Coffee Beans',
    category: 'food',
    price: 24.99,
    description: 'Single-origin coffee beans with rich, complex flavor profile and sustainable sourcing.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['coffee', 'beans', 'artisan', 'organic']
  },
  {
    id: 'food2',
    name: 'Gourmet Tea Set',
    category: 'food',
    price: 34.99,
    description: 'Premium loose leaf tea collection with elegant packaging and brewing guide.',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['tea', 'gourmet', 'loose leaf', 'collection']
  },
  {
    id: 'food3',
    name: 'Organic Honey',
    category: 'food',
    price: 16.99,
    description: 'Pure organic honey from local beekeepers with natural flavors and health benefits.',
    image: 'https://images.pexels.com/photos/1340224/pexels-photo-1340224.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['honey', 'organic', 'natural', 'local']
  },
  {
    id: 'food4',
    name: 'Craft Beer Collection',
    category: 'food',
    price: 29.99,
    description: 'Curated selection of craft beers from local breweries with tasting notes.',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['beer', 'craft', 'brewery', 'collection']
  },
  {
    id: 'food5',
    name: 'Dark Chocolate Bar',
    category: 'food',
    price: 8.99,
    description: 'Premium dark chocolate with 70% cocoa content and subtle vanilla notes.',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['chocolate', 'dark', 'premium', 'cocoa']
  },
  {
    id: 'food6',
    name: 'Spice Collection',
    category: 'food',
    price: 22.99,
    description: 'Exotic spice collection from around the world in beautiful glass containers.',
    image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['spices', 'exotic', 'collection', 'cooking']
  },

  // Beauty & Personal Care
  {
    id: 'beauty1',
    name: 'Skincare Serum',
    category: 'beauty',
    price: 45.99,
    description: 'Anti-aging serum with vitamin C and hyaluronic acid for radiant skin.',
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['serum', 'skincare', 'vitamin C', 'anti-aging']
  },
  {
    id: 'beauty2',
    name: 'Luxury Perfume',
    category: 'beauty',
    price: 89.99,
    description: 'Elegant floral perfume with notes of jasmine, rose, and sandalwood.',
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['perfume', 'luxury', 'floral', 'fragrance']
  },
  {
    id: 'beauty3',
    name: 'Lipstick Set',
    category: 'beauty',
    price: 32.99,
    description: 'Long-lasting lipstick collection in trending shades with moisturizing formula.',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['lipstick', 'makeup', 'collection', 'colors']
  },
  {
    id: 'beauty4',
    name: 'Face Mask Set',
    category: 'beauty',
    price: 28.99,
    description: 'Hydrating face mask collection with natural ingredients for all skin types.',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['mask', 'skincare', 'hydrating', 'natural']
  },
  {
    id: 'beauty5',
    name: 'Hair Care Set',
    category: 'beauty',
    price: 38.99,
    description: 'Professional shampoo and conditioner set for damaged and dry hair.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['haircare', 'shampoo', 'conditioner', 'professional']
  },
  {
    id: 'beauty6',
    name: 'Makeup Brushes',
    category: 'beauty',
    price: 42.99,
    description: 'Professional makeup brush set with synthetic bristles and ergonomic handles.',
    image: 'https://images.pexels.com/photos/2533437/pexels-photo-2533437.jpeg?auto=compress&cs=tinysrgb&w=500',
    sourceUrl: '#',
    tags: ['brushes', 'makeup', 'professional', 'synthetic']
  }
];