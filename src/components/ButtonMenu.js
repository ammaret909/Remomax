import React from "react";
export default function ButtonMenu(props) {
  const { topic } = props;
  return (
    // <div className="btn border-white block shadow-xl bg-white hover:bg-white text-zinc-600 text-center m-2">
    //   {topic}
    // </div>
    <div className="btn border-white block shadow-xl bg-white hover:bg-white text-zinc-600 text-center m-2 grid content-center ">
      <div className=" text-xs text-zinc-600">{topic}</div>
    </div>
  );
}
