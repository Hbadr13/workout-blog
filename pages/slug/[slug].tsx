import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";


export default function PostPage({ currentFileName }: { currentFileName: string }) {
  const router = useRouter();
  const controls = useAnimation()
  const [title1, setTitle] = useState<string>('');
  const [blogContent, setBlogContent] = useState<any>(null);

  const blogInfo = [
    {
      id: 0,
      slug: 'make-you-better-at-fitness',
      title: 'Resources that’ll make you better at fitness',
      image: '/image/img.jpeg',
      content: [

        {
          id: 0,
          text: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone,<br />
          or the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.<br />
          I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.<br /><br /><br />
          For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.<br />`,

          type: 'small-text',
          array: false
        },
        {
          id: 1,
          text: '',
          data: [
            {
              id: 0,
              text: `Suspendisse nunc massa, pellentesque eu nibh eget.`
            },
            {
              id: 1,
              text: `Suspendisse nunc massa, pellentesque eu nibh eget.`
            },
            {
              id: 2,
              text: `Suspendisse nunc massa, pellentesque eu nibh eget.`
            }
          ],
          array: true,
          type: '3awarid'
        }
      ]
    },
    {
      id: 1,
      slug: 'make-you-better-at-work',
      title: 'better at work',
      content: [
        {
          id: 0,
          text: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone,`,
          type: 'small-text',
          array: false
        }
      ]
    }
  ];
  useEffect(() => {
    if (router.isReady && router.query.slug) {
      const currentSlug = router.query.slug as string;
      setTitle(currentSlug);

      // Find the blog content based on the slug
      const selectedBlog = blogInfo.find((blog) => blog.slug === currentSlug);
      if (selectedBlog) {
        setBlogContent(selectedBlog);
      }
    }
  }, [router.isReady, router.query.slug]);




  if (!title1 || !blogContent) {
    return <div className=' w-full min-h-screen flex  justify-center items-center'>Loading...</div>;
  }

  return (
    <div className="min-w-full flex  justify-center   mt-44 min-h-screen">
      {/* <motion.div className='w-96 bg-black  sm:h-[50%] md:h-[60%] h-[40%]' initial={{ opacity: 0, x: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 }
        }}
        transition={{ duration: 1 }}> */}
      <div className=' h-full bfg-black flex flex-col  items-start p-4 sm:p-10 lg:w-[850px] space-y-5 md:w-[90%] rmd:bg-slate-500 srm:bg-red-600 lrg:bg-blue-500'>
        <div className='w-full'>
          <Image
            src={blogContent.image}
            alt="Fitness Image"
            width={250}
            height={300}
            className=" w-full  h-full rounded-md object-cover"
          />
        </div>
        {/* </motion.div> */}

        <h1 className="text-3xl mt-10 font-bold mb-4">{blogContent.title}</h1>
        <div className="prose flex items-center justify-center mx-auto">
          <div className="w-full  flex  flex-col space-x-4  space-y-8 items-start tbg-red-500 justify-center">

            {blogContent.content.map((item: any) => {
              if (item.type === 'small-text') {
                return (
                  <div className="text-base  ptegx-4 font-medium   text-wr-black-v0" dangerouslySetInnerHTML={{ __html: item.text }} />
                );
              } else if (item.type === '3awarid' && item.array) {
                return (
                  <ul key={item.id} className="list-disc">
                    {item.data.map((dataItem: any) => (
                      <li  className=' text-base font-medium   text-wr-black-v0' key={dataItem.id}>{dataItem.text}</li>
                    ))}
                  </ul>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
