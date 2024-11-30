import { Search02Icon } from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='fixed z-30 top-0 w-full'>
            <div className="w-full max-w-[1300px] mx-auto relative pt-4 px-2">
                <div>
                    <div className="w-full h-16  md:h-20 bg-white  skew-x-0 md:-skew-x-6 p-1 rounded-md shadow-lg">
                        <div className=" skew-x-0 md:skew-x-6 w-full h-full pr-3  md:pr-10 flex items-center justify-between">
                            <Link href={'/'}>
                                <Image className='w-52 origin-center' src={'/image/logo.svg'} width={1000} height={1000} alt='logo' />
                            </Link>
                            <div className=" relative  w-0 hidden md:block md:w-[300px] h-12  rounded-xl ">
                                <input className='bg-wr-primary/15 relative z-0 w-full h-full pr-20 pl-2  outline-none rounded-xl' />
                                <div className=" absolute  flex justify-center items-center inset-y-0 right-4 z-10 opacity-75">
                                    <Search02Icon size={32} />
                                </div>
                            </div>
                            <div className=' h-10 md:h-12 w-[140px] md:w-[180px] flex bg-wr-primary rounded-md -skew-x-12    after:left-0 after:bg-orange-500 after:h-full  after:w-0   after:transition-all after:bottom-0   hover:after:w-full  after:duration-500 justify-start  items-enter relative  '>
                                <button className=' absolute  flex  bg-sblack w-full h-full justify-center      items-center  space-x-1.5 md:space-x-4'>
                                    <a href="#" className="text-white text-xl md:text-2xl truncate skew-x-12 flex justify-center items-center ">
                                        Get Started
                                    </a>
                                    <div className='w-1 h-full -skew-fsx-12 text-white bg-white'></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar