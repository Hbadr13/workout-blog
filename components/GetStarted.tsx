import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
    return (
        <section className="relative w-full min-h-screen text-white">
            <div className="relative w-full h-[70vh] content-start flex flex-col items-center justify-center text-center px-6">
                <div
                    className="absolute inset-0 bg-cover "
                    style={{ backgroundImage: "url('/image/athlete.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-gray-900"></div>

                <div className="relative z-10 max-w-3xl">
                    <h1 className=" text-3xl md:text-5xl font-bold">Welcome to the Fitness Blog</h1>
                    <p className="text-lg text-gray-200 mt-4">
                        Stay updated with the latest tips on workouts, nutrition, and wellness.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-56 md:w-72 py-1.5 placeholder:text-sm px-2 md:px-4 md:py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="text-sm md:text-base bg-blue-500 px-3 md:px-5 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            Search
                        </button>
                        <Link href={'/#get-started'} className="text-sm md:text-base bg-blue-500 px-3 md:px-5 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative z-10 bg-gray-900 text-white px-4 pb-7 md:px-12 py-2 md:py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap gap-4 justify-center mb-4 md:mb-8">
                        {["Workouts", "Nutrition", "Wellness", "Mindset"].map((category) => (
                            <button
                                key={category}
                                className="text-sm md:text-base bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-8">What Our Readers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <p className="text-gray-200 italic">
                                "This blog has completely transformed my approach to fitness. The articles are practical and easy to follow!"
                            </p>
                            <div className="flex items-center mt-4">
                                <Image width={100} height={100} src="/static/user1.png" alt="User" className="w-10 h-10 object-cover rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold">John Doe</p>
                                    <p className="text-sm text-gray-400">Fitness Enthusiast</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <p className="text-gray-200 italic">
                                "I love the nutrition tips! They've helped me make better food choices and feel more energized."
                            </p>
                            <div className="flex items-center mt-4">
                                <Image width={100} height={100} src="/static/user2.png" alt="User" className="w-10 h-10 object-cover rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold">Jane Smith</p>
                                    <p className="text-sm text-gray-400">Health Coach</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;