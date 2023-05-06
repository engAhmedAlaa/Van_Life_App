import { Link } from 'react-router-dom';

function GoBackLink() {
  return (
    <button>
      <Link to=".." className="flex gap-x-2 group">
        <ArrowLeft className="w-5 stroke-neutral-600 group-hover:stroke-neutral-900 transition-colors" />
        <span className="text-neutral-600 group-hover:text-neutral-900 group-hover:underline transition-colors">
          Back to all vans
        </span>
      </Link>
    </button>
  );
}

export default GoBackLink;

function ArrowLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}
