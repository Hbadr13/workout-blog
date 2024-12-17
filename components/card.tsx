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
  category,
  date,
  slug,
}: {
  imageUrl: string;
  title: string;
  category: string;
  date:string;
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
      className=" w-[95%] sm:w-[100%]  sm:h-[450px]      md:h-[500px]  lg:h-[500px]  h-[350px]   bdsg-red-700    flex   justify-start items-start relative "
    >



      <div className="  w-full  absolute h-full    flex   items-center  flex-col">
        <motion.div
          className="w-[100%]  sm:h-[50%] md:h-[40%] h-[40%]"
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
        <div className="   h-auto bg-blackff    w-full mt-4 ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 1 }}
            className="w-full  flex  flex-col   justify-start items-start  bgg-blue-500  bg-dblack  space-y-3  "
          >
            <div    className="  font-bold  w-full    h-8 items-center flex flex-row   text-[#27165a] "> {date}  <h1 className=" text-3xl ml-2 -mt-3 font-bold">.</h1><Link href="/categories/all" className=" ml-1">{category}</Link> <h1 className=" text-3xl ml-1 -mt-3 font-bold">.</h1></div>
            <button className="text-xl  text-start   w-full text-[#27165a] font-bold ">
              {title}
            </button>
            <p className="text-gray-600   text-start font-normal text-md"> {description}</p>
            {/* <div className=" w-40 h-12   flex   bg-blue-600   rounded-md after:rounded-md  -skew-x-12    after:left-0 after:bg-blue-500 after:h-full  after:w-0   after:transition-all after:bottom-0   hover:after:w-full  after:duration-500 justify-start  items-enter relative  ">
              <Link
                href={`/blog/${slug}`}
                className=" absolute  flex  bg-sblack w-full h-full justify-center      items-center space-x-4"
              >
                <div className="text-white text-xl skew-x-12 flex justify-center items-center">
                  Read More
                </div>

                <div className=" w-1 h-full -skew-fsx-12      text-white  bg-white"></div>
              </Link>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
// Example array containing blog data
