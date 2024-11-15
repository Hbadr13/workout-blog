
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BlogCard from './components/BlogCard'
import About from './components/about'

const index = () => {

  const fullText = `Whether your aim is to loose weight, tone up, gain weight we can put together a gym programme or recommend the right classes for you to attend in our studios.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typewriterEffect = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typewriterEffect);
      }
    }, 20);

    return () => clearInterval(typewriterEffect);
  }, [fullText]);

  return (
    <div className=" ">
      <div className="h-[800px] xl:h-[1000px] relative">
        <div className=" absolute  -z-10  opacity-30 bg-[url('/image/Yellow_background-2.jpg')]  bg-cover w-full h-full" />
        <div className="flex md:flex-row flex-col  items-end md:items-center h-full ">
          <div className=" flex flex-col justify-end w-[90%] md:w-[55%] pb-2 pr-3 md:pr-0 md:pb-0 h-[40%] md:h-auto  space-y-4 md:space-y-10 ml-[10%]">
            <div className=" relative pl-[18px]  md:pl-[30px] before:contents-[''] before:absolute before:z-10 before:w-1.5 before:md:w-4 before:my-auto before:h-full  before:left-0 before:mr-2  before:rounded-xl before:bg-wr-primary">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-xl md:text-3xl lg:text-4xl xl:text-6xl">
                We Always Focus On Your Health
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              className="text-xs md:text-lg lg:text-2xl h-20">   {displayedText}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 190 }}
              transition={{ duration: 2 }} className='h-10 md:h-12 flex bg-wr-primary rounded-md -skew-x-12    after:left-0 after:bg-gradient-to-r after:from-wr-primary after:from-90% after:to-white/25 after:h-full  after:w-0   after:transition-all after:bottom-0 after:rounded-sm hover:after:w-full  after:duration-500 justify-start  items-enter relative  '>
              <button className='absolute  flex  bg-sblack w-full h-full justify-center items-center space-x-4'>
                <a href="#" className="text-white text-xl md:text-2xl truncate skew-x-12 flex justify-center items-center ">
                  Get Started
                </a>
                <div className='w-1 h-full -skew-fsx-12 text-white bg-white'></div>
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-[60%] md:h-full md:w-[44%] flex justify-end items-end">
            <Image
              src={'/image/handsome-man-is-engaged-gym.png'}
              className=' w-[80%] object-contain  h-full md:h-auto'
              width={1000} height={1000} alt='man' />
          </motion.div>
        </div>
      </div>

      <div className=' mt-32 w-full   max-w-[1090px] mx-auto' >
        <div className="w-full  ">

          <BlogCard />
        </div>
      </div>
      <div  className=' w-full h-auto flex justify-center items-center'>

      <div  className='w-[96%] h-96 max-w-[1200px] relative   bhgg-red-700 flex justify-center items-center '>
          <div className='w-[95%] lg:h-24 sm:h-28 h-32   bg-wr-primary-dark  skew-y-12'></div>
        <div className='w-[95%] bg-black/95  absolute -skew-y-6   flex justify-center items-center h-52 md:h-72 '>
           <div className=' grid grid-flow-col grihud-flow-row  grid-rows-2   gap-x-20  md:grid-rows-1'>
            <div className='w-auto h-auto flex   justify-center space-y-4 items-center flex-col'>
              <span className='text-white   font-bold text-3xl'>987</span>
                <span className=' text-white text-2xl '>Happy Clients</span>
            </div>
              <div className='w-auto h-auto flex  justify-center space-y-4  items-center flex-col'>
              <span className='text-white  font-serif text-3xl'>987</span>
                <span className=' text-white text-2xl '>Happy Clients</span>
            </div>
            <div className='w-auto h-auto flex  justify-center space-y-4  items-center flex-col'>
              <span className='text-white  font-serif text-3xl'>907</span>
                <span className=' text-white text-2xl '>Happy Clients</span>
            </div>

           </div>
         </div>
           <div className='w-full h-full absolute md:flex justify-end items-start hidden btg-blue-700'>
              <img src="/man.png" alt="High Quality Video" className=" lg:w-80 lg:h-80 md:w-60 lg-mt-24   -mt-16  -ml-56 md:h-60 " /> 
           </div>

      </div>
      </div>
      <div className='w-full h-auto'>
        <About />
      </div>
    </div >
  )

}


export default index
