"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ChakraProvider } from "@chakra-ui/react";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>TROY ENZO</title>
      <meta name="Builder, Artist & Entrepreneur" content="I'm a builder and creator leveraging AI, web3, agritech, fintech, edtech, and data science to develop innovative solutions. I collaborate to solve problems and deliver tangible value and results. My vision is to help people through disruptive tech and platforms. I constantly learn and innovate to make an industry impact. My strengths are solving technical and business challenges, venturing into new landscapes, fostering growth, and thriving on collaboration. I build with purpose - to glorify God by serving others." />
    </head>
    <body className={inter.className}>
     <ChakraProvider>
          {/* <Navbar/> */}
          {children}
          <Footer/>
          <PrismicPreview repositoryName={repositoryName}/>
     </ChakraProvider>
          
      </body>
  </html>
  );
}
