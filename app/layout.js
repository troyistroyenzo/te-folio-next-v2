"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { ChakraProvider } from "@chakra-ui/react";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Troy Enzo</title>
    </head>
    <body className={inter.className}>
     <ChakraProvider>
          <Navbar/>
          {children}
          {/* <Footer/> */}
          <PrismicPreview repositoryName={repositoryName}/>
     </ChakraProvider>
          
      </body>
  </html>
  );
}
