import React from 'react'

function Mcacard({mcaobj}) {
  return (
    <a href={mcaobj.link} target='blank' className="flex flex-row sm:bg-slate-200 border-[1px] sm:border-slate-300 rounded-2xl p-4 gap-4 hover:bg-slate-200 hover:sm:bg-slate-300">
      <div className="justify-center items-center hidden sm:block">
        <p className="rounded-full p-2 border-[1px] border-slate-800 text-slate-800 text-sm">CA</p>
      </div>
      <div className="flex flex-col justify-around w-full">
        <div className="flex flex-row justify-between">
          <p className="text-xs text-slate-800">{mcaobj.subject}</p>
          <p className="text-xs text-slate-800">03/03/2024</p>
        </div>
        <p className="font-semibold mt-2 text-slate-800 text-xs lg:text-sm line-clamp-1 sm:line-clamp-none">{mcaobj.title}</p>
      </div>
    </a>
  )
}

export default Mcacard