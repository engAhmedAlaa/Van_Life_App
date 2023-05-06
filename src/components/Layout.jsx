import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="wrapper text-neutral-900 font-medium">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
