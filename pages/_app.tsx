import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../styles/globals.css';
import { Space_Grotesk } from 'next/font/google'
import Navbar from "./components/navbar";
const space_Grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${space_Grotesk.className} font-bold`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
// useEffect(() => {
//   if (router.isReady && router.query.slug) {
//     const currentSlug = router.query.slug as string;
//     setTitle(currentSlug);

//     // Find the blog content based on the slug
//     const selectedBlog = blogInfo.find((blog) => blog.slug === currentSlug);
//     if (selectedBlog) {
//       setBlogContent(selectedBlog);
//     }
//   }
// }, [router.isReady, router.query.slug]);

// useEffect(() => {
//   if (router.isReady && router.query.slug) {
//     console.log(router.query)
//     // Decode the title from the query and set it
//     setTitle((router.query.slug as string));
//   }
// }, [router.isReady, router.query]);