import React from "react";
export default function ButtonH2(props) {
  const { topic } = props;
  return (
    <div className="btn btn-ghost rounded-btn text-white text-xs">{topic}</div>
  );
}
