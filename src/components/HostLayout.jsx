import { NavLink, Outlet } from 'react-router-dom';
import { getHostVans } from '../api';
import { useQuery } from '@tanstack/react-query';

function HostLayout() {
  const queryObj = useQuery(['hostVans'], getHostVans);
  const classFunc = ({ isActive }) =>
    `hover:text-neutral-900 hover:underline ${
      isActive ? 'text-neutral-900 underline font-bold' : 'text-neutral-600'
    }`;

  return (
    <main className="grow pt-6 pb-16">
      <header className="px-4 sm:px-6 text-lg">
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
      <Outlet context={queryObj} />
    </main>
  );
}

export default HostLayout;
