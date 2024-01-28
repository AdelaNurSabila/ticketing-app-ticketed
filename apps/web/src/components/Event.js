import Image from 'next/image';
import Link from 'next/link';
import Cards from './cards';

const Event = () => {
  return (
    <>
      {/* upcoming events */}
      <div className=" grid grid-cols-2  px-10 pb-[50px]">
        <div className="font-bold text-xl">Upcoming Events</div>
        <div className="flex justify-end ">
          <Link href="/discovery">
            {' '}
            <h>View all</h>{' '}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
            />
          </svg>
        </div>
      </div>
      {/* cards */}
      <div className="flex justify-center items-center gap-5">
        {/* cards 1*/}
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};
export default Event;
