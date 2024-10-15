import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import BlogCard from '../pages/components/BlogCard';

export default function PostPage({ frontmatter: { title, date }, content }) {
  return (
    <div className='min-w-full min-h-screen px-4 py-12 bg-gradient-to-r text-center from-green-300 via-blue-400 to-purple-400'>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{date}</p>
      <div className="prose flex items-center justify-center mx-auto">
        <div className=' w-[80%] flex text-2xl flex-col space-x-4 text-pretty bg-black space-y-8 items-center  justify-center' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className="container w-full flex justify-center items-center mx-auto p-4">
          <BlogCard />
    </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('pages/posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('pages/posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const htmlContent = marked(content);

  return {
    props: {
      frontmatter,
      content: htmlContent,
    },
  };
}
