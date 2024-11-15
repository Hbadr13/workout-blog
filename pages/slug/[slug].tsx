import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import DemoSlider from '../components/DemoSlider';


export default function PostPage({ currentFileName }: { currentFileName: string }) {
  const router = useRouter();
  const controls = useAnimation()
  const [title1, setTitle] = useState<string>('');
  const [email, setEmail] = useState('');
  const [blogContent, setBlogContent] = useState<any>(null);
  const data = [
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
        },
        {
          id: 2,
          text: '`A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone',

          array: false,
          type: 'other'
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
        },
        {
          id: 1,
          text: '`“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.',

          array: false,
          type: 'other'
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
    <div className="min-w-full flex  flex-col  py-8  items-center justify-center   mt-44 min-h-screen">
      {/* <motion.div className='w-96 bg-black  sm:h-[50%] md:h-[60%] h-[40%]' initial={{ opacity: 0, x: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 }
        }}
        transition={{ duration: 1 }}> */}
      <div className=' h-full bdfg-black flex flex-col  items-start p-4 sm:p-10 lg:w-[850px]  space-y-16 md:w-[90%]  '>
        <div className='w-full h-[400px]'>
          <Image
            src={blogContent.image}
            alt="Fitness Image"
            width={300}
            height={400}
            className=" w-full  h-full rounded-3xl object-cover"
          />
        </div>
        {/* </motion.div> */}

        <h1 className="text-3xl mt-10 font-bold mb-4">{blogContent.title}</h1>
        <div className="prose flex items-center justify-center mx-auto">
          <div className="w-full  bg-bddlack flex  flex-col    space-y-8 items-start tbg-red-500 justify-center">

            {blogContent.content.map((item: any) => {
              if (item.type === 'small-text') {
                return (
                  <div className="text-base  ptegx-4 font-medium   text-wr-black-v0" dangerouslySetInnerHTML={{ __html: item.text }} />
                );
              } else if (item.type === '3awarid' && item.array) {
                return (
                  <ul key={item.id} className="list-disc ">
                    {item.data.map((dataItem: any) => (
                      <li className=' text-base font-medium  ml-3  text-wr-black-v0' key={dataItem.id}>{dataItem.text}</li>
                    ))}
                  </ul>
                );
              }
              else if (item.type === 'other') {
                return (
                  <div className='w-full h-44  bg-wr-primary/20  flex justify-center items-center text-xl font-bold border-l-[7px]  p-5   border-wr-primary  text-black'>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</div>
              )

              } else 
                return null;
              
            })}
          </div>
        </div>
        <div className='flex w-full   space-y-4   flex-col   '>
          <div className='flex space-y-2 flex-col'>
            <h1 className=' text-black ml-2 text-xl font-serif'>Related Blogs</h1>
            <div className=' w-32 h-1   justify-end  flex ml-2    bg-wr-primary   roundeffd-md  -skew-x-12      items-enter relative  '>
              <div className=' w-1 h-full -skew-fsx-12   mr-5     text-white  bg-white'></div>
            </div>

          </div>
          <div className='w-full   flex justify-center items-center'>

            <DemoSlider data={data} />
          </div>
        </div>
      </div>
      <div className=' xl:w-[80%]  lg:w-[88%] w-[90%] max-w-[1100px]   lg:h-44 sm:h-60 skefvw-x-12 flex justify-center rounded-lg items-center bg-wr-primary/20'>
        <div className='w-full  bg-wr-primary  p-4 flex jdustify-center items-center h-[90%] rounded-md -skew-y-2' >

          <div className='flex lg:flex-row  flex-col space-y-7  lg:space-y-0 w-full space-x-2   skew-y-2 justify-center items-center'>
            <div className='  flex flex-col   lg:w-1/2 w-full  text-white justify-center items-center'>
              <h1 className='text-white text-3xl  font-bold'> Subscribe To Our Newsletter</h1>
              <h4 className=' text-sm font-serif'> it is A Long Esablished Fact That A Reader Will Distracted</h4>
            </div>
            <div className='flex lg:w-1/2 w-full space-x-8  justify-center items-center flex-col  sm:space-y-0 space-y-5 sm:flex-row '>
              <div className='md:w-80 w-[99%] h-14 rounded-md flex justify-center items-center  bg-white  -skew-x-6'>
                <input
                  className="h-[90%]  px-4   skew-x-6  w-[90%] "
                  name="senderEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={500}
                  placeholder="Enter Your  Emai Address..."
                />
              </div>
              <div className=' w-40 h-14   flex   bg-black   rounded-md after:rounded-md  -skew-x-12    after:left-0 after:bg-orange-600 after:h-full  after:w-0   after:transition-all after:bottom-0   hover:after:w-full  after:duration-500 justify-start  items-enter relative  '>
                <button className=' absolute  flex  bg-sblack w-full h-full justify-center      items-center space-x-4'>

                  <a className="text-white text-md skew-x-12 flex justify-center items-center">
                    Subscribe Now
                  </a>

                  <div className=' w-1 h-full -skew-fsx-12      text-white  bg-white'></div>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
