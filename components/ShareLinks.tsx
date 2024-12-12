import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import {ShareSocial} from 'react-share-social' 

const ShareButtons = ({ text, url }:{ text:string, url :string}) => {
 const pathname= usePathname()
 const searchParams = useSearchParams(); // Retrieves the search parameters (e.g., "?x=hello&y=1")
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL+pathname+'?'+searchParams
  const style = {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      overflow: 'hidden'    },
    
    title: {
      color: "white",
    }
  };
  return (
    <ShareSocial
    
      socialTypes={[
        "facebook",
        "twitter",
        "line",
        "linkedin",
        "whatsapp",
        "viber",
        "telegram",
        "email"
      ]}
      
      url={baseUrl}
      // onSocialButtonClicked={(buttonName) => {
      //   console.log(`${buttonName} clicked text`);
      // }}
      title="Let’s build a community dedicated to better health and wellness. Remember, your fitness journey doesn’t just impact you—it can inspire others too!"
      style={style}
    />
  );
  
};

export default ShareButtons;
