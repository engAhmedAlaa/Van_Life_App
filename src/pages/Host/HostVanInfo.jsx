const van = {
  id: '1',
  name: 'Modest Explorer',
  price: 60,
  description:
    'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
  imageUrl:
    'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
  type: 'simple',
};

function HostVanInfo() {
  return (
    <div className="space-y-4">
      <p>
        <span className="font-bold">Name:</span> {van.name}
      </p>
      <p>
        <span className="font-bold">Type:</span>{' '}
        <span className="capitalize">{van.type}</span>
      </p>
      <p>
        <span className="font-bold">Description:</span> {van.description}
      </p>
      <p>
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
}

export default HostVanInfo;
