import Image from "next/image";
import Link from "next/link";


const Next = () => {
    return (
        <>
         <div class="flex  items-center justify-center pb-10">
  <div class="flex select-none space-x-1 text-gray-700">
    <a href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Previous </a>
    <a href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 1 </a>
    <a href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 2 </a>
    <a href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 3 </a>
    <span class="rounded-md px-4 py-2"> ... </span>
    <a href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> 10 </a>
    <a href="#" class="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Next </a>
  </div>
  </div>
        </>
   );
};
export default Next;





