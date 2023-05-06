import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
import Loading from '../../components/Loading';

function Vans() {
  const { data, status, error } = useQuery(['vans'], getVans);
  const [searchParams, setSearchParams] = useSearchParams();
  const types = ['simple', 'luxury', 'rugged'];
  let selectedType;
  let visibleVans;

  if ([...searchParams].length) selectedType = [...searchParams][0][1];

  if (data) {
    if (selectedType)
      visibleVans = data.vans.filter((van) => van.type === selectedType);
    else visibleVans = data.vans;
  }

  return (
    <main className="grow px-6 pt-8 pb-20">
      <h1 className="font-bold text-3xl">Explore our van options</h1>
      <div className=" mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-neutral-600">
        <ul className="flex flex-wrap gap-x-5 gap-y-4 justify-center">
          {types.map((type) => (
            <Type
              key={type}
              type={type}
              selectedType={selectedType}
              setSearchParams={setSearchParams}
            />
          ))}
        </ul>
        <button
          className={`cursor-pointer hover:underline hover:text-neutral-900 ${
            selectedType === 'all' ? 'underline text-neutral-900' : ''
          }`}
          onClick={() => setSearchParams({})}
        >
          Clear filters
        </button>
      </div>
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="mt-11 grid grid-cols-responsive gap-x-8 gap-y-7 animate-fade-in">
          {visibleVans.map((van) => (
            <Van key={van.id} {...van} />
          ))}
        </div>
      )}
    </main>
  );
}

function Van({ id, name, price, imageUrl, type }) {
  return (
    <div>
      <Link to={id}>
        <img
          src={imageUrl}
          alt="Van Image"
          className="w-full aspect-square rounded-md"
        />
        <div className="mt-4 inline-flex w-full justify-between font-semibold text-xl">
          <h2>{name}</h2>
          <p className="relative">
            ${price}
            <span className="absolute top-[80%] right-0 text-sm font-medium">
              /day
            </span>
          </p>
        </div>
        <div
          className={`inline-block mt-3 px-5 py-2 rounded-md text-orange-100 font-semibold capitalize ${
            type === 'simple'
              ? 'bg-orange-400'
              : type === 'rugged'
              ? 'bg-teal-800'
              : 'bg-neutral-900'
          }`}
        >
          {type}
        </div>
      </Link>
    </div>
  );
}

function Type({ type, selectedType, setSearchParams }) {
  const color =
    selectedType === 'simple'
      ? 'bg-orange-400'
      : selectedType === 'rugged'
      ? 'bg-teal-800'
      : 'bg-neutral-900';
  const hoverState =
    type === 'simple'
      ? 'hover:bg-orange-400 hover:text-orange-100'
      : type === 'rugged'
      ? 'hover:bg-teal-800 hover:text-orange-100'
      : 'hover:bg-neutral-900 hover:text-orange-100';
  return (
    <li key={type}>
      <button
        className={`rounded-md px-5 py-2 ${
          type === selectedType ? `${color} text-orange-100` : 'bg-orange-100'
        } ${hoverState} capitalize transition-colors`}
        onClick={() => setSearchParams({ type })}
      >
        {type}
      </button>
    </li>
  );
}

export default Vans;
