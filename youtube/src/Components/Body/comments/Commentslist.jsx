import React from "react";
import Comment from "./Comment";
const Commentslist = ({ data }) => {
  return data.map((list, index) => (
    <div key={index}>
      <Comment key={index} data={list} />
      {list?.replies?.length > 0 && (
        <div className="ml-10 border-l border-black">
          <Commentslist data={list?.replies} />
        </div>
      )}
    </div>
  ));
};

export default Commentslist;
