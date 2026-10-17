import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 flex flex-col justify-between relative selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Halo de iluminación esmeralda suave estilo Linear */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/[0.07] blur-[140px] -z-10 rounded-full"
      />

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20 w-full flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}