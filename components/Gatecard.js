import React from 'react'

function Gatecard({ gateobj }) {

    var date = Date.parse(gateobj._createdAt);

    function format(date) {
        date = new Date(date);

        var day = ('0' + date.getDate()).slice(-2);
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();

        return day + '-' + month + '-' + year;
    }

    return (
        <a href={gateobj.link} target='blank'>
            <div className="border-[1px] bg-[#f6faff] border-[#b4c7db] sm:border-[#cfe1f5] rounded-xl p-4 sm:bg-[#e2f0ff] -z-1 hover:bg-[#D4E8FD] hover:sm:bg-[#cfe1f5]">
                <div className="flex flex-row justify-between gap-1">
                    <p className="text-xs lg:text-sm font-semibold text-slate-800">{gateobj.title}</p>
                    <p className="text-xs text-slate-800">{format(gateobj._createdAt)}</p>
                </div>
            </div>
        </a>

    )
}

export default Gatecard