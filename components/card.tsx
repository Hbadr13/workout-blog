import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Card = ({
  imageURL,
  title,
  description,
  category,
  date,
  slug,
  hideCategoryName
}: {
  imageURL: string;
  title: string;
  category: string;
  date: string;
  description: string;
  slug: string;
  hideCategoryName: boolean
}) => {
  const router = useRouter();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
      }} // Link to animation controls
      transition={{ duration: 1 }}
      ref={ref}
      className=" w-[95%] sm:w-[100%]  sm:h-[450px]      md:h-[500px]  lg:h-[500px]  h-[350px]   bdsg-red-700    flex   justify-start items-start relative "
    >



      <div className="  w-full  absolute h-full    flex   items-center  flex-col">
        <Link
          href={`/blog/${slug}`}
          className="w-[100%] relative  sm:h-[50%] md:h-[40%] h-[40%]"

        >
          <img
            src="https://images.pexels.com/photos/19387205/pexels-photo-19387205/free-photo-of-laptop-by-monitor-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fitness Image"
            className="w-full h-full  absolute hover:scale-[102%] duration-300 hover:border hover:border-blue-500 skehgfw-y-3 rounded-md object-cover"
          />
        </Link>
        <div className="   h-auto bg-blackff    w-full mt-4 ">
          <div
            className="w-full  flex  flex-col   justify-start items-start  bgg-blue-500  bg-dblack  space-y-3  "
          >
            {
              hideCategoryName ?
                <div className="  font-bold  w-full    h-8 items-center flex flex-row   text-[#27165a] ">
                  {date}
                </div> : <div className="  font-bold  w-full    h-8 items-center flex flex-row   text-[#27165a] ">
                  {date}
                  <h1 className=" text-3xl ml-2 -mt-3 font-bold">
                    .
                  </h1>
                  <Link href={`/category/${(category.replace(' & ', '&')).replace(' ', '_')}`} className="hover:underline active:text-blue-700 hover:underline-offset-1  ml-1">
                    {category}
                  </Link>
                </div>

            }
            <Link href={`/blog/${slug}`} className="text-xl  text-start   w-full text-[#27165a] font-bold active:text-blue-700 duration-200 transition-all hover:underline hover:underline-offset-1 ">
              {title}
            </Link>
            <p className="text-gray-600   text-start font-normal text-md"> {description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
