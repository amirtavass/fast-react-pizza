import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="backdrop-blur-mid mb-8 flex items-center justify-between border-b-2 border-stone-700/50 bg-stone-900/90 py-3 uppercase shadow-sm sm:px-6">
      <Link
        to="/"
        className=" text-xl tracking-widest text-stone-50 transition-transform duration-300 ease-out hover:rotate-2 hover:scale-105 "
      >
        🍕 Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
