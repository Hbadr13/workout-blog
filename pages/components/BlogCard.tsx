import Image from 'next/image';
import Card from './card'

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function BlogCard() {
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
    const blogData = [
        {
            image: '/image/img.jpeg',
            title: 'Learn About Fitness From These Mistakes In 60 Seconds',
            description: 'Donec Accumsan Enim Sit Amet Dolor Rhoncus Scelerisque. Suspendisse Dictum, Enim A Interdum Facilisis.',
            authorImage: '/image/pic1.jpg',
            authorName: 'Jone Doe',
            date: '17 May 2023',
            comments: '1 comment',
        },
        {
            image: '/image/img.jpeg',
            title: '10 Tips for Effective Workout Routines',
            description: 'Proin auctor eros eu metus pretium, in laoreet sapien elementum.',
            authorImage: '/image/pic1.jpg',
            authorName: 'Jane Smith',
            date: '10 June 2023',
            comments: '3 comments',
        },
        {
            image: '/image/img.jpeg',
            title: 'The most innovative things happening with.',
            description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with.',
            authorImage: '/image/pic1.jpg',
            authorName: 'By Jake Johnson ',
            date: '10 June 2023',
            comments: '3 comments',
        },
        {
            image: '/image/img.jpeg',
            title: 'Learn About Fitness From These Mistakes In 60 Seconds',
            description: 'Donec Accumsan Enim Sit Amet Dolor Rhoncus Scelerisque. Suspendisse Dictum, Enim A Interdum Facilisis.',
            authorImage: '/image/pic1.jpg',
            authorName: 'Jone Doe',
            date: '17 May 2023',
            comments: '1 comment',
        },

    ];

    return (
        <div className='w-full h-full  px-4  space-y-24 flex  justify-center flex-col  items-center'>
            {blogData.map((blog, index) => (
                <Card image={blog.image} title={blog.title} description={blog.description} authorImage={blog.authorImage} authorName={blog.authorName} date={blog.date} comments={blog.comments} />
            ))}
        </div>
    );
}
