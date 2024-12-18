import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "@/components/about";

import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import Card from "@/components/card";
import ClientStats from "@/components/ClientStats";
import GetStarted from "@/components/GetStarted";
import Link from "next/link";
import { BlogType, IBlogByCategories } from "@/interface/IBlog";



const index = ({ topStories, blogByCategories }: { topStories: BlogType[], blogByCategories: IBlogByCategories[] }) => {

  return (
    <div className=" ">

      <GetStarted />
      <div className=" mt-32   w-screen max-w-[1200px] mx-auto">
        <div className="w-full h-full px-4 space-y-10 flex justify-center flex-col items-center">
          <div className="  md:w-full w-[75%] sm:px-4  bfg-red-800 sm:text-left text-4xl text-[#2f1c6a] font-bold  text-capitalize m-0">
            Top Stories
          </div>
          <div className="md:w-full w-[90%] sm:w-[75%] h-full  px-4    md:space-y-0 md:space-x-10 flex justify-center  flex-col md:flex-row items-center">
            {topStories?.map((blog: BlogType, index: number) => (
              <React.Fragment key={index}>
                <Card
                  imageURL={blog.imageURL ? blog.imageURL : "/image2.jpg"}
                  title={blog.title}
                  category={blog.category}
                  date={blog.date}
                  description={blog.description}
                  slug={blog.slug}
                  hideCategoryName={false}
                />

              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-32   w-screen max-w-[1200px] mx-auto space-y-44">
        {
          blogByCategories?.map((category) =>
          (
            <div className=" w-full h-full px-4 space-y-0 flex justify-center flex-col items-center">
              <div className="  md:w-full w-[75%] sm:px-4  bfg-red-800 sm:text-left text-4xl text-[#2f1c6a] font-bold  text-capitalize m-0">
                {(category.category.replace('_', ' ')).replace('&', ' & ')}
              </div>
              <div className="md:w-full pt-10 w-[90%] sm:w-[75%] h-full  px-4    md:space-y-0 md:space-x-10 flex justify-center  flex-col md:flex-row items-center">
                {category?.content?.map((blog: BlogType, index: number) => (
                  <React.Fragment key={index}>
                    <Card
                      imageURL={blog.imageURL ? blog.imageURL : "/image2.jpg"}
                      title={blog.title}
                      category={blog.category}
                      date={blog.date}
                      description={blog.description}
                      slug={blog.slug}
                      hideCategoryName={true}

                    />

                  </React.Fragment>
                ))}
              </div>
              <div className="relative h-12 w-full flex items-center justify-center">
                <div className="absolute z-10  w-[95%] h-[0.5px] bg-[#ccc]"></div>
                <div className="bg-white relative z-20 inset-y-0 inset-x-0  p-1">
                  <Link className=" border border-[#ccc] hover:border-slate-600 active:bg-slate-200 duration-300 rounded-full py-3 px-7 font-normal " href={'/category/' + category.category}>View all</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>


      <ClientStats />
      <About />
    </div>
  );
};

export const getStaticProps = async () => {
  const dirTopStories = fs.readdirSync("content/topStories", "utf-8");
  const topStories: BlogType[] = dirTopStories.map((file) => {
    const fileContent = readFileSync(`content/topStories/${file}`, "utf-8");
    const { data } = matter(fileContent);
    const value: BlogType = {
      slug: data.slug || '',
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      date: data.date || '',
      imageURL: data.imageURL || '',
      RelatedPosts: data.RelatedPosts || []
    };
    return value;
  });


  const dirAllCategories = fs.readdirSync("content/categories", "utf-8");
  const blogByCategories = dirAllCategories.map((dir) => {
    const _dirCategories = fs.readdirSync("content/categories/" + dir, "utf-8");

    const content = _dirCategories.slice(0, 3).map((file) => {
      const fileContent = readFileSync(`content/categories/${dir}/${file}`, "utf-8");
      const { data } = matter(fileContent);
      const value: BlogType = {
        slug: data.slug || '',
        title: data.title || '',
        description: data.description || '',
        category: data.category || '',
        date: data.date || '',
        imageURL: data.imageURL || '',
        RelatedPosts: data.RelatedPosts || []

      };
      return value;
    })
    return {
      category: dir,
      content: content
    }
  })

  // console.log('categories', categories)
  return {
    props: {
      topStories,
      blogByCategories
    },
  };
};

export const metadata: Metadata = {
  title: "Blogs - ProgrammingWithHarry",
  description:
    "A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.",
};

export default index;

