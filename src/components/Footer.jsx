import { Link } from 'react-router-dom';

function Footer() {
  const data = new Date();
  const years = data.getFullYear();

  return (
    <footer className="py-6 bg-neutral-800 text-zinc-400 text-center text-sm">
      <p>
        &copy; {years}{' '}
        <Link to="/" className="font-semibold text-orange-400 hover:underline">
          #VANLIFE
        </Link>
        , Coded by{' '}
        <a
          href="https://github.com/engAhmedAlaa"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-orange-400 hover:underline"
        >
          Ahmed Alaa
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
