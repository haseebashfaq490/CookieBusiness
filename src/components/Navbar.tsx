import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['2px solid transparent', '2px solid #3e2723']
  );

  return (
    <motion.nav
      style={{ backgroundColor: 'white', borderBottom }}
      className="fixed inset-x-2 top-2 z-50 transition-colors duration-300 border-2 border-brand-900 shadow-[4px_4px_0px_#3e2723]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-900 rounded-full flex items-center justify-center border-2 border-brand-900 shadow-sm overflow-hidden">
              <img src="./logo.svg" alt="The Cookies Ministry Logo" className="w-full h-full object-cover" />
            </div>
            <a href="#" className="font-serif text-lg md:text-2xl font-black tracking-tight uppercase text-brand-950 block max-w-[160px] md:max-w-none leading-tight md:leading-normal">
              The Cookies Ministry
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Menu'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-brand-950 hover:text-brand-500 transition-colors text-sm font-bold uppercase tracking-widest border-b-[3px] border-transparent hover:border-brand-500 pb-1">
                {item}
              </a>
            ))}
            <button className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-2.5 font-bold uppercase tracking-tighter transition-colors text-sm border-2 border-brand-900 shadow-[2px_2px_0px_#2c1810] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
          </div>

           <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-brand-900">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
           </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t-2 border-brand-900 px-4 pt-2 pb-4 space-y-1"
        >
          {['Home', 'About', 'Menu'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-950 hover:text-brand-500 hover:bg-brand-200">
              {item}
            </a>
          ))}
          <button className="w-full text-center justify-center bg-brand-900 hover:bg-brand-800 text-white px-3 py-3 mt-4 font-bold uppercase tracking-tighter transition-colors flex items-center gap-2 border-2 border-brand-900">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
