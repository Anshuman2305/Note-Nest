import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Mainbody from '@/components/Mainbody'
import { client } from '@/lib/sanity'


function Home({ mcaProducts, gateProducts }) {
  return (
    <main className="flex flex-col justify-start items-center bg-[#ffffff] md:h-[100vh] relative max-w-[100vw] sm:max-w-[90vw] xl:max-w-[50vw] mx-auto">
      <Nav />
      <Mainbody mcaProducts={mcaProducts} gateProducts={gateProducts}/>
      <Footer />
    </main>
  )
}

export default Home

export async function getStaticProps() {
  const mcaProducts = await client.fetch(`*[_type == "mca"] | order(_createdAt desc)`);
  const gateProducts = await client.fetch(`*[_type == "gate"] | order(_createdAt desc)`);


  return {
    props: {
      mcaProducts,
      gateProducts
    },
    revalidate: 1, // refetch content as soon as possible
  };
}
