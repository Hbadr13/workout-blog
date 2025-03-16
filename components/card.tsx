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
      initial={{ opacity: 0.5, x: 10 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0.5, x: 10 },
      }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="w-full flex justify-start items-start relative "
    >
      <div className="w-full h-full flex items-center  flex-col">
        <Link
          href={`/blog/${slug}`}
          className="w-[100%] relative"
        >
          <img
            src="https://images.pexels.com/photos/19387205/pexels-photo-19387205/free-photo-of-laptop-by-monitor-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fitness Image"
            className="w-full h-44 md:h-64  hover:scale-[102%] duration-300 hover:border hover:border-blue-500 rounded-md object-cover"
          />
        </Link>
        <div className="h-auto w-full mt-1 md:mt-4">
          <div className="w-full  flex  flex-col   justify-start items-start space-y-1 md:space-y-3">
            {
              hideCategoryName ?
                <div className="font-bold w-full h-8 items-center flex flex-row   text-[#27165a] ">
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
            <Link href={`/blog/${slug}`} className="text-lg md:text-xl  text-start   w-full text-[#27165a] font-bold active:text-blue-700 duration-200 transition-all hover:underline hover:underline-offset-1 ">
              {title}
            </Link>
            <p className="text-gray-600   text-start font-normal text-sm md:text-md"> {description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
