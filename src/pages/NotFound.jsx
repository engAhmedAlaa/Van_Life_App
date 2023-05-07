import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="grow px-4 sm:px-6 pt-6 pb-16 flex flex-col justify-center">
      <h1 className="text-4xl font-bold">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/">
        <button className="bg-neutral-900 text-white rounded-[10px] p-4 text-lg mt-8 w-full font-bold hover:translate-x-px hover:translate-y-px transition-transform">
          Return to home
        </button>
      </Link>
    </main>
  );
}

export default NotFound;
