import React from "react";
import Comment from "./Comment";
const Commentslist = ({ data }) => {
  return data.map((list, index) => (
    <div>
      <Comment key={index} data={list} />
      <div className="ml-10 border-l border-black">
        <Comment key={index} data={list} />
        <Comment key={index} data={list} />
        <Comment key={index} data={list} />
      </div>
    </div>
  ));
};

export default Commentslist;
