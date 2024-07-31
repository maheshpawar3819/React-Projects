import React from "react";
import useAddvideos from "../../Utils/Hooks/useAddvideos";
import { useSelector } from "react-redux";
import Videocard from "./Videocard";

const Videocontainer = () => {
  const vdata = useSelector((store) => store.video.videos);
  useAddvideos();
  return (
    <div className="m-2 p-2 grid grid-cols-4 gap-8 ">
      {vdata.map((ele) => {
        return <Videocard key={ele.id} vdata={ele} />;
      })}
    </div>
  );
};

export default Videocontainer;
