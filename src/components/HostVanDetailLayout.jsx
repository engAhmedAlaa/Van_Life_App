import { NavLink, Outlet } from 'react-router-dom';
import GoBackLink from './GoBackLink';

const van = {
  id: '1',
  name: 'Modest Explorer',
  price: 60,
  description:
    'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
  imageUrl:
    'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
  type: 'simple',
};

function HostVanDetailLayout() {
  const classFunc = ({ isActive }) =>
    `hover:text-neutral-900 hover:underline ${
      isActive ? 'text-neutral-900 underline font-bold' : 'text-neutral-600'
    }`;

  return (
    <section className="px-6 pt-8">
      <GoBackLink />
      <div className="mt-6 bg-white p-6 rounded-md">
        <div className="flex items-center gap-x-6">
          <img src={van.imageUrl} alt="Van Image" className="w-40 rounded" />
          <div>
            <div
              className={`px-4 py-2 rounded-md w-fit text-orange-100 font-semibold capitalize ${
                van.type === 'simple'
                  ? 'bg-orange-400'
                  : van.type === 'rugged'
                  ? 'bg-teal-800'
                  : 'bg-neutral-900'
              }`}
            >
              {van.type}
            </div>
            <h1 className="text-2xl font-bold mt-2">{van.name}</h1>
            <p className="font-bold mt-2">
              ${van.price}
              <span className="font-medium">/day</span>
            </p>
          </div>
        </div>
        <header className="my-6">
          <nav>
            <ul className="flex gap-x-4">
              <li>
                <NavLink to="." end className={classFunc}>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink to="pricing" className={classFunc}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="photos" className={classFunc}>
                  Photos
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </section>
  );
}

export default HostVanDetailLayout;
