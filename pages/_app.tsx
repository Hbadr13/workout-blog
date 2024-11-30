import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../styles/globals.css';
import { Space_Grotesk } from 'next/font/google'
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
const space_Grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${space_Grotesk.className} font-bold`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
