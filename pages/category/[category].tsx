import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Card from '@/components/card';
import { BlogType } from '@/interface/IBlog';
const index = ({ category, topicsOfCategory }: { category: string, topicsOfCategory: BlogType[] }) => {
    return (
        <div className=" w-screen max-w-[1200px] mx-auto  pt-16  md:pt-32">
            <div className=" p-6 md:p-10 lg:p-16  text-xl md:text-2xl lg:text-3xl text-[#2f1c6a] font-bold  text-capitalize m-0">
                {(category?.replace('_', ' '))?.replace('&', ' & ')}
            </div>
            <div className=" mt-10  px-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-7">
                {topicsOfCategory?.map((blog: BlogType, index: number) => (
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
        </div>
    )
}

export default index


export const getStaticPaths = async () => {
    const dirAllCategories = fs.readdirSync("content/categories", "utf-8");
    const paths = dirAllCategories.map((filename) => {
        return { params: { category: filename } };
    });
    return {
        paths,
        fallback: false,
    };
};


export async function getStaticProps({ params }: { params: { category: string } }) {
    const dirTopStories = fs.readdirSync(`content/categories/${params.category}`, "utf-8");

    const topicsOfCategory: BlogType[] = dirTopStories.map((file) => {
        const fileContent = readFileSync(`content/categories/${params.category}/${file}`, "utf-8");
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
    return {
        props: {
            category: params.category,
            topicsOfCategory
        }
    }
}
