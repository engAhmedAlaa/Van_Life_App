import { Link, useOutletContext } from 'react-router-dom';
import Loading from '../../components/Loading';

function HostVans() {
  const { data, status, error } = useOutletContext();

  return (
    <section className="px-6 pt-8">
      <h1 className="text-3xl font-bold">Your listed vans</h1>
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="mt-6 space-y-4 animate-fade-in">
          {data.vans.map((van) => (
            <Van key={van.id} {...van} />
          ))}
        </div>
      )}
    </section>
  );
}

function Van({ id, name, price, imageUrl }) {
  return (
    <div>
      <Link to={id}>
        <div className="flex items-center bg-white p-4 rounded-md">
          <img src={imageUrl} alt="Van Image" className="w-16 rounded-md" />
          <div className="ml-5">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-neutral-600">${price}/day</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HostVans;
