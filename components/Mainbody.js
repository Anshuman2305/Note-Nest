import React from "react";
import Image from "next/image";
import Mcacard from "../components/Mcacard";
import Recordcard from "./Recordcard";
import { motion } from "framer-motion";

const Jumpreveal = ({ children }) => {
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
      <Jumpreveal>
        <div
          className="relative flex flex-row min-w-[100%] sm:bg-gradient-to-r from-[#ffffff] dark:from-[#242424] 
        to-[#D4E8FD] dark:to-[#2c2c2c] border-y-[1px] sm:border-[1px]  sm:border-[#b4c7db] dark:sm:border-[#393939] overflow-hidden 
        sm:rounded-3xl sm:shadow-lg py-8 px-4 dark:bg-[#1d1d1d] dark:border-[#353535]"
        >
          <div className="flex flex-col px-4 sm:px-8 pb-4 z-10">
            <h1 className="font-CSN text-6xl sm:text-6xl lg:text-8xl dark:text-[#b4b4b4]">
              Note Nest
            </h1>
            <h3 className="font-CSN text-2xl lg:text-3xl sm:max-w-[50%] leading-6 text-justify">
              Step into My{" "}
              <code className="font-CSN text-2xl bg-[#D4E8FD] dark:bg-[#414141] text-[#2D3D4D] font-medium dark:text-[#c9c9c9] rounded-md py-1 px-2">
                Digital Notebook
              </code>{" "}
              : Your Gateway to My Personal Insights and Musings!
            </h3>
          </div>
          <Image
            className="absolute sm:left-[55%] top-[-10%] hidden sm:block dark:saturate-0 w-[28em]"
            src="/images/hero.png"
            alt="Description of the image"
            width={400}
            height={400}
          />
        </div>
      </Jumpreveal>

      {/*Mca Notes Card*/}

      <div className="flex flex-col md:flex-row justify-center min-w-[100%] lg:max-h-[40%] gap-8 p-4 pt-8 sm:p-0 sm:py-8">
        <Jumpreveal>
          <div
            className="bg-[#f1f8ff] sm:bg-white dark:bg-[#242424] shadow-sm sm:shadow-lg overflow-scroll no-scrollbar border-[1px]
           border-[#b4c7db] dark:border-[#393939] rounded-2xl max-h-96 sm:max-h-80 lg:max-h-72 sm:min-h-72 grow-1"
          >
            <div
              className="sticky top-0 bg-[#D4E8FD] dark:bg-[#242424] dark:sm:bg-[#222222a1]  py-2 px-8 sm:bg-opacity-50 sm:backdrop-blur-md 
            border-b-[1px] border-[#b4c7db] dark:border-[#393939] z-20"
            >
              <h2 className="font-CSN text-2xl lg:text-3xl text-slate-800 dark:text-[#cfcfcf]">
                MCA Notes
              </h2>
            </div>
            <div className="flex flex-col my-6 gap-4 px-4">
              {mcaProducts.map((mcaproduct) => {
                return (
                  <div key={mcaproduct._id}>
                    <Mcacard mcaobj={mcaproduct} />
                  </div>
                );
              })}
            </div>
          </div>
        </Jumpreveal>
        {/*Gate Notes Card*/}
        <Jumpreveal>
          <div
            className="relative bg-[#f1f8ff] sm:bg-white rounded-2xl shadow-sm sm:shadow-lg overflow-scroll 
          no-scrollbar border-[1px] border-[#b4c7db] max-h-96 sm:max-h-80 lg:max-h-72 sm:min-h-72 lg:min-w-80 dark:bg-[#242424] dark:border-[#393939]"
          >
            <div
              className="sticky top-0 bg-[#D4E8FD] py-2 px-8 sm:bg-opacity-50 sm:backdrop-blur-md border-b-[1px]
             border-[#b4c7db] z-20 dark:bg-[#242424] dark:sm:bg-[#222222a1] dark:border-[#393939]"
            >
              <h2 className="font-CSN text-2xl lg:text-3xl text-slate-800 dark:text-[#cfcfcf]">
                Recorded Lectures
              </h2>
            </div>
            <div className="flex flex-col my-6 gap-4 px-4 min-w-72">
              {gateProducts.map((gateproduct) => {
                return (
                  <div key={gateproduct._id}>
                    <Recordcard gateobj={gateproduct} />
                  </div>
                );
              })}
            </div>
          </div>
        </Jumpreveal>
      </div>
    </>
  );
}

export default Mainbody;
