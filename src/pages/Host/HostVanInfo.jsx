import { useOutletContext } from 'react-router-dom';

function HostVanInfo() {
  const { name, type, description } = useOutletContext();

  return (
    <div className="space-y-4">
      <p>
        <span className="font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="font-bold">Type:</span>{' '}
        <span className="capitalize">{type}</span>
      </p>
      <p>
        <span className="font-bold">Description:</span> {description}
      </p>
      <p>
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
}

export default HostVanInfo;
