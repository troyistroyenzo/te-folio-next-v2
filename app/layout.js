"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { ChakraProvider } from "@chakra-ui/provider";


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
     </ChakraProvider>
          
      </body>
  </html>
  );
}


// Call request - Prismic
export async function getServerSideProps () {
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "featured")
  );
  console.log(articles);

  return {
    props : { }
  };
}