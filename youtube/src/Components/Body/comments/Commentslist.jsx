import React from "react";
import Comment from "./Comment";
const Commentslist = ({ data }) => {
  return (
    <div>
      {data.map((list, index) => (
        <Comment key={index} data={list} />
      ))}
    </div>
  );
};

export default Commentslist;
