import React from 'react'

function Nav() {
    return (
        <div className="flex flex-row justify-between w-[100%] items-center mt-4 sm:mt-8 px-4 sm:px-0">
            <div>
                <p className="sm:text-3xl text-[#1a2838] p-3 border-[1px] border-[#b4c7db] rounded-2xl bg-[#D4E8FD]">NN</p>
            </div>
            <div className="flex flex-row gap-4">
                <a href="https://github.com/Anshuman2305" target="_blank" className="px-4 py-1 rounded-lg text-sm text-[#1a2838] border-[1px] border-[#b4c7db] hover:bg-[#a5cdff] hover:border-[#a5cdff] bg-[#D4E8FD]">Github</a>
                <a href="" className=" px-4 py-1 rounded-lg text-sm text-[#1a2838] border-[1px] border-[#b4c7db] hover:bg-[#a5cdff] hover:border-[#a5cdff] bg-[#D4E8FD]">Portfolio</a>
            </div>
        </div>
    )
}

export default Nav