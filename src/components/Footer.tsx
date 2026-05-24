import { motion } from 'motion/react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-brand-800 border-2 border-brand-800 p-8 shadow-[4px_4px_0px_#2c1810]">
          <div className="flex flex-col pb-8 md:pb-0 md:pr-8">
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-2 uppercase text-white">
              The Cookies Ministry
            </h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-500">
              Department of Culinary Standards
            </p>
          </div>
          
          <div className="flex justify-center items-center py-8 md:py-0 md:px-8">
             <div className="flex space-x-8">
               <a href="#" className="text-white hover:text-brand-500 transition-colors p-3 border border-brand-800 rounded-full hover:bg-brand-800">
                 <Instagram className="w-5 h-5" />
                 <span className="sr-only">Instagram</span>
               </a>
               <a href="#" className="text-white hover:text-brand-500 transition-colors p-3 border border-brand-800 rounded-full hover:bg-brand-800">
                 <Facebook className="w-5 h-5" />
                 <span className="sr-only">Facebook</span>
               </a>
               <a href="#" className="text-white hover:text-brand-500 transition-colors p-3 border border-brand-800 rounded-full hover:bg-brand-800">
                 <Mail className="w-5 h-5" />
                 <span className="sr-only">Email</span>
               </a>
             </div>
          </div>

          <div className="flex flex-col pt-8 md:pt-0 md:pl-8 text-[10px] font-bold tracking-[0.2em] uppercase">
             <p className="text-brand-500 mb-2">Ministry HQ</p>
             <p className="text-white">124 Oven Lane</p>
             <p className="text-white">Sugar District, Sector 4</p>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] font-bold tracking-[0.2em] uppercase flex flex-col md:flex-row justify-between items-center bg-brand-950 p-4 border border-brand-800 text-white">
          <p>&copy; {new Date().getFullYear()} The Cookies Ministry | All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 text-brand-500">Official Issuance</p>
        </div>
      </div>
    </footer>
  );
}
