import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import React, { useEffect } from "react";
import Link from "next/link";
import About from "@/components/about";
import Card from "@/components/card";
import ClientStats from "@/components/ClientStats";
import GetStarted from "@/components/GetStarted";
import { BlogType, IBlogByCategories } from "@/interface/IBlog";

const index = ({ topStories, blogByCategories }: { topStories: BlogType[], blogByCategories: IBlogByCategories[] }) => {

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      console.log('hash', hash)
      if (hash) {
        const targetElement = document.getElementById(hash.replace("#", ""));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100">
      <GetStarted />

      <div className="mt-32 w-screen max-w-[1200px] mx-auto">
        <div className="w-full h-full px-6 md:px-8 space-y-8 flex justify-center flex-col items-center">
          <h2 className="text-4xl md:text-5xl text-blue-900 font-bold text-center">Top Stories</h2>
          <div className="md:w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {topStories?.map((blog: BlogType, index: number) => (
              <React.Fragment key={index}>
                <div
                >
                  <Card
                    imageURL={blog.imageURL ? blog.imageURL : "/image2.jpg"}
                    title={blog.title}
                    category={blog.category}
                    date={blog.date}
                    description={blog.description}
                    slug={blog.slug}
                    hideCategoryName={false}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div id="get-started" className="mt-32 w-screen max-w-[1200px] mx-auto space-y-24">
        {blogByCategories?.map((category) => (
          <div className="w-full h-full px-6 md:px-8 space-y-8 flex justify-center flex-col items-center">
            <h3 className="text-3xl md:text-4xl text-blue-900 font-semibold text-center">
              {(category.category.replace('_', ' ')).replace('&', ' & ')}
            </h3>
            <div className="md:w-full pt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {category?.content?.map((blog: BlogType, index: number) => (
                <React.Fragment key={index}>
                  <div
                  >
                    <Card
                      imageURL={blog.imageURL ? blog.imageURL : "/image2.jpg"}
                      title={blog.title}
                      category={blog.category}
                      date={blog.date}
                      description={blog.description}
                      slug={blog.slug}
                      hideCategoryName={true}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="relative pt-12 h-12 w-full flex items-center justify-center">
              <div className="absolute z-10 w-[95%] h-[1px] bg-blue-200"></div>
              <div className="relative z-20 inset-y-0 inset-x-0 p-1 rounded-full">
                <Link
                  className="border bg-blue-100 border-blue-300 hover:border-blue-600 active:bg-blue-100 duration-300 rounded-full py-3 px-7 font-medium text-blue-900"
                  href={'/category/' + category.category}
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 md:mt-40">
        <ClientStats />
      </div>
      <div id="about-us">
        <About />
      </div>
      <div id="contact-us" className="mt-32">
      </div>
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

