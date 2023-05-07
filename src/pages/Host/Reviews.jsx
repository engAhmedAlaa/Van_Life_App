import reviewsGraph from '../../assets/reviews-graph.png';

function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section className="px-6 pt-8">
      <div className="flex items-end gap-x-4">
        <h1 className="text-3xl font-bold">Your reviews</h1>
        <p className="text-neutral-600">
          Last <span className="font-bold underline">30 days</span>
        </p>
      </div>
      <img src={reviewsGraph} alt="Reviews Graph" className="mt-8" />
      <h2 className="mt-8 text-xl font-bold">Reviews (2)</h2>
      <div>
        {reviewsData.map((review) => (
          <div key={review.id} className="border-b border-b-gray-300 py-5">
            <div className="flex gap-x-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 fill-orange-400" />
              ))}
            </div>
            <div className="mt-3 flex font-semibold gap-x-3">
              <h3>{review.name}</h3>
              <p className="text-gray-500">{review.date}</p>
            </div>
            <p className="mt-3">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
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

export default Reviews;
