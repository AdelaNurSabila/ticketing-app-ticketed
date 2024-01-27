import Image from 'next/image';
import Link from 'next/link';

const Free = () => {
  return (

    
    
    <div class="min-w-screen min-h-screen bg-gray-50 ">
<Link href="/">
<div className='flex px-10 py-10 gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/></svg>
   <p> Checkout</p> 
</div>
</Link>


      <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div class="w-full">
          <div class="-mx-3 items-start">
            <div class="px-3  lg:pr-10">
              <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div class="w-full flex items-center">
                  <div class="overflow-hidden rounded-lg  bg-gray-50 border border-gray-200">
                    <Image
                      src="/taylor.jpeg"
                      alt="Logo"
                      width={100}
                      height={100}
                      className="w-200 h-100"
                    />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Taylor Swift Eras Tour
                    </h6>
                    <p> Platinum A</p>
                    <p class="text-gray-400">x 2</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-600 text-xl">
                      Rp.0
                    </span>
                  </div>
                </div>
              </div>

              <div class=" mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div class=" flex items-center">
                  <div class="overflow-hidden rounded-lg  bg-gray-50 border border-gray-200">
                    <Image
                      src="/taylor.jpeg"
                      alt="Logo"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Taylor Swift Eras Tour
                    </h6>
                    <p> Platinum B</p>
                    <p class="text-gray-400">x 2</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-600 text-xl">
                      Rp.0
                    </span>
                  </div>
                </div>
              </div>

              <div class="mb-6 pb-6 border-b border-gray-200">
                <div class="-mx-2 flex items-end justify-end">
                  <div class="flex-grow px-2 lg:max-w-xs">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Discount code
                    </label>
                    <div>
                      <input
                        class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="XXXXXX"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="px-2">
                    <button class="block w-full max-w-xs mx-auto border border-transparent  hover:bg-blue-500 bg-[#555486] focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div class="w-full flex mb-3 items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Subtotal</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">Rp 0</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Pajak(11%)</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">Rp.0</span>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Total</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold text-gray-400 text-sm">Rp.</span>{' '}
                    <span class="font-semibold">0</span>
                  </div>
                </div>
              </div>
            </div>
          <Link href="/Succes" > <button  class="block w-full max-w-xs mx-auto hover:bg-blue-500 bg-[#555486] text-white rounded-lg px-3 py-2 font-semibold">
               Checkout
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
   
  
  );
};

export default Free;
