import { Link } from 'react-router-dom';

const vans = [
  {
    id: '1',
    name: 'Modest Explorer',
    price: 60,
    description:
      'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
    type: 'simple',
  },
  {
    id: '2',
    name: 'Beach Bum',
    price: 80,
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png',
    type: 'rugged',
  },
  {
    id: '3',
    name: 'Reliable Red',
    price: 100,
    description:
      "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/reliable-red.png',
    type: 'luxury',
  },
  {
    id: '4',
    name: 'Dreamfinder',
    price: 65,
    description:
      'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png',
    type: 'simple',
  },
  {
    id: '5',
    name: 'The Cruiser',
    price: 120,
    description:
      'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png',
    type: 'luxury',
  },
  {
    id: '6',
    name: 'Green Wonder',
    price: 70,
    description:
      "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
    imageUrl:
      'https://assets.scrimba.com/advanced-react/react-router/green-wonder.png',
    type: 'rugged',
  },
];

function Dashboard() {
  return (
    <>
      <section className="mt-10 bg-orange-100 px-6 py-8">
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
      <section className="flex items-center bg-orange-200 px-6 py-8">
        <h2 className="text-2xl font-bold">Review score</h2>
        <Star className="w-5 fill-orange-400 ml-3 mr-1" />
        <p className="font-bold">
          5.0<span className="font-semibold text-neutral-600">/5</span>
        </p>
        <Link to="reviews" className="ml-auto hover:underline">
          Details
        </Link>
      </section>
      <section className="px-6 pt-9">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your listed vans</h1>
          <Link to="vans" className="hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {vans.map((van) => (
            <Van key={van.id} {...van} />
          ))}
        </div>
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
