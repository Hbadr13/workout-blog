


import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path'; // Import path for working with file paths
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import remarkGfm from 'remark-gfm';
import DemoSlider from '@/components/DemoSlider';
import ShareLinks from '@/components/ShareLinks';
import ShareButtons from '@/components/ShareLinks';

import {FacebookShareButton} from 'react-share'
 
  const data_1 = [
    {
      "id": 1,
      "title": "ARE AWESOME",
      "tagline": "NEXTJS 13 & SWIPER SLIDER",
      "image": "/image1.jpg",
      "buttons": [
        {
          "id": 1,
          "text": "Roberto Nickson",
          "link": "https://www.pexels.com/@rpnickson/",
          "type": "btn-dark btn-circle"
        }
      ]
    },
    {
      "id": 2,
      "title": "GIVE IT A SHOOT",
      "tagline": "IF YOU LIKE IT",
      "image": "/image2.jpg",
      "buttons": [
        {
          "id": 1,
          "text": "Julia M Cameron",
          "link": "https://www.pexels.com/@julia-m-cameron/",
          "type": "btn-dark btn-circle"
        }
      ]
    },
    {
      "id": 3,
      "title": "ARE AWESOME",
      "tagline": "NEXTJS 13 & SWIPER SLIDER",
      "image": "/image1.jpg",
      "buttons": [
        {
          "id": 1,
          "text": "Roberto Nickson",
          "link": "https://www.pexels.com/@rpnickson/",
          "type": "btn-dark btn-circle"
        }
      ]
    },
  ]

type Props = {
  params: { slug: string };
};

export default function BlogPage({ data, htmlContent }: { data: any; htmlContent: string }) {
  return (
    <div className=" mt-32  text-black   flex justify-center items-center flex-col w-[1020px] mx-auto">
      <div className="flex">
        <div className="px-16">
    
  
          <h1 className='py-4 text-2xl textb'>{data.title}</h1>
          <div className="prose dark:prose-invert  text-black font-normal" dangerouslySetInnerHTML={{ __html: htmlContent }} />

         </div>
      </div>
      <div className="w-full  pt-10 py-20 px-10 flex justify-center">
        <ShareButtons   text={`Starting a fitness journey can be daunting, especially with the abundance of information and trends. However, focusing on your unique goals and creating a tailored plan is essential for success. `}
           url={'https://www.youtube.com/watch?v=_g-aaR2XbZ4&list=RDLr_Du__ihIk&index=13&ab_channel=SNOR91'}/>
           </div>
      <div className='flex w-[90%]    space-y-4  dfbg-black py-8  flex-col   '>
        <div className='flex space-y-2  ml-20 flex-col'>
          <h1 className=' text-black ml-2 text-xl font-serif'>Related Blogs</h1>
          <div className=' w-32 h-1   justify-end  flex ml-2    bg-blue-500 roundeffd-md  -skew-x-12      items-enter relative  '>
            <div className=' w-1 h-full -skew-fsx-12   mr-5     text-white  bg-white'></div>
          </div>

        </div>
        <div className='w-full   flex justify-center items-center'>
          <DemoSlider data={data_1} />
                   </div>
      </div>
    </div>
  );
}

// Define static paths for the dynamic pages
export const getStaticPaths = async () => {
  const contentDir = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(contentDir);

  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, ''); // Remove the file extension
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false, // Only generate pages for the defined paths
  };
};

export const getStaticProps = async ({ params }: Props) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(remarkGfm) // Add this to support tables
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return {
    props: {
      data,
      htmlContent,
    },
  };
};

