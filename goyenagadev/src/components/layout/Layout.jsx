import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-200 flex flex-col justify-between relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Navbar siempre en la cima */}
        <Navbar />

        {/* 
          pt-6 sm:pt-10: Espaciado superior natural debajo del Navbar sticky (h-14).
          px-4 sm:px-6: Mayor aprovechamiento del ancho de pantalla en móviles.
        */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-20 w-full flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}