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
            <div className="border-[1px] sm:border-[#f7cfd6] rounded-xl p-4 sm:bg-[#ffebef] -z-1 hover:bg-[#f7cfd6]">
                <div className="flex flex-row justify-between gap-1">
                    <p className="text-xs lg:text-sm font-semibold text-[#61454a]">{gateobj.title}</p>
                    <p className="text-xs text-[#61454a]">{format(gateobj._createdAt)}</p>
                </div>
            </div>
        </a>

    )
}

export default Gatecard