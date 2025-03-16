import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { InstagramIcon, Facebook01Icon, TwitterIcon, YoutubeIcon } from 'hugeicons-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const socialMediaLinks = [
        { name: "Facebook", href: "https://facebook.com", icon: <Facebook01Icon strokeWidth={2} /> },
        { name: "Twitter", href: "https://twitter.com", icon: <TwitterIcon strokeWidth={2} /> },
        { name: "Instagram", href: "https://instagram.com", icon: <InstagramIcon strokeWidth={2} /> },
        { name: "LinkedIn", href: "https://linkedin.com", icon: <YoutubeIcon strokeWidth={2} /> },
    ];

    return (
        <footer className="relative">
            <div className="relative z-10 overflow-hidden bg-blue-100 from-wr-primary-dark/5 to-wr-primary-dark/15">
                <div className='relative z-10 xl:w-[80%] lg:w-[88%] w-[90%] max-w-[1100px] mx-auto lg:h-64 sm:h-60 skefvw-x-12 flex justify-center rounded-lg items-center bg-blue-200 my-20'>
                    <div className='w-full bg-blue-500 p-4 flex justify-center items-center h-[90%] rounded-md -skew-y-2'>
                        <div className='flex lg:flex-row flex-col space-y-7 lg:space-y-0 w-full space-x-2 skew-y-2 justify-center items-center'>
                            <div className='flex flex-col lg:w-1/2 w-full text-white justify-center items-center'>
                                <h1 className='text-white text-3xl font-bold'>Stay Updated with Our Newsletter</h1>
                                <h4 className='text-sm text-center lg:text-left'>
                                    Join our community to receive the latest news, exclusive offers, and more directly to your inbox.
                                </h4>
                            </div>
                            <div className='flex lg:w-1/2 w-full space-x-8 justify-center items-center flex-col sm:space-y-0 space-y-5 sm:flex-row'>
                                <div className='md:w-80 w-[99%] h-14 rounded-md flex justify-center items-center bg-white -skew-x-6'>
                                    <input
                                        className="h-[90%] px-4 skew-x-6 w-[90%]"
                                        name="senderEmail"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        maxLength={500}
                                        placeholder="Enter your email address..."
                                    />
                                </div>
                                <div className='w-40 h-14 flex bg-black rounded-md after:rounded-md -skew-x-12 after:left-0 after:bg-blue-400 after:h-full after:w-0 after:transition-all after:bottom-0 hover:after:w-full after:duration-500 justify-start items-center relative'>
                                    <button className='absolute flex bg-black w-full h-full justify-center items-center space-x-4'>
                                        <a className="text-white text-md skew-x-12 flex justify-center items-center">
                                            Subscribe Now
                                        </a>
                                        <div className='w-1 h-full -skew-fsx-12 text-white bg-white'></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-20">
                    <div className="absolute z-20 w-72 h-72 bottom-0 -left-72 rounded-xl opacity-15 shadow-[200px_80px_100px_rgba(255,129,57,1)]" />
                    <div className="container relative z-10 w-full max-w-[1200px] mx-auto px-4">
                        <div className='w-full flex justify-center items-center flex-col'>
                            <p className="font-normal flex justify-center items-center w-full mt-10">
                                Join thousands of people who are already on their way to a healthier, happier life!
                            </p>
                            <div className="mt-4 flex flex-col justify-center items-center">
                                <h4 className="font-semibold mb-2">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {
                                        socialMediaLinks.map((it, index) => <Link key={index} href={it.href} className="bg-blue-400 hover:bg-blue-500 duration-200 rounded-md p-2 text-white" target="_blank" rel="noopener noreferrer">
                                            {it.icon}
                                        </Link>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center border-t border-gray-300 py-8">
                        <p className="text-gray-400">
                            Copyright © 2024 <span className='text-blue-600'>Fitness Journey</span>. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
