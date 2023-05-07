import { useOutletContext } from 'react-router-dom';

function HostVanPricing() {
  const { price } = useOutletContext();

  return (
    <h2 className="text-2xl">
      ${price}
      <span className="text-base text-neutral-600">/day</span>
    </h2>
  );
}

export default HostVanPricing;
