import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center text-center text-stone-300">
      <div className="fixed inset-0 -z-10 overflow-hidden ">
        <img
          className="h-full  w-full object-cover object-right"
          src="images/bgpic.jpg"
          alt="Background Pizza"
        />
        <div className="absolute inset-0  bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent "></div>
      </div>
      <h1 className="mb-5 text-3xl font-semibold text-stone-50   ">
        The best pizza.
        <br />
        <span className="text-stone-200">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
