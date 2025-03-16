import React from 'react'
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Card from '@/components/card';
import { BlogType } from '@/interface/IBlog';
import { motion } from 'framer-motion';

const CategoryPage = ({ category, topicsOfCategory }: { category: string, topicsOfCategory: BlogType[] }) => {
    const formattedCategory = category?.replace(/_/g, ' ')?.replace(/&/g, ' & ');
    const featuredPost = topicsOfCategory[0];

    return (
        <div className="pt-24 w-full max-w-7xl mx-auto p-1.5 md:px-4 sm:px-6 lg:px-8 py-12">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8 md:mb-16 space-y-3 md:space-y-6"
            >
                <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-2 md:mb-6 shadow-lg">
                    Category
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                    {formattedCategory}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Explore our latest articles and guides about {formattedCategory.toLowerCase()}.
                </p>
            </motion.header>

            {featuredPost && (
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-10 md:mb-20 group relative"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:border-transparent transition-all duration-300">
                        <img
                            src='/image/athlete-1.png'
                            alt={featuredPost.title}
                            className="w-full h-72 md:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="max-w-3xl mx-auto">
                                <span className="text-purple-400 font-semibold text-sm">
                                    Featured Article
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-300 line-clamp-2">
                                    {featuredPost.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.article>
            )}

            <div className="mb-6 md:mb-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                    Latest Articles
                </h3>
                <div className="flex gap-3 text-sm md:text-base ">
                    <button className="px-2 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        Newest First
                    </button>
                    <button className="px-2 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        Most Popular
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
                {topicsOfCategory?.map((blog: BlogType, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group flex justify-center"
                    >
                        <Card
                            imageURL={blog.imageURL || "/image2.jpg"}
                            title={blog.title}
                            category={blog.category}
                            date={blog.date}
                            description={blog.description}
                            slug={blog.slug}
                            hideCategoryName={true}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-16 flex justify-center gap-2">
                {[1, 2, 3, 4].map((page) => (
                    <button
                        key={page}
                        className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryPage;

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
