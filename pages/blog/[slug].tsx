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
  RelatedPostsTopics: BlogType[]
}) {
  return (
    <div className=" mt-32  text-black   flex justify-center items-center flex-col w-[1020px] mx-auto">
      <div className="flex">
        <div className="px-16">
          <h1 className="py-4 text-2xl textb">{data.title}</h1>
          <div
            className="prose dark:prose-invert  text-black font-normal"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
      <div className="w-full  pt-10 py-20 px-10 flex justify-center">
        <ShareButtons
          text={`Starting a fitness journey can be daunting, especially with the abundance of information and trends. However, focusing on your unique goals and creating a tailored plan is essential for success. `}
          url={
            "https://www.youtube.com/watch?v=_g-aaR2XbZ4&list=RDLr_Du__ihIk&index=13&ab_channel=SNOR91"
          }
        />
      </div>

      <div className="text-2xl md:text-3xl lg:text-5xl text-[#2f1c6a] py-10 ">Related posts</div>
      {

        RelatedPostsTopics?.map((topic) =>
          <div className="w-full  space-y-5 py-5  flex flex-col">
            <div className="flex  flex-row w-full    items-center justify-start  h-auto space-x-5">
              <Link href={topic.slug} className=" relative w-96  flex justify-center items-center  h-48">
                <Image
                  src={"/image1.jpg"}
                  className="  absolute hover:scale-[102%] duration-300  object-fill  bg-blue-700   w-full      rounded-md   "
                  width={1000}
                  height={1000}
                  alt="man"
                />
              </Link>

              <div className="w-full flex-col  h-full  flex  justify-center space-y-3">
                <Link href={`/blog/${topic.slug}`} className=" text-black text-md  font-bold hover:underline active:text-blue-700 hover:underline-offset-1 ">
                  {topic.title}
                </Link>
                <p className="text-     font-normal   ">
                  {topic.description}
                </p>
                <Link href={`/blog/${topic.slug}`} className=" bg-blue-500 hover:scale-[102%] duration-300 active:scale-[101%] active:bg-blue-400  inline-block px-9 py-2    w-48 text-center rounded-full text-white mt-10 lg:mt-20">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export const getStaticPaths = async () => {
  let filenames: string[] = []
  const dirAllCategories = fs.readdirSync("content/categories", "utf-8");
  const blogByCategories = dirAllCategories.map((dir) => {
    const _dirCategories = fs.readdirSync("content/categories/" + dir, "utf-8");
    filenames = filenames.concat(_dirCategories)
  })
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




  let selectCategory = ''
  const dirAllCategories = fs.readdirSync("content/categories", "utf-8");
  for (let dir of dirAllCategories) {
    const _dirCategories = fs.readdirSync("content/categories/" + dir, "utf-8");
    if (fs.existsSync(`content/categories/${dir}/${params.slug}.md`)) {
      selectCategory = dir
      break
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
      slug: data.slug || '',
      title: data.title || '',
      description: data.description || '',
      category: data.category || '',
      date: data.date || '',
      imageURL: data.imageURL || '',
      RelatedPosts: data.RelatedPosts
    };
    return value;
  });
  return {
    props: {
      data,
      htmlContent,
      RelatedPostsTopics
    },
  };
};

