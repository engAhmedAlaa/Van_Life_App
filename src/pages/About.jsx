import { Link } from 'react-router-dom';
import imgUrl from '../assets/image55.png';

function About() {
  return (
    <main className="grow">
      <div>
        <img src={imgUrl} alt="Van Image" className="w-full " />
      </div>
      <div className="px-4 sm:px-6 pt-8 pb-16">
        <h1 className="text-3xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mt-8">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="mt-6">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-amber-200 rounded-md px-9 py-8 mt-14">
          <h3 className="font-bold text-2xl">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h3>
          <Link to="/vans">
            <button className="bg-neutral-900 text-white font-bold rounded-[10px] p-4 mt-8 hover:translate-x-px hover:translate-y-px transition-transform">
              Explore our vans
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default About;
