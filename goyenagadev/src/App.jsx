import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

function RouteLoader() {
  return <div className="min-h-screen bg-[#050806]" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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