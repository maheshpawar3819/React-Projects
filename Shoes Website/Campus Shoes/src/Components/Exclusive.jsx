import React from "react";

const Exclusive = ({ exclusive }) => {
  const { title, images, variants, options } = exclusive || {};
  const img = images[0]?.url;
  const price = variants[0]?.price;
  const option = options[1]?.values;

  return (
    <div className=" cursor-pointer hover:border-gray-200 hover:border-2 rounded-md h-auto w-72 p-1">
      <div>
        <img src={img} alt="" className="size-80" />
      </div>
      <div className="flex justify-center my-2 w-[100%] h-11">
        <button className="text-white hover:text-black hover:border-solid hover:border-2 hover:border-gray-200 hover:bg-white p-2 px-16 tracking-widest rounded-sm text-xl">
          QUICK BUY
        </button>
      </div>
      <div>
        <p className="text-base text-gray-500 font-medium">{title}</p>
      </div>
      <div className="my-1">
        <p className="text-xl ">Rs. {price}</p>
      </div>
      <div>
        <p className="text-base text-gray-500">{option.join("   , ")}</p>
      </div>
    </div>
  );
};

export default Exclusive;
