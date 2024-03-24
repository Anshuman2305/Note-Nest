import React from 'react'
import Image from 'next/image'
import Mcacard from '../components/Mcacard'
import Gatecard from '../components/Gatecard'
import { motion } from "framer-motion";

const ReusableAnimation = ({ children }) => {
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
                type: "Inertia",
            }}
        >
            {children}
        </motion.div>
    );
};


function Mainbody({ mcaProducts, gateProducts }) {

    return (
        <>
            <ReusableAnimation >
                <div className="relative flex flex-row min-w-[100%] sm:bg-gradient-to-r from-[#ffffff] to-[#D4E8FD] border-[1px] sm:border-[#b4c7db] overflow-hidden sm:rounded-3xl sm:shadow-lg mt-4 sm:mt-10 sm:min-h-64">
                    <div className="flex flex-col p-8 z-10">
                        <h1 className="font-CSN text-6xl sm:text-8xl">Note Nest</h1>
                        <h3 className="font-CSN text-2xl lg:text-3xl sm:max-w-[60%] leading-6 text-justify">Step into My <code className="font-CSN text-2xl bg-[#D4E8FD] text-[#2D3D4D] rounded-sm py-1 px-2">Digital Notebook</code> : Your Gateway to My Personal Insights and Musings!</h3>
                    </div>
                    <Image className="absolute sm:left-[55%] top-[-10%] hidden sm:block"
                        src="/images/hero.png"
                        alt="Description of the image"
                        width={400}
                        height={400}
                    />
                </div>
            </ReusableAnimation>


            {/*Mca Notes Card*/}

            <div className="flex flex-col md:flex-row justify-center mt-4 sm:mt-12 min-w-[100%] lg:max-h-[40%] gap-8 p-4">
                <ReusableAnimation >
                    <div className="bg-[#f1f8ff] sm:bg-white shadow-sm sm:shadow-lg overflow-scroll no-scrollbar border-[1px] border-[#b4c7db] rounded-2xl max-h-96 grow-1">
                        <div className="sticky top-0 bg-[#D4E8FD] py-2 px-8 sm:bg-opacity-50 sm:backdrop-blur-md border-b-[1px] border-[#b4c7db]">
                            <h2 className="font-CSN text-2xl lg:text-3xl text-slate-800">MCA Notes</h2>
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
                </ReusableAnimation>
                {/*Gate Notes Card*/}
                <ReusableAnimation >
                <div className="relative bg-[#f1f8ff] sm:bg-white rounded-2xl shadow-sm sm:shadow-lg overflow-scroll no-scrollbar border-[1px] border-[#b4c7db] max-h-96 lg:min-w-80">
                    <div className="sticky top-0 bg-[#D4E8FD] py-2 px-8 sm:bg-opacity-50 sm:backdrop-blur-md border-b-[1px] border-[#b4c7db]">
                        <h2 className="font-CSN text-2xl lg:text-3xl text-slate-800">Recorded Lectures</h2>
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
                </ReusableAnimation>
            </div>
        </>
    )
}

export default Mainbody