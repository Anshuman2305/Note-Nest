import React from "react";

function Mcacard({ mcaobj }) {
  var date = Date.parse(mcaobj._createdAt);

  function format(date) {
    date = new Date(date);

    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return day + "-" + month + "-" + year;
  }

  return (
    <a
      href={mcaobj.link}
      target="blank"
      className="flex bg-[#f6faff] sm:bg-[#e2f0ff] 
    shadow-sm border-[1px] border-[#b4c7db] sm:border-[#cfe1f5] rounded-2xl p-4 gap-4
     hover:bg-[#D4E8FD] hover:sm:bg-[#cfe1f5] dark:bg-[#353535] dark:border-[#353535] 
     dark:drop-shadow-xl dark:bg-gradient-to-bl dark:from-[#242424] dark:hover:bg-[#474747] "
    >
      <div className="flex flex-col justify-around w-full">
        <div className="flex flex-row justify-between">
          <p
            className="text-xs text-slate-600 bg-[#edf5ff] py-1 px-2 rounded-full 
          font-medium border-[1px] border-[#cfe1f5] drop-shadow-sm dark:text-[#C8C8C8] dark:bg-[#242424] dark:border-[#363636]"
          >
            {mcaobj.subject}
          </p>
          <p
            className="text-xs text-slate-600 bg-[#edf5ff] py-1 px-2 rounded-full 
          font-medium border-[1px] border-[#cfe1f5] drop-shadow-sm dark:text-[#C8C8C8] dark:bg-[#242424] dark:border-[#363636]"
          >
            Last Updated : {format(mcaobj._updatedAt)}
          </p>
        </div>
        <p className="font-semibold pt-2 px-2 text-slate-800 text-sm line-clamp-1 sm:line-clamp-none dark:text-[#C8C8C8] dark:drop-shadow-lg">
          {mcaobj.title}
        </p>
      </div>
    </a>
  );
}

export default Mcacard;
