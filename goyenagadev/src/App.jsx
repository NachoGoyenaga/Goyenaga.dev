import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Carga bajo demanda (Lazy loading)
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

// Placeholder invisible para evitar pantallas blancas mientras cambia de ruta
function RouteLoader() {
  return <div className="min-h-screen bg-[#050806]" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<RouteLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="proyectos"
          element={
            <Suspense fallback={<RouteLoader />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="curriculum"
          element={
            <Suspense fallback={<RouteLoader />}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="contacto"
          element={
            <Suspense fallback={<RouteLoader />}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}