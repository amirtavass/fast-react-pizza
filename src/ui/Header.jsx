import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="mb-8 flex items-center justify-between border-b-2 border-stone-300 bg-red-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="mb-4 text-xl tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
