import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="grow px-6 bg-[url('./assets/image54.png')] relative flex items-center text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative">
        <h1 className="text-4xl font-extrabold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mt-6 font-medium">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">
          <button className="bg-orange-400 w-full mt-14 block p-4 rounded-md font-bold hover:translate-x-px hover:translate-y-px transition-transform">
            Find your van
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
