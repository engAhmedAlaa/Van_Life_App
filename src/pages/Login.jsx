import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import { useMutation } from '@tanstack/react-query';

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { data, status, error, mutate } = useMutation(loginUser, {
    onSuccess: () => {
      localStorage.setItem('isLoggedIn', true);
      navigate(`${pathname || '/host'}`, { replace: true });
    },
  });
  const location = useLocation();
  const message = location.state?.message;
  const pathname = location.state?.pathname;
  const navigate = useNavigate();

  console.log(data, error, status);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((loginFormData) => ({
      ...loginFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutate(loginFormData);
  }

  return (
    <main className="grow px-4 sm:px-6 pt-6 pb-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Sign in to your account</h1>
      {message && (
        <h2 className="text-xl mt-8 text-red-500 font-bold">{message}</h2>
      )}
      <form className="mt-10 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden text-neutral-600">
          <label htmlFor="email" className="sr-only">
            Enter Your Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="p-4 outline-none border-b border-b-gray-300"
            value={loginFormData.email}
            onChange={handleChange}
            placeholder="Email address"
            spellCheck="false"
            required
          />
          <label htmlFor="password" className="sr-only">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-4 outline-none"
            value={loginFormData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        {status === 'error' && (
          <p className="mt-1 text-sm text-red-500">*{error.message}</p>
        )}
        <button
          className={`mt-6 text-white bg-orange-400 w-full p-4 rounded-md font-bold hover:translate-x-px hover:translate-y-px transition-transform ${
            status === 'loading' ? 'bg-orange-700' : ''
          }`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <h4 className="mt-10">
        Don’t have an account?{' '}
        <Link to="." className="text-orange-400 font-bold hover:underline">
          Create one now
        </Link>
      </h4>
    </main>
  );
}

export default Login;
