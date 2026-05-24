import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-100 pt-20 border-b-2 border-brand-900 bg-[linear-gradient(rgba(62,39,35,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(62,39,35,0.05)_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-6 inline-block bg-brand-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em]"
        >
            <span>Official Government Directive #402</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-brand-950 mb-8 leading-[1.1] max-w-5xl tracking-normal text-balance font-bold italic"
        >
          Legislating Sweetness<br/>
          <span className="italic text-brand-500">for the Masses.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-brand-800 mb-12 max-w-2xl leading-relaxed"
        >
          By decree of the Ministry, only the finest, highest-quality organic ingredients are permitted. Everything is handmade with love in our small-batch ovens.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu" className="bg-brand-900 text-white px-8 py-4 font-bold uppercase tracking-tighter hover:bg-brand-800 transition-colors border-2 border-brand-900 flex items-center justify-center gap-2 group text-sm shadow-[4px_4px_0px_#3e2723] hover:translate-y-1 hover:translate-x-1 hover:shadow-none">
            Place Order
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="bg-white text-brand-950 px-8 py-4 font-bold uppercase border-2 border-brand-900 tracking-tighter hover:bg-brand-200 transition-colors flex items-center justify-center gap-2 text-sm shadow-[4px_4px_0px_#3e2723] hover:translate-y-1 hover:translate-x-1 hover:shadow-none">
            View Manifesto
          </a>
        </motion.div>
      </div>
    </div>
  );
}
