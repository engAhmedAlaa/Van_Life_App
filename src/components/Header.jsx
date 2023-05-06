import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

function Header() {
  const classFunc = ({ isActive }) =>
    `hover:text-neutral-900 hover:underline ${
      isActive ? 'text-neutral-900 underline' : 'text-neutral-600'
    }`;

  return (
    <header className="flex justify-between items-center px-6 py-7">
      <div>
        <Link to="/">
          <img src={logoImg} alt="Logo Image" className="h-6" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink to="host" className={classFunc}>
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="vans"
              className={({ isActive }) =>
                `hover:text-neutral-900 hover:underline ${
                  isActive ? 'text-neutral-900 underline' : 'text-neutral-600'
                }`
              }
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-neutral-900 hover:underline ${
                  isActive ? 'text-neutral-900 underline' : 'text-neutral-600'
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
