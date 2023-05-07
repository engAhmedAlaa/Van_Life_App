import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

function Header() {
  const classFunc = ({ isActive }) =>
    `hover:text-neutral-900 hover:underline ${
      isActive ? 'text-neutral-900 underline' : 'text-neutral-600'
    }`;

  return (
    <header className="flex justify-between items-center gap-x-3 sm:gap-x-4 px-4 sm:px-6 py-6 sm:py-7">
      <div>
        <Link to="/">
          <img src={logoImg} alt="Logo Image" className="h-5 sm:h-6" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-x-3 sm:gap-x-4 items-center">
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
              to="about"
              className={({ isActive }) =>
                `hover:text-neutral-900 hover:underline ${
                  isActive ? 'text-neutral-900 underline' : 'text-neutral-600'
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                `hover:fill-neutral-900 ${
                  isActive ? 'fill-neutral-900' : 'fill-neutral-600'
                }`
              }
            >
              <UserCircle className="w-5 h-5" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function UserCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Header;
