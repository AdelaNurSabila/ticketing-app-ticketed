'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

const NavbarSide = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard' },
    { title: 'Events' },
    { title: 'Orders' },
    { title: 'Marketing' },
    { title: 'Reporting' },
    { title: 'OrgSetting', spacing: true },
  ];
  return (
    <>
      <div className="flex">
        <div
          className={`bg-black h-screen p-5 pt-8 w-72 ${
            open ? 'w-72' : 'w-20'
          } duration-500 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <AiFillEnvirontment
              className={`bg-amber400 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1
              className={`text-white origin-left text-2xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Ticketed
            </h1>
          </div>
          <div className="flex items-center rounded-md bg-white mt-6 px-4 py-2"></div>
        </div>
      </div>
    </>
  );
};
export default NavbarSide;
