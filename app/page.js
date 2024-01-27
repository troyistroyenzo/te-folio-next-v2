"use client"
import Prismic from "prismic-javascript"
import Image from "next/image";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Features from "@/components/Features";
import Startup from "@/components/Startup"
import { Client } from "@/prismic-configuration";



export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <Startup/>
    </>
  );
}

// Call request - Prismic
const getServerSideProps= async () => {
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "featured")
  );
  console.log(articles);

  return {
    props: {},
  };
};
