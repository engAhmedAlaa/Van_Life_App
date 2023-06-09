import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostVanDetailLayout from './components/HostVanDetailLayout';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AuthRequired from './components/AuthRequired';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="host" element={<AuthRequired />}>
        <Route element={<HostLayout />}>
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
      </Route>
      <Route path="vans">
        <Route index element={<Vans />} />
        <Route path=":vanId" element={<VanDetail />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
