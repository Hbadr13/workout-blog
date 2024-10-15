import Image from 'next/image';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Card = ({ image, title, description, authorImage, authorName, date, comments }: { comments: string, image: string, title: string, description: string, authorImage: string, authorName: string, date: string }) => {

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

        <div ref={ref} className=' w-full h-[800px]    flex   justify-start items-start relative '>
            <div className='bg-white  w-full  rounded-lg h-full shadow-xl   mt-5 -skew-y-3 '></div>
            <div className='hover:bg-black hover:w-10 hover:h-full   h-full    hover:translate-x-14 duration-200 '></div>

            <div className="  w-full  absolute h-full   flex   items-center  flex-col">
                <motion.div className='w-[95%]  h-[80%]' initial={{ opacity: 0, x: 50 }}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 50 }
                    }}// Link to animation controls

                    transition={{ duration: 1 }}>

                    <Image
                        src={image}
                        alt="Fitness Image"
                        width={250}
                        height={300}
                        className=" w-full  h-full rounded-md object-cover"
                    />
                </motion.div>
                <div className="p-6 w-full ">
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -50 }
                        }}
                        transition={{ duration: 1 }} className="flex items-center mb-4">
                        <Image
                            src={authorImage}
                            alt="Author"
                            width={40}
                            height={40}
                            className="w-14 h-14 ml-5 rounded-full"
                        />
                        <div className=" ml-5 space-x-4   justify-center  items-center flex flex-row">
                            <p className="text-gray-600   text-sm">{authorName}</p>
                            <div className='w-2 h-2 rounded-full  bg-wr-primary ' />
                            <p className="text-gray-400 mt-[2px] text-xs">{date} • {comments}</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 50 }
                        }}
                        transition={{ duration: 1 }} className='w-full  flex  flex-col   bg-dblack px-2 space-y-4  justify-start items-start'>

                        <button className="text-2xl text-black   hover:text-wr-primary font-bold ">{title}</button>
                        <p className="text-gray-600 ml-2  text-md"> {description}</p>
                        <div className=' w-40 h-12   flex   bg-wr-primary   rounded-md after:rounded-md  -skew-x-12    after:left-0 after:bg-orange-500 after:h-full  after:w-0   after:transition-all after:bottom-0   hover:after:w-full  after:duration-500 justify-start  items-enter relative  '>
                            <button className=' absolute  flex  bg-sblack w-full h-full justify-center      items-center space-x-4'>
                                <a href="#" className="text-white text-xl    skew-x-12   flex  justify-center items-center ">
                                    Read More
                                </a>
                                <div className=' w-1 h-full -skew-fsx-12      text-white  bg-white'></div>
                            </button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Card
// Example array containing blog data