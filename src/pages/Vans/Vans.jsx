import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
import Loading from '../../components/Loading';

function Vans() {
  const { data, status, error } = useQuery(['vans'], getVans);
  const [searchParams, setSearchParams] = useSearchParams();
  const types = ['simple', 'luxury', 'rugged'];
  const typeFilter = searchParams.get('type');
  const displayedVans = !data
    ? null
    : typeFilter
    ? data.vans.filter((van) => van.type === typeFilter)
    : data.vans;

  // if (data) {
  //   if (typeFilter)
  //     displayedVans = data.vans.filter((van) => van.type === typeFilter);
  //   else displayedVans = data.vans;
  // }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value) prevParams.set(key, value);
      else prevParams.delete(key);
      return prevParams;
    });
  }

  return (
    <main className="grow px-4 sm:px-6 pt-8 pb-16">
      <h1 className="font-bold text-3xl">Explore our van options</h1>
      <div className=" mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-neutral-600">
        <ul className="flex flex-wrap gap-x-5 gap-y-4 justify-center">
          {types.map((type) => (
            <Type
              key={type}
              type={type}
              typeFilter={typeFilter}
              handleFilterChange={handleFilterChange}
            />
          ))}
        </ul>
        {typeFilter && (
          <button
            className="cursor-pointer hover:underline hover:text-neutral-900"
            onClick={() => handleFilterChange('type', null)}
          >
            Clear filters
          </button>
        )}
      </div>
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="mt-11 grid grid-cols-responsive gap-x-8 gap-y-7 animate-fade-in">
          {displayedVans.map((van) => (
            <Van key={van.id} {...van} search={`?${searchParams.toString()}`} />
          ))}
        </div>
      )}
    </main>
  );
}

function Van({ id, name, price, imageUrl, type, search }) {
  return (
    <div>
      <Link to={id} state={{ search }}>
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

function Type({ type, typeFilter, handleFilterChange }) {
  const color =
    typeFilter === 'simple'
      ? 'bg-orange-400'
      : typeFilter === 'rugged'
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
          type === typeFilter ? `${color} text-orange-100` : 'bg-orange-100'
        } ${hoverState} capitalize transition-all active:scale-95`}
        onClick={() => handleFilterChange('type', type)}
      >
        {type}
      </button>
    </li>
  );
}

export default Vans;
