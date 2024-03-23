import React from 'react'
import Image from 'next/image'
import Mcacard from '../components/Mcacard'
import Gatecard from '../components/Gatecard'

function Mainbody({ mcaProducts, gateProducts }) {
    return (
        <>
            <div className="relative flex flex-row min-w-[100%] bg-gradient-to-r from-[#ffffff] to-slate-200 border-[1px] overflow-hidden sm:rounded-3xl sm:shadow-lg mt-4 sm:mt-10 sm:min-h-64">
                <div className="flex flex-col p-8 z-10">
                    <h1 className="font-CSN text-6xl sm:text-8xl">Note Nest</h1>
                    <h3 className="font-CSN text-2xl lg:text-3xl sm:max-w-[60%] leading-8 text-justify">Step into My Digital Notebook: Your Gateway to My Personal Insights and Musings!</h3>
                </div>
                <Image className="absolute sm:left-[55%] top-[-10%] hidden sm:block"
                    src="/images/hero.png"
                    alt="Description of the image"
                    width={400}
                    height={400}
                />
            </div>
            {/*Mca Notes Card*/}
            <div className="flex flex-col md:flex-row justify-center mt-4 sm:mt-12 min-w-[100%] lg:max-h-[40%] gap-8 p-4">
                <div className="bg-white shadow-xl overflow-scroll no-scrollbar border-[1px] border-[#d3d3d3] rounded-2xl max-h-96 grow-1">
                    <div className="sticky top-0 bg-slate-100 py-2 px-8 sm:bg-opacity-50 sm:backdrop-blur-md border-b-[1px] border-[#d3d3d3]">
                        <h2 className="font-CSN text-2xl lg:text-4xl">MCA Notes</h2>
                    </div>
                    <div className="flex flex-col my-6 gap-4 px-4">
                        {
                            mcaProducts.map(mcaproduct => {
                                return (
                                    <div key={mcaproduct._id}>
                                        <Mcacard mcaobj={mcaproduct} />
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                {/*Gate Notes Card*/}
                <div className="relative bg-white rounded-2xl shadow-xl overflow-scroll no-scrollbar border-[1px] border-[#d3d3d3] max-h-96 lg:min-w-80">
                    <div className="sticky top-0 bg-[#ffebef] py-2 px-8 sm:bg-opacity-50 sm:backdrop-blur-md border-b-[1px] border-[#d3d3d3]">
                        <h2 className="font-CSN text-2xl lg:text-4xl">GATE Notes</h2>
                    </div>
                    <div className="flex flex-col my-6 gap-4 px-4">
                    {
                            gateProducts.map(gateproduct => {
                                return (
                                    <div key={gateproduct._id}>
                                        <Gatecard gateobj={gateproduct} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainbody