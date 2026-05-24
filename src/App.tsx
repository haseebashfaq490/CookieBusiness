/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-100 selection:bg-brand-500 selection:text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

