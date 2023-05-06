import { NavLink, Outlet } from 'react-router-dom';

function HostLayout() {
  const classFunc = ({ isActive }) =>
    `hover:text-neutral-900 hover:underline ${
      isActive ? 'text-neutral-900 underline font-bold' : 'text-neutral-600'
    }`;

  return (
    <main className="grow pt-6 pb-12">
      <header className="px-6 text-lg">
        <nav>
          <ul className="flex gap-x-5 flex-wrap">
            <li>
              <NavLink to="." end className={classFunc}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="income" className={classFunc}>
                Income
              </NavLink>
            </li>
            <li>
              <NavLink to="vans" className={classFunc}>
                Vans
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={classFunc}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}

export default HostLayout;
