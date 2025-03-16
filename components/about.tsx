import React, { useState } from 'react';

const About = () => {
    const [isVideoActive, setIsVideoActive] = useState(false);

    const handleVideoClick = () => {
        setIsVideoActive(true);
    };

    return (
        <section className="bg-blue-50 p-8 md:p-16 mt-52">
            <div className="max-w-5xl flex flex-col md:flex-row space-x-5 mx-auto">
                <div className='w-full md:w-1/2 flex justify-start flex-col p-6 items-start'>

                    <div className="space-y-6 mb-8">
                        <h3 className="text-sm font-bold uppercase text-gray-600">About Us</h3>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Empowering You with <span className="text-blue-500">Knowledge</span>
                        </h1>
                        <p className="mt-4 text-gray-700">
                            Our mission is to inspire and educate readers through insightful articles and thought-provoking content. Whether you're exploring new topics or deepening your expertise, we are here to guide you.
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg">Explore Our Mission</button>
                        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md shadow-lg">Our Vision</button>
                    </div>

                    <p className="text-gray-600 mb-12">
                        We believe in providing content that not only informs but also inspires. Join us as we delve into a wide range of topics that shape the world around us.
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 text-white p-3 rounded-full">
                                <svg width="24" height="24" fill="currentColor" className="text-white">
                                    <path d="M13 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.05 5.05A1 1 0 1 1 6.46 6.46L5.05 7.87a1 1 0 1 1-1.41-1.41L5.05 5.05zm12.02 12.02a1 1 0 1 1 1.41 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l1.41-1.41zM3 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1 1h2a1 1 0 1 1 0-2h-2a1 1 0 0 1-1 1zM5.05 18.95a1 1 0 1 1 1.41-1.41l1.41 1.41a1 1 0 1 1-1.41 1.41l-1.41-1.41zm12.02-12.02a1 1 0 1 1-1.41 1.41L15.26 5.05a1 1 0 1 1 1.41-1.41l1.41 1.41zM3 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-bold">Reach Out</p>
                                <p className="text-2xl font-bold text-gray-700">+212 693 768 664</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-cols-1 w-full md:w-1/2 space-y-4 flex flex-col md:grid-cols-2 gap-8">

                    <div className="relative">
                        <div className='w-[80%] ml-5 relative animate-pulse'>
                            <img src="/image2.jpg" alt="High Quality Content" className="rounded-lg shadow-lg" />
                        </div>
                        <div className='w-auto animate-bounce h-auto absolute top-40 right-0'>
                            <div className=" -skew-x-12 bg-white px-3 py-2 rounded-r-md shadow-md border-l-4 border-blue-400 text-blue-500 ">
                                <div className='skew-x-12 space-x-2 flex flex-row justify-center items-center'>
                                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M19.806 9.23061L5.63094 0.492857C4.60541 -0.138503 3.36551 -0.164753 2.31415 0.422638C1.26279 1.00994 0.635132 2.07967 0.635132 3.28394V20.6798C0.635132 22.5008 2.10232 23.9901 3.90561 24C3.91053 24 3.91545 24 3.92028 24C4.48381 24 5.07106 23.8233 5.61955 23.4886C6.06078 23.2194 6.20024 22.6435 5.93103 22.2024C5.66183 21.7611 5.08583 21.6217 4.64473 21.8909C4.38819 22.0473 4.13764 22.1283 3.91569 22.1282C3.23529 22.1245 2.50681 21.5417 2.50681 20.6799V3.28399C2.50681 2.76738 2.77606 2.30861 3.227 2.05666C3.67798 1.8047 4.20978 1.81595 4.64914 2.08647L18.8242 10.8242C19.2503 11.0865 19.4941 11.5239 19.493 12.0243C19.492 12.5246 19.2464 12.961 18.818 13.2224L8.5694 19.4975C8.12859 19.7674 7.99002 20.3435 8.25993 20.7843C8.52979 21.2251 9.10593 21.3637 9.54674 21.0938L19.7942 14.8194C20.7753 14.2209 21.3625 13.1774 21.3648 12.028C21.3671 10.8787 20.7842 9.83286 19.806 9.23061Z"
                                            fill="#3b82f6"
                                        ></path>
                                    </svg>
                                    <span>
                                        High Quality Content
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {!isVideoActive ? (
                            <div className="flex justify-end items-end" onClick={handleVideoClick}>
                                <div className='w-[80%] relative animate-pulse'>
                                    <img src="/image1.jpg" alt="Engaging Tutorials" className="rounded-lg shadow-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-white p-3 rounded-full shadow-md">
                                            <svg width="24" height="24" fill="currentColor" className="text-blue-500">
                                                <path d="M5 3l14 9-14 9V3z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src="https://www.youtube.com/embed/some-video-id"
                                title="Engaging Tutorials"
                                frameBorder="0"
                                allowFullScreen
                                className="w-full h-[50vh] md:h-[60vh] rounded-lg shadow-lg"
                            ></iframe>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
