import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getVans } from '../../api';
import Loading from '../../components/Loading';
import GoBackLink from '../../components/GoBackLink';

function VanDetail() {
  const { vanId } = useParams();
  // const navigate = useNavigate();
  const { data, status, error } = useQuery(['vans', vanId], getVans);
  const van = data?.vans;

  // if (status === 'success' && !data) navigate('/Unfound', { replace: true });

  return (
    <main className="grow px-4 sm:px-6 pt-8 pb-16">
      <GoBackLink />
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="mt-8 animate-fade-in">
          <img
            src={van.imageUrl}
            alt="Van Image"
            className="w-full rounded-md"
          />
          <div
            className={`mt-10 px-5 py-2 rounded-md w-fit text-orange-100 font-semibold capitalize ${
              van.type === 'simple'
                ? 'bg-orange-400'
                : van.type === 'rugged'
                ? 'bg-teal-800'
                : 'bg-neutral-900'
            }`}
          >
            {van.type}
          </div>
          <h1 className="text-3xl font-bold mt-5 mb-3">Modest Explorer</h1>
          <span className="font-bold text-2xl">
            ${van.price}
            <span className="text-xl font-medium">/day</span>
          </span>
          <p className="mt-3">{van.description}</p>
          <Link to="vans">
            <button className="bg-orange-400 w-full mt-8 block p-4 rounded-md font-bold hover:translate-x-px hover:translate-y-px transition-transform text-white">
              Rent this van
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}

export default VanDetail;
