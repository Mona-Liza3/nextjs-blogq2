
"use-client"

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{domains: ['images.unsplash.com'],
    remotePatterns:[
{protocol:"https",
  hostname:"unsplash.com",
  
   } ,
  
   {protocol:"https",
    hostname:"*.google.com"
     } 
  
  
  ]
  }
 };

export default nextConfig;