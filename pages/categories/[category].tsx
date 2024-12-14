import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import BlogCard from '@/components/BlogCard';
import About from "@/components/about";

import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import Card from "@/components/card";
import path from "path";


interface BlogType {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
}
const index = ({ blogs, category }: { blogs: BlogType[]; category: string }) => {

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
      <div className="h-[500px] relative">
     
        <div className="flex md:flex-row flex-col  justify-center  bg-blue-50  items-end md:items-center h-full ">
          <div className=" flex flex-col items-center justify-center  w-[90%] md:w-[55%]  h-[40%] md:h-auto  space-y-4 md:space-y-10 ">
            <div className=" relative pl-[18px]  md:pl-[30px] before:contents-[''] before:absolute before:z-10 before:w-1.5 before:md:w-4 before:my-auto before:h-full  before:left-0 before:mr-2  before:rounded-xl before:bg-blue-500">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-2xl md:text-4xl ">
                Category : {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.div>
            </div>
     
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 190 }}
              transition={{ duration: 2 }} className='h-10 md:h-12 flex bg-blue-600 rounded-md -skew-x-12    after:left-0 after:bg-gradient-to-r after:bg-blue-500 after:rounded-md after:from-90% after:to-white/25 after:h-full  after:w-0   after:transition-all after:bottom-0  hover:after:w-full  after:duration-500 justify-start  items-enter relative  '>
              <button className='absolute  flex  bg-sblack w-full h-full justify-center items-center space-x-4'>
                <a href="#" className="text-white text-xl md:text-2xl truncate skew-x-12 flex justify-center items-center ">
                  Get Started
                </a>
                <div className='w-1 h-full -skew-fsx-12 text-white bg-white'></div>
              </button>
            </motion.div>
          </div>

        </div>
      </div>


      <div className="    py-28  w-screen max-w-[1090px] mx-auto">
        <div className="w-full h-full px-4 space-y-24 flex justify-center flex-col items-center">
          {blogs.map((blog: BlogType, index: number) => (
            <React.Fragment key={index}>
              <Card
                imageUrl={blog.imageUrl ? blog.imageUrl : "/image2.jpg"}
                title={blog.title}
                description={blog.description}
                slug={blog.slug}
              />
          
            </React.Fragment>
          ))}
        </div>
        {/* Explore More Fitness */}
      </div>
   
    </div >
  )

}

export const getStaticProps = async ({ params }: { params: { category: string } }) => {
  const { category } = params; // Dynamic category from URL

  const dirContent = fs.readdirSync(path.join(process.cwd(), 'content'), 'utf-8');
  const blogs: BlogType[] = dirContent
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(process.cwd(), 'content', file), 'utf-8');
      const { data } = matter(fileContent);

      // If category is 'all', return all blogs without filtering
      if (category === 'all' || data.category.toLowerCase() === category.toLowerCase()) {
        return {
          slug: data.slug,
          title: data.title,
          description: data.description,
          imageUrl: data.imageURl,
        };
      }
      return null;
    })
    .filter((blog) => blog !== null); // Filter out null values

  return {
    props: {
      blogs,
      category, // Pass category to the page to display it dynamically
    },
  };
};
// Modify the paths for dynamic category URLs
export const getStaticPaths = async () => {
  const categories = ['beauty', 'fitness', 'health', 'all']; // Add 'all' category

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, // or true/ 'blocking' depending on your needs
  };
};
export const metadata: Metadata = {
  title: "Blogs - ProgrammingWithHarry",
  description:
    "A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.",
};


export default index
