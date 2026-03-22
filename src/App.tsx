import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Instagram, Facebook, Clock, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import logo from "./images/gandom-pastry-logo-primary.png";

const PRODUCTS = [
  {
    id: 1,
    name: 'کیک تولد مخصوص',
    nameEn: 'Special Birthday Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    price: '۱۲۰۰ افغانی',
    rating: 5
  },
  {
    id: 2,
    name: 'شیرینی خشک گندم',
    nameEn: 'Gandom Dry Pastry',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800',
    price: '۴۵۰ افغانی',
    rating: 4.8
  },
  {
    id: 3,
    name: 'باقلوا مخصوص',
    nameEn: 'Special Baklava',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800',
    price: '۶۰۰ افغانی',
    rating: 4.9
  },
  {
    id: 4,
    name: 'کلوچه های سنتی',
    nameEn: 'Traditional Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800',
    price: '۳۰۰ افغانی',
    rating: 4.7
  },
  {
    id: 5,
    name: 'دسر میوه ای',
    nameEn: 'Fruit Dessert',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    price: '۸۰۰ افغانی',
    rating: 4.9
  }
];

const GALLERY = [
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&q=80&w=800',
];

const ProductCard = ({ product, index, isEnglish }: { product: typeof PRODUCTS[0], index: number, isEnglish: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -15, 
        rotateY: 12, 
        rotateX: -5,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(245, 186, 39, 0.25)"
      }}
      className="min-w-[300px] md:min-w-[350px] bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gold/10 group perspective-1000 preserve-3d transition-all duration-500"
    >
      <div className="h-72 overflow-hidden relative preserve-3d">
        <motion.img
          whileHover={{ scale: 1.15 }}
          src={product.image}
          alt={isEnglish ? product.nameEn : product.name}
          className="w-full h-full object-cover transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute top-6 ${isEnglish ? 'right-6' : 'left-6'} bg-gold/90 backdrop-blur-md text-brown-dark px-4 py-1.5 rounded-full text-sm font-black shadow-xl border border-white/20`}>
          {isEnglish ? product.price.replace('افغانی', 'AFN') : product.price}
        </div>
      </div>
      <div className={`p-8 ${isEnglish ? 'text-left' : 'text-right'} bg-gradient-to-b from-white to-gold-light/20`}>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5 text-gold">
            <Star size={18} fill="currentColor" />
            <span className="text-sm font-black">{product.rating}</span>
          </div>
          <h3 className="text-2xl font-black text-brown-dark">{isEnglish ? product.nameEn : product.name}</h3>
        </div>
        <p className="text-brown-light/70 text-sm mb-6 font-sans font-medium tracking-wide">
          {isEnglish ? "Premium Quality" : "کیفیت عالی"}
        </p>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#F5BA27", color: "#2D241E" }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-brown-dark text-gold border border-gold/20 rounded-2xl font-black text-lg shadow-lg transition-all duration-300"
        >
          {isEnglish ? "View Details" : "مشاهده جزئیات"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.2], [0, -15]);

  const t = {
    nav: {
      story: isEnglish ? "Our Story" : "داستان ما",
      gallery: isEnglish ? "Gallery" : "گالری",
      testimonials: isEnglish ? "Reviews" : "نظرات",
      contact: isEnglish ? "Contact Us" : "تماس با ما",
      lang: isEnglish ? "فارسی" : "English",
    },
    hero: {
      title: isEnglish ? "Gandom" : "گندم",
      shop: isEnglish ? "Pastry Shop" : "شیرینی سرای",
      subtitle: isEnglish 
        ? "The art of baking authentic pastries with a taste that stays in memories" 
        : "هنر پخت شیرینی‌های اصیل با طعمی که در خاطره‌ها می‌ماند",
      menu: isEnglish ? "View Menu" : "مشاهده منو",
      about: isEnglish ? "About Us" : "درباره ما",
    },
    products: {
      title: isEnglish ? "Featured" : "محصولات",
      subtitle: isEnglish ? "Products" : "برتر",
      tag: isEnglish ? "Exquisite Selection" : "انتخاب نفیس",
    },
    story: {
      title: isEnglish ? "Our" : "داستان",
      subtitle: isEnglish ? "Story" : "ما",
      desc: isEnglish 
        ? "Since our humble beginnings in Dashte Barchi, Gandom Pastry has been more than just a bakery. It's a place where tradition meets passion. Every recipe is a legacy passed down through generations, refined for the modern palate while keeping the soul of Kabul's authentic flavors alive."
        : "از آغاز فروتنانه ما در دشت برچی، شیرینی‌سرای گندم فراتر از یک نانوایی بوده است. اینجا مکانی است که سنت با اشتیاق ملاقات می‌کند. هر دستور پخت میراثی است که نسل به نسل منتقل شده و برای ذائقه مدرن اصلاح شده است، در حالی که روح طعم‌های اصیل کابل را زنده نگه می‌دارد.",
      highlight: isEnglish ? "Handcrafted with Love" : "ساخته شده با عشق",
    },
    gallery: {
      title: isEnglish ? "Photo" : "گالری",
      subtitle: isEnglish ? "Gallery" : "تصاویر",
      desc: isEnglish ? "A glimpse of our cozy space and fresh products" : "گوشه‌ای از فضای دلنشین و محصولات تازه ما",
    },
    testimonials: {
      title: isEnglish ? "Customer" : "نظرات",
      subtitle: isEnglish ? "Reviews" : "مشتریان",
      items: [
        { 
          name: isEnglish ? "Ahmad" : "احمد", 
          text: isEnglish ? "The best baklava I've ever had in Kabul. Highly recommended!" : "بهترین باقلوایی که تا به حال در کابل خورده‌ام. شدیداً پیشنهاد می‌شود!",
          rating: 5 
        },
        { 
          name: isEnglish ? "Sara" : "سارا", 
          text: isEnglish ? "Their birthday cakes are not only beautiful but delicious too." : "کیک‌های تولدشان نه تنها زیبا هستند بلکه بسیار خوشمزه هم هستند.",
          rating: 5 
        },
        { 
          name: isEnglish ? "Mustafa" : "مصطفی", 
          text: isEnglish ? "Fresh every day. The aroma when you walk in is magical." : "هر روز تازه. عطری که هنگام ورود استشمام می‌کنید جادویی است.",
          rating: 4.9 
        },
      ]
    },
    features: [
      { 
        title: isEnglish ? "Fresh Ingredients" : "مواد اولیه تازه", 
        desc: isEnglish 
          ? "We use only the best and freshest ingredients to create magical flavors." 
          : "ما فقط از بهترین و تازه‌ترین مواد اولیه برای خلق طعم‌های جادویی استفاده می‌کنیم."
      },
      { 
        title: isEnglish ? "Daily Baking" : "پخت روزانه", 
        desc: isEnglish 
          ? "Every morning, the aroma of fresh bread and pastries fills the Barchi area." 
          : "هر روز صبح، عطر نان و شیرینی تازه در فضای برچی می‌پیچد. کیفیت خط قرمز ماست."
      },
      { 
        title: isEnglish ? "Custom Orders" : "سفارشات خاص", 
        desc: isEnglish 
          ? "For the special moments of your life, we prepare custom cakes and desserts." 
          : "برای لحظات خاص زندگی شما، کیک‌ها و دسر‌های سفارشی با طراحی دلخواه شما آماده می‌کنیم."
      },
    ],
    location: {
      title: isEnglish ? "Sweet Host" : "میزبان",
      subtitle: isEnglish ? "of Your Moments" : "شیرین لحظات شما",
      address: {
        label: isEnglish ? "Our Address" : "آدرس ما",
        value: isEnglish 
          ? "Barchi, Shahid Mazari Road, Shifakhana Station, near Quran and Etrat Mosque" 
          : "برچی، جاده شهید مزاری، ایستگاه شفاخانه، جوار مسجد قرآن و عترت",
      },
      phone: {
        label: isEnglish ? "Contact Number" : "شماره تماس",
        value: isEnglish ? "+93 79 415 8538 / +93 700494494" : "+۹۳ ۷۹ ۴۱۵ ۸۵۳۸ / +۹۳ ۷۰۰۴۹۴۴۹۴",
      },
      hours: {
        label: isEnglish ? "Working Hours" : "ساعات کاری",
        value: isEnglish ? "Every day from 7:00 AM to 9:30 PM" : "همه روزه از ساعت ۷:۰۰ صبح الی ۹:۳۰ شب",
      },
      invite: isEnglish ? "We look forward to your warm visit" : "منتظر دیدار گرم شما هستیم",
    },
    footer: {
      rights: isEnglish ? "All rights reserved for Gandom Pastry Shop © 2024" : "تمامی حقوق برای شیرینی سرای گندم محفوظ است © ۲۰۲۴",
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-cream selection:bg-gold selection:text-brown-dark ${isEnglish ? 'font-sans' : 'font-farsi'}`}
      style={{ direction: isEnglish ? 'ltr' : 'rtl' }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-5 flex justify-between items-center bg-section-dark/60 backdrop-blur-xl border-b border-gold/5">
        {/* Left Side: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { id: 'story', label: t.nav.story },
            { id: 'gallery', label: t.nav.gallery },
            { id: 'testimonials', label: t.nav.testimonials },
            { id: 'contact', label: t.nav.contact }
          ].map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              whileHover={{ scale: 1.05, color: "#F5BA27" }}
              className="text-white font-black text-sm uppercase tracking-widest transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <motion.div 
            className="h-12 w-12 bg-white rounded-2xl shadow-lg border border-gold/10 p-2 flex items-center justify-center"
          >
            <img 
  src={logo}
  alt="Gandom Pastry Logo" 
  className="h-full w-full object-contain"
/>
          </motion.div>
        </div>

        {/* Right Side: Language Toggle */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setIsEnglish(!isEnglish)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 rounded-2xl border border-gold/20 text-white font-black hover:bg-gold/10 transition-colors"
          >
            {t.nav.lang}
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-end pb-0 relative overflow-hidden px-6 perspective-1000">
        {/* Spline 3D Hero Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Spline */}
          <iframe 
            src='https://my.spline.design/textfromballoonswithinteractiveanimation-bWDPhenPGYrJ1bmMubHlYtoH/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="absolute inset-0 w-full h-full hidden md:block"
            title="Spline 3D Background Desktop"
          ></iframe>
          {/* Mobile/Tablet Spline */}
          <iframe 
            src='https://my.spline.design/faisalgandompastrym-jhyHPNaMz5C2I6SkvxvJKDiE/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="absolute inset-0 w-full h-full block md:hidden"
            title="Spline 3D Background Mobile"
          ></iframe>
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, rotateX: heroRotate }}
          className="text-center z-10 preserve-3d pointer-events-none"
        >
          <div className="pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="mb-8 inline-block p-4 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-gold/20 shadow-2xl"
            >
              <Star className="text-gold" size={48} fill="currentColor" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="text-5xl md:text-[7rem] font-black text-white mb-2 leading-tight tracking-tighter"
            >
              {isEnglish ? (
                <>
                  <span className="text-gold drop-shadow-[0_10px_10px_rgba(245,186,39,0.3)]">{t.hero.title}</span> {t.hero.shop}
                </>
              ) : (
                <>
                  {t.hero.shop} <span className="text-gold drop-shadow-[0_10px_10px_rgba(245,186,39,0.3)]">{t.hero.title}</span>
                </>
              )}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="text-xl md:text-2xl text-white/80 mb-0 max-w-3xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Side Scrolling Products */}
      <section id="products" className="py-32 bg-[#FFF2E9] text-brown-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-section-dark to-transparent opacity-20" />
        
        <div className="px-6 mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4 order-2 md:order-1">
            <button className="p-4 rounded-2xl border border-gold/20 text-gold hover:bg-gold hover:text-brown-dark transition-all duration-500 shadow-xl">
              {isEnglish ? <ChevronLeft size={32} /> : <ChevronRight size={32} />}
            </button>
            <button className="p-4 rounded-2xl border border-gold/20 text-gold hover:bg-gold hover:text-brown-dark transition-all duration-500 shadow-xl">
              {isEnglish ? <ChevronRight size={32} /> : <ChevronLeft size={32} />}
            </button>
          </div>
          <div className={`order-1 md:order-2 ${isEnglish ? 'text-left' : 'text-right'}`}>
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-brown-dark">
              {isEnglish ? (
                <>
                  {t.products.title} <span className="text-gold drop-shadow-lg">{t.products.subtitle}</span>
                </>
              ) : (
                <>
                  {t.products.subtitle} <span className="text-gold drop-shadow-lg">{t.products.title}</span>
                </>
              )}
            </h2>
            <div className={`h-1.5 w-32 bg-gold rounded-full mb-4 ${isEnglish ? 'mr-auto' : 'ml-auto'}`} />
            <p className="text-gold font-sans uppercase tracking-[0.4em] text-xs font-black">{t.products.tag}</p>
          </div>
        </div>

        <motion.div 
          className="flex gap-10 px-6 pb-20 cursor-grab active:cursor-grabbing overflow-x-auto no-scrollbar snap-x"
          drag="x"
          dragConstraints={{ right: 0, left: -1400 }}
        >
          {PRODUCTS.map((product, idx) => (
            <div key={product.id} className="snap-center">
              <ProductCard product={product} index={idx} isEnglish={isEnglish} />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-32 bg-section-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: isEnglish ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=1000" 
              alt="Baking Process" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isEnglish ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={isEnglish ? 'text-left' : 'text-right'}
          >
            <span className="text-gold font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t.story.highlight}</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              {t.story.title} <span className="text-gold">{t.story.subtitle}</span>
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-10 opacity-80">
              {t.story.desc}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-brown-dark rounded-2xl font-black text-lg shadow-xl"
            >
              {isEnglish ? "Discover More" : "بیشتر بدانید"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Side Scroll */}
      <section id="gallery" className="py-32 bg-section-light overflow-hidden">
        <div className="px-6 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-brown-dark mb-4">
            {isEnglish ? (
              <>
                {t.gallery.title} <span className="text-gold">{t.gallery.subtitle}</span>
              </>
            ) : (
              <>
                {t.gallery.title} <span className="text-gold">{t.gallery.subtitle}</span>
              </>
            )}
          </h2>
          <p className="text-brown-light text-xl">{t.gallery.desc}</p>
        </div>

        <motion.div 
          ref={galleryRef}
          className="flex gap-6 px-6 pb-10 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {GALLERY.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.95, rotate: i % 2 === 0 ? 2 : -2 }}
              className="min-w-[400px] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-brown-dark mb-4">
              {t.testimonials.title} <span className="text-gold">{t.testimonials.subtitle}</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-white rounded-[3rem] shadow-xl border border-gold/5 relative"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star 
                      key={starIdx} 
                      size={16} 
                      fill={starIdx < Math.floor(item.rating) ? "currentColor" : "none"} 
                      className={starIdx < Math.floor(item.rating) ? "" : "text-gold/30"}
                    />
                  ))}
                </div>
                <p className="text-brown-light text-lg italic mb-8 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-light rounded-full flex items-center justify-center text-gold font-black">
                    {item.name[0]}
                  </div>
                  <span className="font-black text-brown-dark">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - 3D Cards */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto relative bg-section-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ 
                rotateX: 15, 
                rotateY: -15, 
                translateZ: 50,
                boxShadow: "0 30px 60px -15px rgba(0,0,0,0.2)"
              }}
              className={`p-12 bg-white rounded-[3rem] shadow-2xl border border-gold/10 perspective-1000 preserve-3d group cursor-default ${isEnglish ? 'text-left' : 'text-right'}`}
            >
              <div className={`w-20 h-20 bg-gold-light rounded-3xl flex items-center justify-center text-gold mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg ${isEnglish ? 'mr-auto' : 'ml-auto'}`}>
                <Star size={40} />
              </div>
              <h3 className="text-3xl font-black mb-6 text-brown-dark">{feature.title}</h3>
              <p className="text-brown-light leading-relaxed text-lg font-medium">{feature.desc}</p>
              <div className="mt-8 h-1 w-12 bg-gold/30 rounded-full group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-32 bg-section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: isEnglish ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={isEnglish ? 'text-left' : 'text-right'}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-12 text-brown-dark leading-tight">
              {isEnglish ? (
                <>
                  {t.location.title} <span className="text-gold">{t.location.subtitle}</span>
                </>
              ) : (
                <>
                  {t.location.title} <span className="text-gold">{t.location.subtitle}</span>
                </>
              )}
            </h2>
            
            <div className="space-y-10">
              <motion.div whileHover={{ x: isEnglish ? 10 : -10 }} className={`flex items-start gap-6 group ${isEnglish ? 'justify-start' : 'justify-end'}`}>
                {isEnglish && (
                  <div className="p-5 bg-section-dark rounded-2xl text-gold shadow-xl border border-gold/10 group-hover:bg-gold group-hover:text-brown-dark transition-all">
                    <MapPin size={32} />
                  </div>
                )}
                <div className={isEnglish ? 'text-left' : 'text-right'}>
                  <h4 className="text-2xl font-black mb-2 text-brown-dark group-hover:text-gold transition-colors">{t.location.address.label}</h4>
                  <p className="text-brown-light text-lg">{t.location.address.value}</p>
                </div>
                {!isEnglish && (
                  <div className="p-5 bg-section-dark rounded-2xl text-gold shadow-xl border border-gold/10 group-hover:bg-gold group-hover:text-brown-dark transition-all">
                    <MapPin size={32} />
                  </div>
                )}
              </motion.div>

              <motion.div whileHover={{ x: isEnglish ? 10 : -10 }} className={`flex items-start gap-6 group ${isEnglish ? 'justify-start' : 'justify-end'}`}>
                {isEnglish && (
                  <div className="p-5 bg-section-dark rounded-2xl text-gold shadow-xl border border-gold/10 group-hover:bg-gold group-hover:text-brown-dark transition-all">
                    <Phone size={32} />
                  </div>
                )}
                <div className={isEnglish ? 'text-left' : 'text-right'}>
                  <h4 className="text-2xl font-black mb-2 text-brown-dark group-hover:text-gold transition-colors">{t.location.phone.label}</h4>
                  <p className="text-brown-light text-lg font-sans">{t.location.phone.value}</p>
                </div>
                {!isEnglish && (
                  <div className="p-5 bg-section-dark rounded-2xl text-gold shadow-xl border border-gold/10 group-hover:bg-gold group-hover:text-brown-dark transition-all">
                    <Phone size={32} />
                  </div>
                )}
              </motion.div>

              <motion.div whileHover={{ x: isEnglish ? 10 : -10 }} className={`flex items-start gap-6 group ${isEnglish ? 'justify-start' : 'justify-end'}`}>
                {isEnglish && (
                  <div className="p-5 bg-section-dark rounded-2xl text-gold shadow-xl border border-gold/10 group-hover:bg-gold group-hover:text-brown-dark transition-all">
                    <Clock size={32} />
                  </div>
                )}
                <div className={isEnglish ? 'text-left' : 'text-right'}>
                  <h4 className="text-2xl font-black mb-2 text-brown-dark group-hover:text-gold transition-colors">{t.location.hours.label}</h4>
                  <p className="text-brown-light text-lg">{t.location.hours.value}</p>
                </div>
                {!isEnglish && (
                  <div className="p-5 bg-section-dark rounded-2xl text-gold shadow-xl border border-gold/10 group-hover:bg-gold group-hover:text-brown-dark transition-all">
                    <Clock size={32} />
                  </div>
                )}
              </motion.div>
            </div>

            <div className={`mt-16 flex gap-6 ${isEnglish ? 'justify-start' : 'justify-end'}`}>
              <motion.a 
                whileHover={{ y: -10, scale: 1.1 }} 
                href="#" 
                className="p-6 bg-section-dark rounded-[2rem] text-gold shadow-2xl hover:bg-gold hover:text-brown-dark transition-all border border-gold/5"
              >
                <Instagram size={36} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -10, scale: 1.1 }} 
                href="https://www.facebook.com/Gandompastry/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-section-dark rounded-[2rem] text-gold shadow-2xl hover:bg-gold hover:text-brown-dark transition-all border border-gold/5"
              >
                <Facebook size={36} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: isEnglish ? -5 : 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative h-[650px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white perspective-1000 preserve-3d"
          >
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000" 
              alt="Store Front" 
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-10 right-10 bg-white/10 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/20 shadow-2xl">
              <p className="text-white font-black text-2xl text-center leading-relaxed">
                {t.location.invite} <br/>
                <span className="text-gold text-4xl mt-2 block">{isEnglish ? "Gandom Pastry" : "شیرینی سرای گندم"}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-section-dark text-white/40 text-center border-t border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]" />
        </div>
        <div className="mb-10 relative z-10">
          <span className="text-5xl font-serif font-black text-gold tracking-tighter drop-shadow-lg">GANDOM</span>
          <div className="h-1 w-20 bg-gold/30 mx-auto mt-4 rounded-full" />
        </div>
        <p className="text-lg mb-4 text-white/80">{t.footer.rights}</p>
        <div className="flex justify-center gap-8 text-xs font-sans font-black tracking-[0.3em] uppercase opacity-40 text-white">
          <span>Quality</span>
          <span>•</span>
          <span>Tradition</span>
          <span>•</span>
          <span>Kabul</span>
        </div>
      </footer>
    </div>
  );
}

