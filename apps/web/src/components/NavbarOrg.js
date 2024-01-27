import Image from 'next/image';
import Link from 'next/link';

const NavbarOrg = () => {
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
                <li className="cursor-pointer">Home</li>{' '}
              </Link>
              <Link href="/about" className="cursor-pointer">
                <li>Events</li>
              </Link>
              <Link href="/servis">
                <li className="cursor-pointer">Orders</li>
              </Link>
              <Link href="/team">
                {' '}
                <li className="cursor-pointer">Marketing</li>{' '}
              </Link>
              <Link href="/team">
                {' '}
                <li className="cursor-pointer">Reporting</li>{' '}
              </Link>
              <Link href="/team">
                {' '}
                <li className="cursor-pointer text-item-center">
                  OrganizeSett
                </li>{' '}
              </Link>
            </ul>
          </div>
          <div className="flex justify-center items-center ">
            <button className="text-xs grid grid-cols-4 w-[120px] h-[40px] bg-transparent text-gray-800 rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
              <div className="mx-1 my-1 border border-gray-300 rounded-full w-[30px] h-[30px]"></div>
              <div className="py-3 grid col-span-3">Your Org.</div>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarOrg;
