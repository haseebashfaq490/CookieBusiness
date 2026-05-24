import { motion } from 'motion/react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

const products: Product[] = [
  {
    id: 'signature-cookies',
    name: 'The Ministry Signature Cookies',
    description: 'Our divine, thick, and perfectly gooey chocolate chip cookies. Handmade with love using high-quality organic ingredients, fresh eggs, and premium chocolate chunks.',
    price: {
      '3 Pack': '$12',
      '6 Pack': '$22',
      '12 Pack': '$40',
      '24 Pack': '$75',
    },
    options: ['3 Pack', '6 Pack', '12 Pack', '24 Pack'],
    imageSeed: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller'
  },
  {
    id: 'banana-bread',
    name: 'Heavenly Banana Bread Loaf',
    description: 'A special, moist homemade banana bread loaf top with a delicate crust. Baked with intense love and high quality ingredients. A true slice of heaven.',
    price: '$25',
    isSpecial: true,
    imageSeed: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Banana_bread_slices.jpg/960px-Banana_bread_slices.jpg',
    tag: 'Specialty'
  }
];

export function Products() {
  return (
    <section id="menu" className="py-32 bg-brand-100 relative border-b-2 border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="font-serif text-5xl md:text-6xl text-brand-950 font-bold italic mb-6">Regulated Deliverables</h2>
             <p className="text-brand-800 text-xl max-w-2xl mx-auto">Standardized issue. Authorized ingredients. Perfect execution.</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
             <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product, index: number }) {
  return (
     <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
        className="group flex flex-col bg-brand-200 rounded-3xl overflow-hidden border-2 border-brand-900 shadow-[8px_8px_0px_#3e2723] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#3e2723] transition-all duration-300 relative"
     >
        {/* Subtle background text as seen in the theme */}
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 font-serif text-8xl md:text-[120px] leading-none pointer-events-none z-0 tracking-tighter">
          {product.isSpecial ? 'LOAF' : 'COOKIES'}
        </div>

        <div className="relative h-64 md:h-80 overflow-hidden bg-brand-100 border-b-2 border-brand-900 z-10">
           <img 
              src={product.imageSeed}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
           />
           {product.tag && (
             <div className="absolute top-4 left-4 bg-brand-900 text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border border-brand-900 shadow-[2px_2px_0px_white]">
                {product.tag}
             </div>
           )}
        </div>
        <div className="p-8 flex-1 flex flex-col relative z-20">
           <h3 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-2">Primary Sector</h3>
           <h4 className="font-serif text-4xl font-bold mb-4 italic text-brand-950 tracking-tight leading-none">{product.name}</h4>
           <p className="text-brand-800 leading-relaxed mb-8 flex-1 text-sm font-medium">{product.description}</p>
           
           <div className="flex flex-col gap-6 pt-6 border-t-2 border-brand-900/10">
              <div className="flex flex-col w-full">
                 {typeof product.price === 'string' ? (
                   <div className="flex items-center justify-between">
                     <span className="text-3xl font-serif font-bold text-brand-950">{product.price}</span>
                     <div className="w-20 h-20 bg-brand-100 border-2 border-dashed border-brand-900 rounded-full flex items-center justify-center -mt-8 -mr-4 bg-white/50 backdrop-blur-sm relative z-20 shadow-sm rotate-[15deg]">
                        <span className="text-brand-900 font-bold text-center text-[10px] leading-tight uppercase p-1">Approved <br/> Issue</span>
                     </div>
                   </div>
                 ) : (
                    <div className="flex flex-col gap-3">
                       <div className="grid grid-cols-4 gap-2">
                          {Object.entries(product.price).map(([size, price], i) => {
                             const num = size.split(' ')[0];
                             const label = size.split(' ').slice(1).join(' ') || 'Pack';
                             const isHighlight = i === 3;
                             return (
                               <div key={size} className={`${isHighlight ? 'bg-brand-500 text-white' : 'bg-white text-brand-950'} p-2 rounded-xl text-center border-2 border-brand-900 shadow-[2px_2px_0px_#3e2723] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-pointer`}>
                                  <div className="text-xl md:text-2xl font-serif font-bold leading-none mb-1">{num.padStart(2, '0')}</div>
                                  <div className="text-[9px] uppercase font-bold tracking-widest">{label}</div>
                               </div>
                             );
                          })}
                       </div>
                    </div>
                 )}
              </div>
              
              <button className="bg-brand-900 hover:bg-brand-800 text-white w-full px-6 py-4 font-bold uppercase tracking-tighter transition-colors flex items-center justify-center gap-3 text-sm border-2 border-brand-900 shadow-[4px_4px_0px_#2c1810] hover:translate-y-1 hover:translate-x-1 hover:shadow-none">
                 <span>Requisition Order</span>
                 <ShoppingBag className="w-5 h-5" />
              </button>
           </div>
        </div>
     </motion.div>
  )
}
