import { Link, useOutletContext } from 'react-router-dom';
import Loading from '../../components/Loading';

function Dashboard() {
  const { data, status, error } = useOutletContext();

  return (
    <>
      <section className="mt-10 bg-orange-100 px-4 sm:px-6 pt-6 pb-12">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <p className="text-neutral-600">
              Income last <span className="font-bold">30 days</span>
            </p>
            <Link to="income" className="hover:underline">
              Details
            </Link>
          </div>
        </div>
        <h2 className="mt-4 text-4xl font-bold">$2,260</h2>
      </section>
      <section className="flex items-center bg-orange-200 px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-bold">Review score</h2>
        <Star className="w-5 fill-orange-400 ml-3 mr-1" />
        <p className="font-bold">
          5.0<span className="font-semibold text-neutral-600">/5</span>
        </p>
        <Link to="reviews" className="ml-auto hover:underline">
          Details
        </Link>
      </section>
      <section className="px-4 sm:px-6 pt-9">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your listed vans</h1>
          <Link to="vans" className="hover:underline">
            View all
          </Link>
        </div>
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
    </>
  );
}

function Van({ id, name, price, imageUrl }) {
  return (
    <div className="flex items-center bg-white p-4 rounded-md">
      <img src={imageUrl} alt="Van Image" className="w-16 rounded-md" />
      <div className="ml-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-neutral-600">${price}/day</p>
      </div>
      <Link to={`vans/${id}`} className="ml-auto hover:underline">
        Edit
      </Link>
    </div>
  );
}

function Star(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Dashboard;
