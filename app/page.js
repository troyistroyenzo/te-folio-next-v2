"use client"
import Prismic from "prismic-javascript"
import Image from "next/image";
import Hero from "../components/Hero"
import Socials from "../components/Socials"
import Navbar from "../components/Navbar"
import Features from "@/components/Features";
import Startup from "@/components/Startup"
import Film from "@/components/Film"
import CTA from "@/components/CTA"
import Faq from "@/components/Faq"
import { Client } from "@/prismic-configuration";



export default function Home() {
  return (
    <>
      <Hero/>
      <CTA/>
      <Socials/>
      <Features/>
      <Startup/>
      <Film/>
      <Faq/>
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
