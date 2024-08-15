import React from "react";

const Chatmsg = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md rounded-md p-1">
      <img
        src="https://yt3.ggpht.com/yti/ANjgQV94LnAcOtKwVyg4QzYMa-o4VUHT0GP0P7byI8otGC0=s88-c-k-c0x00ffffff-no-rj-mo"
        className="rounded-full w-10 h-10"
        alt="image"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default Chatmsg;
