import React from "react";
export default function ButtonH1(props) {
  const { topic } = props;
  return (
    <div className=" btn shadow-md bg-white hover:bg-gray-100 m-2 p-10 grid content-center">
      <div className=" text-sm text-zinc-600">{topic}</div>
    </div>
  );
}
