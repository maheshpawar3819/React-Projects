import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  console.log(name);

  return (
    <div className="pl-5 flex shadow-md bg-gray-100 p-2 ml-2 rounded-md">
      <img
        src="https://yt3.ggpht.com/yti/ANjgQV94LnAcOtKwVyg4QzYMa-o4VUHT0GP0P7byI8otGC0=s88-c-k-c0x00ffffff-no-rj-mo"
        className="rounded-full w-12 h-12"
        alt="image"
      />
      <div className="px-3">
      <p className="font-bold">{name}</p>
      <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
