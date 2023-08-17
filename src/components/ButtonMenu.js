import React from "react";
export default function ButtonMenu(props) {
  const { topic } = props;
  return (
    <div className=" btn btn-ghost rounded-btn hover:bg-gray-100 border-white shadow-xl bg-white text-zinc-600 text-center m-1 grid content-center btn-sm">
      <div className=" text-xs text-zinc-600">{topic}</div>
    </div>
  );
}
