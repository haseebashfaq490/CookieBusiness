import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden border-b-2 border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
             <div className="mb-6 inline-block bg-brand-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
                 The Charter
             </div>
             <h2 className="font-serif text-5xl md:text-6xl text-brand-950 font-bold italic mb-8 leading-tight">Handmade <br/> With Love.</h2>
             <p className="text-brand-800 text-lg md:text-xl leading-relaxed mb-6">
                What started as a heartfelt mission to bake the perfect cookie has been formally codified into a ministry of joy. We mandate that a truly spectacular baked good has the power to uplift the spirit, using only the absolute highest quality ingredients.
             </p>
             <p className="text-brand-800 text-lg md:text-xl leading-relaxed mb-8">
                Every batch is carefully handmade with love. We source raw, organic flour, farm-fresh eggs, and rich browned butter. Whether it's our signature gooey cookies or the homemade banana bread, nothing leaves our oven without our seal of uncompromising quality.
             </p>
             <div className="border-l-4 border-brand-900 pl-6 py-2 mt-12 bg-brand-200 p-6 border-y border-r border-brand-900 shadow-[4px_4px_0px_#3e2723]">
                <p className="font-serif text-2xl md:text-3xl font-bold italic text-brand-950">
                   "A mandatory experience in every bite." <br/>
                   <span className="text-sm font-sans not-italic font-bold tracking-[0.2em] uppercase text-brand-500 mt-4 block">- Article IV</span>
                </p>
             </div>
          </motion.div>

          <div className="relative h-[500px] md:h-[600px] w-full order-1 lg:order-2">
             <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 right-0 w-[80%] h-[75%] rounded-3xl overflow-hidden border-2 border-brand-900 shadow-[8px_8px_0px_#3e2723]"
             >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Dough.jpg/960px-Dough.jpg" alt="Raw baking ingredients like flour and eggs" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
             </motion.div>
             <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden border-2 border-brand-900 shadow-[8px_8px_0px_#3e2723] bg-brand-100"
             >
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" alt="Handmade dough process" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700" referrerPolicy="no-referrer" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
