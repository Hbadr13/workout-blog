import React, { useState } from 'react';

const About = () => {
    const [isVideoActive, setIsVideoActive] = useState(false);

    const handleVideoClick = () => {
        setIsVideoActive(true);
    };

    return (
        <section className="bg-[#f9f4f1] p-8 md:p-16">
            <div className="max-w-5xl  flex  flex-col  md:flex-row space-x-5 mx-auto">
                <div className=' w-full md:w-1/2 flex justify-start flex-col p-6 items-start  fdgbg-red-600'>

                    <div className="  space-y-6 mb-8">
                        <h3 className="text-sm font-bold uppercase text-gray-600">About Us</h3>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            We Help To Get <span className="text-orange-500">Fitness</span> Goal
                        </h1>
                        <p className="mt-4 text-gray-700">
                            We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to lose weight...
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-lg">Our Mission</button>
                        <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-md shadow-lg">Our Vision</button>
                    </div>

                    <p className=" text-gray-600 mb-12">
                        Nunc vulputate urna ut erat posuere accumsan. Curabitur ut commodo mauris, ac volutpat dui. Nullam eget enim ut mi bibendum ultrices.
                    </p>
                    <div className="flex justify-center items-center ">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-500 text-white p-3 rounded-full">
                                <svg width="24" height="24" fill="currentColor" className="text-white">
                                    <path d="M13 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.05 5.05A1 1 0 1 1 6.46 6.46L5.05 7.87a1 1 0 1 1-1.41-1.41L5.05 5.05zm12.02 12.02a1 1 0 1 1 1.41 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l1.41-1.41zM3 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1 1h2a1 1 0 1 1 0-2h-2a1 1 0 0 1-1 1zM5.05 18.95a1 1 0 1 1 1.41-1.41l1.41 1.41a1 1 0 1 1-1.41 1.41l-1.41-1.41zm12.02-12.02a1 1 0 1 1-1.41 1.41L15.26 5.05a1 1 0 1 1 1.41-1.41l1.41 1.41zM3 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-bold">Call us for help</p>
                                <p className="text-2xl font-bold text-gray-700">12 452 1505</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" grid-cols-1 w-full  md:w-1/2  space-y-4  flex flex-col md:grid-cols-2 gap-8">
                
                    <div className="relative bgg-black">
                        <div className='w-[80%] ml-5 relative animate-pulse'>
                            <img src="/image2.jpg" alt="High Quality Video" className="rounded-lg shadow-lg" />      
                        </div>
                        <div className='w-auto  animate-bounce  h-auto absolute top-40 right-0   '>
                            <div className=" -skew-x-12    bg-white     px-3 py-2    rounded-r-md shadow-md border-l-4  border-wr-primary text-orange-500 ">
                                <div className=' skew-x-12 space-x-2  flex flex-row  justify-center items-center   '>
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M19.806 9.23061L5.63094 0.492857C4.60541 -0.138503 3.36551 -0.164753 2.31415 0.422638C1.26279 1.00994 0.635132 2.07967 0.635132 3.28394V20.6798C0.635132 22.5008 2.10232 23.9901 3.90561 24C3.91053 24 3.91545 24 3.92028 24C4.48381 24 5.07106 23.8233 5.61955 23.4886C6.06078 23.2194 6.20024 22.6435 5.93103 22.2024C5.66183 21.7611 5.08583 21.6217 4.64473 21.8909C4.38819 22.0473 4.13764 22.1283 3.91569 22.1282C3.23529 22.1245 2.50681 21.5417 2.50681 20.6799V3.28399C2.50681 2.76738 2.77606 2.30861 3.227 2.05666C3.67798 1.8047 4.20978 1.81595 4.64914 2.08647L18.8242 10.8242C19.2503 11.0865 19.4941 11.5239 19.493 12.0243C19.492 12.5246 19.2464 12.961 18.818 13.2224L8.5694 19.4975C8.12859 19.7674 7.99002 20.3435 8.25993 20.7843C8.52979 21.2251 9.10593 21.3637 9.54674 21.0938L19.7942 14.8194C20.7753 14.2209 21.3625 13.1774 21.3648 12.028C21.3671 10.8787 20.7842 9.83286 19.806 9.23061Z"
                                            fill="#FF8139"
                                        >

                                        </path>
                                    </svg >

                                    <span>
                                        High Quality Video
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="relative">
                        {!isVideoActive ? (
                            <div className=" flex justify-end items-end" onClick={handleVideoClick}>
                                <div className='w-[80%] relative animate-pulse'>
                                    <img src="/image1.jpg" alt="Professional Trainer" className="rounded-lg shadow-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-white p-3 rounded-full shadow-md">
                                            <svg width="24" height="24" fill="currentColor" className="text-orange-500">
                                                <path d="M5 3l14 9-14 9V3z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='w-auto  animate-bounce  h-auto absolute top-40 left-0    '>
                                    <div className=" -skew-x-12    bg-white     px-3 py-2    rounded-r-md shadow-md border-l-4  border-wr-primary text-orange-500 ">
                                        <div className=' skew-x-12 space-x-3  flex flex-row  justify-center items-center  '>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_44_4)">
                                                    <path d="M25.3959 6.40769C25.3958 6.40769 25.3958 6.40769 25.3959 6.40769C24.8107 6.32019 23.7049 6.45281 20.8704 8.60162C20.5635 8.83421 20.1612 8.90519 19.7943 8.7915L15.2396 7.37988C13.1606 6.67834 10.4122 7.68297 8.5059 8.78915C6.96801 9.68144 3.95433 11.8108 5.22148 13.0581C6.15274 13.9747 8.37794 12.5976 11.1342 12.1823C11.8177 12.0794 12.1872 12.1137 12.3766 12.1603C11.6702 14.854 3.9484 24.3246 2.09999 26.521C1.55649 27.1674 2.16053 28.1338 2.98256 27.9327C6.91729 26.9707 10.1589 24.1597 12.4919 21.5069C14.6127 21.4647 15.3405 21.8516 15.4419 22.0139C15.7341 22.4815 15.4972 23.8617 15.3406 24.7751C15.1103 26.1174 14.9284 27.1776 15.6269 27.7546C15.9983 28.0613 16.4858 28.0684 16.9171 27.8438C18.2721 27.138 20.7191 22.7986 20.5275 20.5546C20.3694 18.7025 17.6517 17.58 15.8773 17.0151C16.4304 16.1796 17.0106 15.4223 17.4301 13.4777C18.622 13.7599 20.3851 14.1219 21.268 13.99C22.2269 13.8468 23.5106 12.4393 24.4186 11.2838C25.1501 10.3528 26.3773 8.6346 26.3773 7.58704C26.3773 6.96929 25.9829 6.49536 25.3959 6.40769Z"
                                                        fill="#FF8139"> </path>
                                                    <path d="M17.0585 7.22809C19.0601 7.22809 20.6887 5.6068 20.6887 3.61407C20.6887 1.62129 19.0601 0 17.0585 0C15.0567 0 13.4282 1.62129 13.4282 3.61407C13.4282 5.6068 15.0567 7.22809 17.0585 7.22809Z" fill="#FF8139" ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_44_4">
                                                        <rect width="28.1049" height="28" fill="white" transform="translate(0.0823975)" > </rect>
                                                    </clipPath>

                                                </defs>
                                            </svg>
                                            <span>

                                            Professional Trainer
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                className="rounded-lg shadow-lg"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/watch?v=ruX4Le0kBng"
                                title="Professional Trainer Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>

            </div>
        </section>

    );
};

export default About;
