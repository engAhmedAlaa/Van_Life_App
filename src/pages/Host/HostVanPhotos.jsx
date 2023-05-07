import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {
  const { imageUrl } = useOutletContext();

  return <img src={imageUrl} alt="Van Image" className="w-24 rounded" />;
}

export default HostVanPhotos;
