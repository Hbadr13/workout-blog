// import Image from 'next/image';
// import Card from './card'

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// export default function BlogCard() {
//     const controls = useAnimation();
//     const { ref, inView } = useInView({
//         threshold: 0.3,
//         triggerOnce: true,
//     });

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         }
//     }, [controls, inView]);
//     const blogData = [
//         {
//             image: '/image/img.jpeg',
//             title: 'Learn About Fitness From These Mistakes In 60 Seconds',
//             description: 'Donec Accumsan Enim Sit Amet Dolor Rhoncus Scelerisque. Suspendisse Dictum, Enim A Interdum Facilisis.',
//             authorImage: '/image/pic1.jpg',
//             authorName: 'Jone Doe',
//             date: '17 May 2023',
//             comments: '1 comment',
//         },
//         {
//             image: '/image/img.jpeg',
//             title: '10 Tips for Effective Workout Routines',
//             description: 'Proin auctor eros eu metus pretium, in laoreet sapien elementum.',
//             authorImage: '/image/pic1.jpg',
//             authorName: 'Jane Smith',
//             date: '10 June 2023',
//             comments: '3 comments',
//         },
//         {
//             image: '/image/img.jpeg',
//             title: 'The most innovative things happening with.',
//             description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with.',
//             authorImage: '/image/pic1.jpg',
//             authorName: 'By Jake Johnson ',
//             date: '10 June 2023',
//             comments: '3 comments',
//         },
//         {
//             image: '/image/img.jpeg',
//             title: 'Learn About Fitness From These Mistakes In 60 Seconds',
//             description: 'Donec Accumsan Enim Sit Amet Dolor Rhoncus Scelerisque. Suspendisse Dictum, Enim A Interdum Facilisis.',
//             authorImage: '/image/pic1.jpg',
//             authorName: 'Jone Doe',
//             date: '17 May 2023',
//             comments: '1 comment',
//         },

//     ];

//     return (
//         <div className='w-full h-full  px-4  space-y-24 flex  justify-center flex-col  items-center'>
//             {blogData.map((blog, index) => (
//                 <Card key={index} image={blog.image}
//                     title={blog.title}
//                     description={blog.description}
//                     authorImage={blog.authorImage}
//                     authorName={blog.authorName}
//                     date={blog.date}
//                     comments={blog.comments} />
//             ))}
//         </div>
//     );
// }


// import SampleBlogs from "@/config/sampleblogs";
import React from "react";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

interface BlogType {
    slug: string;
    title: string;
    description: string;
    imageUrl?: string;

};

const dirContent = fs.readdirSync("content", "utf-8")
console.log(dirContent)

const blogs: BlogType[] = dirContent.map(file => {
    const fileContent = readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent)
    const value: BlogType = {
        slug: data.slug,
        title: data.title,
        description: data.description,
        imageUrl: data?.imageUrl
    }
    return value
})



const BlogList = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog: BlogType, index: number) => (
                    <div
                        key={index}
                        className="shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            className="w-full h-64 object-cover object-top"
                            src={blog.imageUrl ? blog.imageUrl : "/blogimg.jpg"}
                            alt={blog.title}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="mb-4">{blog.description}</p>
                            <Link
                                href={`/blogpost/${blog.slug}`}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const metadata: Metadata = {
    title: 'Blogs - ProgrammingWithHarry',
    description: 'A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.',
}


export default BlogList;
