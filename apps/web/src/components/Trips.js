import Image from "next/image";
import Link from "next/link";

const Trips = () => {
    return (
   
        <>
        {/* trips */}
<div className=" grid grid-cols-2  px-10 pb-[50px] pt-[50px]">
        <div className="font-bold text-xl">Attraction and Trips</div>
        <div className="flex justify-end ">
          <h>View all</h>
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
        <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              class="rounded-t-lg"
              src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
              alt=""
            />
          </div>
          <div class="p-6">
            <p class="text-base text-neutral-600 dark:text-neutral-200">
              <div className="p-3">
                <div className="text-md font-bold">Blues </div>
                <h className="font-light text-sm leading-6 text-gray-700 my-2">
                  05 February 2023
                </h>
                <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                <p className="paragraph-normal text-gray-600">
                  Rp. 1.800.000 - 2.800.000
                </p>
                <a className="mt-3 block" href="#"></a>
              </div>
            </p>
          </div>
        </div>

        <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              class="rounded-t-lg"
              src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
              alt=""
            />
          </div>
          <div class="p-6">
            <p class="text-base text-neutral-600 dark:text-neutral-200">
              <div className="p-3">
                <div className="text-md font-bold">Blues </div>
                <h className="font-light text-sm leading-6 text-gray-700 my-2">
                  05 February 2023
                </h>
                <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                <p className="paragraph-normal text-gray-600">
                  Rp. 1.800.000 - 2.800.000
                </p>
                <a className="mt-3 block" href="#"></a>
              </div>
            </p>
          </div>
        </div>

        <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              class="rounded-t-lg"
              src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
              alt=""
            />
          </div>
          <div class="p-6">
            <p class="text-base text-neutral-600 dark:text-neutral-200">
              <div className="p-3">
                <div className="text-md font-bold">Blues </div>
                <h className="font-light text-sm leading-6 text-gray-700 my-2">
                  05 February 2023
                </h>
                <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                <p className="paragraph-normal text-gray-600">
                  Rp. 1.800.000 - 2.800.000
                </p>
                <a className="mt-3 block" href="#"></a>
              </div>
            </p>
          </div>
        </div>

        <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              class="rounded-t-lg"
              src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640"
              alt=""
            />
          </div>
          <div class="p-6">
            <p class="text-base text-neutral-600 dark:text-neutral-200">
              <div className="p-3">
                <div className="text-md font-bold">Blues </div>
                <h className="font-light text-sm leading-6 text-gray-700 my-2">
                  05 February 2023
                </h>
                <p className="paragraph-normal text-gray-600">ICE, BSD</p>
                <p className="paragraph-normal text-gray-600">
                  Rp. 1.800.000 - 2.800.000
                </p>
                <a className="mt-3 block" href="#"></a>
              </div>
            </p>
          </div>
        </div>
      </div>
        </>
    );
};
export default Trips;