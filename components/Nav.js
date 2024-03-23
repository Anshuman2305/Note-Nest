import React from 'react'

function Nav() {
    return (
        <div className="flex flex-row justify-between w-[100%] items-center mt-4 sm:mt-8 px-4 sm:px-0">
            <div>
                <p className="sm:text-3xl sm:bg-slate-200 p-3 border-[1px] border-slate-300 rounded-2xl">NN</p>
            </div>
            <div className="flex flex-row gap-4">
                <a href="https://github.com/Anshuman2305" target="_blank" className="sm:bg-slate-200 px-4 py-1 rounded-lg text-sm border-[1px]  hover:bg-slate-200 hover:sm:bg-slate-300">Github</a>
                <a href="" className="sm:bg-slate-200 px-4 py-1 rounded-lg text-sm border-[1px]  hover:bg-slate-200 hover:sm:bg-slate-300">Portfolio</a>
            </div>
        </div>
    )
}

export default Nav