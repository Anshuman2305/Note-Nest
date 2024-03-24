import React from 'react'

function Mcacard({mcaobj}) {
  return (
    <a href={mcaobj.link} target='blank' className="flex bg-[#f6faff] sm:bg-[#e2f0ff] shadow-sm border-[1px] border-[#b4c7db] sm:border-[#cfe1f5] rounded-2xl p-4 gap-4 hover:bg-[#D4E8FD] hover:sm:bg-[#cfe1f5]">
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