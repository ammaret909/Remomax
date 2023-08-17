import React from "react";
export default function ButtonH2(props) {
  const { topic } = props;
  return (
    <div className="hover:rmx_blue btn rmx_blue rounded-btn text-white text-xs">
      {topic}
    </div>
  );
}
