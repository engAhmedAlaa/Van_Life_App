import incomeGraph from '../../assets/income-graph.png';

function Income() {
  const transactionsData = [
    { amount: 720, date: 'Jan 3, 2023', id: '1' },
    { amount: 560, date: 'Dec 12, 2022', id: '2' },
    { amount: 980, date: 'Dec 3, 2022', id: '3' },
  ];
  return (
    <section className="px-6 pt-8">
      <h1 className="text-2xl font-bold">Income</h1>
      <p className="mt-6 text-neutral-600">
        Last <span className="font-bold underline">30 days</span>
      </p>
      <h2 className="mt-6 text-4xl font-bold">$2260</h2>
      <img src={incomeGraph} alt="Income Graph" className="mt-10" />
      <div className="mt-10 flex items-center justify-between">
        <h3 className="text-xl font-bold">Your transactions (3)</h3>
        <p className="text-neutral-600">
          Last <span className="font-bold underline">30 days</span>
        </p>
      </div>
      <div className="mt-8 space-y-5">
        {transactionsData.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center bg-white px-5 py-6 rounded-md"
          >
            <h4 className="text-2xl font-bold">${transaction.amount}</h4>
            <p className="text-neutral-600">{transaction.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Income;
