import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className=" bg-white sticky top-0 left-0 z-50 shadow-md ">
        <div className=" m-auto max-w-[1260px] h-[100px]  flex items-center justify-center gap-[200px]">
          <div className=" font-bold">
            <Link href="/">
              <p className="text-[#555486] text-[20px] pr-[50px]">TICKETED</p>
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-10  md:text-[20px] sm:text-[15px] text-[12px] me-1 text-[#555486] sm:mr-1">
              <Link href="/">
                {' '}
                <li className="cursor-pointer">Concerts</li>{' '}
              </Link>
              <Link href="/about" className="cursor-pointer">
                <li>Trips</li>
              </Link>
              <Link href="/servis">
                <li className="cursor-pointer">Attraction</li>
              </Link>
              <Link href="/team">
                {' '}
                <li className="cursor-pointer">Beauty</li>{' '}
              </Link>
              <Link href="/createevent">
                {' '}
                <li className="cursor-pointer">Create Event</li>{' '}
              </Link>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button className=" gap-10 bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700 ">
              {' '}
              Sign in
            </button>
            <button className=" gap-10 bg-[#555486] text-white p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700 ">
              {' '}
              Sign up
            </button>
          </div>
        </div>{' '}
      </div>
    </>
  );
};
export default Navbar;


