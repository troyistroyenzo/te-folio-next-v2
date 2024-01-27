"use client"
import Prismic from "prismic-javascript"
import Image from "next/image";
import Hero from "../components/Hero"
import { Client } from "@/prismic-configuration";


export default function Home() {
  return (
    <div>Page</div>
    <Hero/>
  );
}

// Call request - Prismic
// export async function getServerSideProps () {
//   const articles = await Client().query(
//     Prismic.Predicates.at("document.type", "featured")
//   );
//   console.log(articles);

//   return {
//     props : { }
//   };
// }
