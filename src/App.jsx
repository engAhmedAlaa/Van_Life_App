import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetailLayout from './components/HostVanDetailLayout';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vans">
            <Route index element={<HostVans />} />
            <Route path=":vanId" element={<HostVanDetailLayout />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="reviews" element={<Reviews />} />
          <Route path="income" element={<Income />} />
        </Route>
        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":vanId" element={<VanDetail />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
