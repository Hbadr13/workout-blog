import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Card = ({
  imageUrl,
  title,
  description,
  slug,
}: {
  imageUrl: string;
  title: string;
  description: string;
  slug: string;
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
  const profailamis = (title: string) => {
    // Implement the functionality for profailamis
    // For example, you can navigate to a new page or perform an action here
    router.push(`/slug/${title}`);
  };
  return (
    <div
      ref={ref}
      className=" w-[95%] sm:w-[70%]  sm:h-[600px]     md:h-[500px]  lg:h-[500px]  h-[450px]      flex   justify-start items-start relative "
    >
      <div className="  w-full  rounded-lg  shadow-xl  mt-2 -skew-y-3 "></div>
      {/* <div className="hover:bg-black hover:w-10 hover:h-full   h-full    hover:translate-x-14 duration-200 "></div> */}

      <div className="  w-full  absolute h-full    flex   items-center  flex-col">
        <motion.div
          className="w-[75%]  sm:h-[50%] md:h-[50%] h-[40%]"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
          }} // Link to animation controls
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/19387205/pexels-photo-19387205/free-photo-of-laptop-by-monitor-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fitness Image"
            className="w-full h-full  skehgfw-y-3 rounded-md object-cover"
          />
        </motion.div>
        <div className="p-6   h-auto bg-blackff    w-full mt-10 ml-3 ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 1 }}
            className="w-full  flex  flex-col   justify-center items-center  bgg-blue-500  bg-dblack px-2 space-y-4  "
          >
            <button className="text-2xl text-black   hover:text-blue-600 font-bold ">
              {title}
            </button>
            <p className="text-gray-600 ml-2  text-md"> {description}</p>
            <div className=" w-40 h-12   flex   bg-blue-600   rounded-md after:rounded-md  -skew-x-12    after:left-0 after:bg-blue-500 after:h-full  after:w-0   after:transition-all after:bottom-0   hover:after:w-full  after:duration-500 justify-start  items-enter relative  ">
              <Link
                href={`/blog/${slug}`}
                className=" absolute  flex  bg-sblack w-full h-full justify-center      items-center space-x-4"
              >
                <div className="text-white text-xl skew-x-12 flex justify-center items-center">
                  Read More
                </div>

                <div className=" w-1 h-full -skew-fsx-12      text-white  bg-white"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
// Example array containing blog data
