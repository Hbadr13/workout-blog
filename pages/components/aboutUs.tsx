import Image from 'next/image'
import React, { useState } from 'react'

const AboutUs = () => {
    const [selected, setselected] = useState('mission')
    return (
        <div>
            <div className="w-full   object-contain bg-center   bg-[url('/image/about-backg.png')] ">
                <div className="max-w-[1090px] mx-auto flex flex-col md:flex-row pt-10...............">
                    <div className="w-full  md:w-1/2 p-4 space-y-10">
                        <div className="text-xl">ABOUT US</div>
                        <div className="text-[5vw] xl:text-7xl leading-[5vw]   font-extrabold">We Help To Get <span className='text-wr-primary'>Fitness</span> Goal</div>
                        <div className="text-lg font-normal">We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight</div>
                        <div className="w-[190px] h-12 p-2  -skew-x-12 bg-gradient-to-r from-wr-bs-danger  from-0% to-60% to-wr-primary rounded-r-md  relative translate-x-10">
                            <div className="absolute -left-6 w-4 inset-y-0 bg-wr-bs-danger rounded-l-md"></div>
                            <div className="text-sm font-medium flex items-center justify-center   h-full space-x-2 skew-x-12">
                                <button onClick={() => setselected('mission')} className={`-skew-x-12 truncate ${selected == 'mission' ? 'bg-white p-2 rounded-sm' : 'text-white'}`}>
                                    <div className="skew-x-12">

                                        Our Mission
                                    </div>
                                </button>
                                <button onClick={() => setselected('vision')} className={` -skew-x-12 truncate ${selected == 'vision' ? 'bg-white p-2 rounded-sm' : 'text-white'}`}>
                                    <div className="skew-x-12">

                                        Our Vision
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="font-normal">We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend.</div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 ">
                        <div className="">
                            <Image
                                className='  object-contain  w-2/3 border-4 border-white  animate-pulse'
                                src={'/image/img.jpeg'} width={1000} height={1000} alt='about-imag1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs