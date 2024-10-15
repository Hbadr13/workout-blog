import Image from 'next/image';

export default function BlogCard() {
  return (
    <div className="bg-white shadow-lg w-[60%] rounded-lg overflow-hidden">
      <Image 
        src="/image/images.jpeg" 
        alt="Fitness Image"
        width={200} 
        height={200}
        className="w w-[100%]  h-60 object-cover" 
      />
      <div className="p-6 w-full ">
        <div className="flex items-center mb-4">
          <Image 
            src="/image/images.jpeg" 
            alt="Author"
            width={40} 
            height={40}
            className="w-14 h-14 ml-5 rounded-full" 
          />
          <div className=" ml-5">
            <p className="text-gray-600 text-sm">By Jone Doe</p>
            <p className="text-gray-400 text-xs">17 May 2023 • 1 comment</p>
          </div>
        </div>
        <h2 className="text-2xl text-black font-bold mb-2">Learn About Fitness From These Mistakes In 60 Seconds</h2>
        <p className="text-gray-600 mb-4">
          Donec Accumsan Enim Sit Amet Dolor Rhoncus Scelerisque. Suspendisse Dictum, Enim A Interdum Facilisis.
        </p>
        <div className='  bg-wr-primary text-white w-24 h-8  relative  inline-block rounded hover:bg-orange-600  skew-x-12'>

        <a href="#" className= "text-white  bg-dblack w-full h-full flex  justify-center items-center absolute">
          Read More
        </a>
        </div>
      </div>
    </div>
  );
}
