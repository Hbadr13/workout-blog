import React from "react";
import { unified } from "unified";
import Image from "next/image";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import fs, { readFileSync } from "fs";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypePrettyCode } from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import remarkGfm from "remark-gfm";
import ShareButtons from "@/components/ShareLinks";
import Link from "next/link";
import { BlogType } from "@/interface/IBlog";

type Props = {
  params: { slug: string };
};

export default function BlogPage({
  data,
  htmlContent,
  RelatedPostsTopics
}: {
  data: any;
  htmlContent: string;
  RelatedPostsTopics: BlogType[];
}) {
  return (
    <div className="mt-32 text-black   w-full max-w-[1300px] mx-auto px-4">

      <section className="relative rounded-xl w-full bg-gradient-to-r from-indigo-600/80 via-purple-500/80 to-pink-600/80 text-white text-center py-10 md:py-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/image/enthusiast-practicing-yoga-5.png"
            alt="Blog Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50 rounded-xl"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">{data.title}</h1>
          <p className="text-lg sm:text-xl mx-auto max-w-4xl mb-6">
            {data.description || "A short description of the blog content that captures the reader's attention."}
          </p>
          <div className="flex items-center justify-center space-x-4 text-white text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(data.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            <span className=" ">•</span>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      <div className="p-5 md:p-10">
        <div className="  inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
          {data.category}
        </div>
      </div>
      <div className="w-full px-5 md:px-10 mt-6 md:mt-10 flex justify-center">
        <div
          className="prose dark:prose-invert text-black font-normal max-w-[900px]"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>


      <div className="w-full flex justify-center border-t pt-20 mt-12 py-12 md:py-20 px-2 md:px-10">
        <ShareButtons />
      </div>
      <div className="py-10">
        <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#2f1c6a] text-center mb-10">
          Related Posts
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RelatedPostsTopics?.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <Link href={topic.slug} className="block relative h-48 overflow-hidden">
                <Image
                  src={"/image1.jpg"}
                  alt="Post Image"
                  className="object-cover w-full h-full group-hover:scale-105 duration-300"
                  width={1000}
                  height={1000}
                />
              </Link>
              <div className="p-6">
                <Link href={`/blog/${topic.slug}`} className="text-xl font-semibold text-[#2f1c6a] hover:text-blue-500 transition-colors duration-300">
                  {topic.title}
                </Link>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {topic.description}
                </p>
                <Link
                  href={`/blog/${topic.slug}`}
                  className="mt-6 inline-block bg-blue-500 text-white text-center py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export const getStaticPaths = async () => {
  let filenames: string[] = [];
  const dirAllCategories = fs.readdirSync("content/categories", "utf-8");
  const blogByCategories = dirAllCategories.map((dir) => {
    const _dirCategories = fs.readdirSync("content/categories/" + dir, "utf-8");
    filenames = filenames.concat(_dirCategories);
  });
  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Props) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(remarkGfm)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  let selectCategory = "";
  const dirAllCategories = fs.readdirSync("content/categories", "utf-8");
  for (let dir of dirAllCategories) {
    const _dirCategories = fs.readdirSync("content/categories/" + dir, "utf-8");
    if (fs.existsSync(`content/categories/${dir}/${params.slug}.md`)) {
      selectCategory = dir;
      break;
    }
  }
  const filePath = path.join(process.cwd(), `content/categories/${selectCategory}`, `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();
  const RelatedPostsTopics: BlogType[] = data.RelatedPosts.map((file: string) => {
    const fileContent = readFileSync(file, "utf-8");
    const { data } = matter(fileContent);
    const value: BlogType = {
      slug: data.slug || "",
      title: data.title || "",
      description: data.description || "",
      category: data.category || "",
      date: data.date || "",
      imageURL: data.imageURL || "",
      RelatedPosts: data.RelatedPosts,
    };
    return value;
  });

  return {
    props: {
      data,
      htmlContent,
      RelatedPostsTopics,
    },
  };
};
