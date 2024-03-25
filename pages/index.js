import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Mainbody from '@/components/Mainbody'
import { client } from '@/lib/sanity'
import Head from 'next/head';



function Home({ mcaProducts, gateProducts }) {
  return (
    <>
    <Head>
        <title>Note Nest</title>
        <meta
          name="description"
          content="Capturing Insights, One Note at a Time"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      </Head>
    <main className="flex flex-col items-center md:h-[100vh] max-w-[100vw] sm:max-w-[90vw] xl:max-w-[50vw] mx-auto sm:gap-4">
      <Nav />
      <Mainbody mcaProducts={mcaProducts} gateProducts={gateProducts}/>
      <Footer />
    </main>
    </>
  )
}

export default Home

export async function getStaticProps() {

  const mcaProducts = await client.fetch(`*[_type == "mca"]{
    title,
    _id,
    _updatedAt,
    link,
    subject
  } | order(_updatedAt desc)`);

  const gateProducts = await client.fetch(`*[_type == "recordclass"]{
    title,
    _id,
    _updatedAt,
    link,
  } | order(_updatedAt desc)`);


  return {
    props: {
      mcaProducts,
      gateProducts
    },
    revalidate: 60, // refetch content as soon as possible
  };
}
