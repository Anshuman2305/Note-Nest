import React from 'react';
import { motion } from "framer-motion";


const Slidereveal = ({ children }) => {
    
    return (
        <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
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

function Nav() {
    return (
        <div className="w-[100%]">
        <Slidereveal>
        <div className="flex flex-row justify-between w-[100%] items-center mt-4 sm:mt-4 px-4 lg:px-14">
            <div>
                <p className="sm:text-2xl text-[#1a2838] p-3 border-[1px] border-[#b4c7db] rounded-2xl bg-[#D4E8FD]">NN</p>
            </div>
            <div className="flex flex-row gap-4">
                <a href="https://github.com/Anshuman2305" target="_blank" className="px-4 py-1 rounded-lg text-sm text-[#1a2838] border-[1px] border-[#b4c7db] hover:bg-[#a5cdff] hover:border-[#a5cdff] bg-[#D4E8FD]">Github</a>
                <a href="" className=" px-4 py-1 rounded-lg text-sm text-[#1a2838] border-[1px] border-[#b4c7db] hover:bg-[#a5cdff] hover:border-[#a5cdff] bg-[#D4E8FD]">Portfolio</a>
            </div>
        </div>
        </Slidereveal>
        </div>
    )
}

export default Nav