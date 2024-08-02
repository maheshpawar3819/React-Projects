import React from "react";
import useAddvideos from "../../Utils/Hooks/useAddvideos";
import { useSelector } from "react-redux";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const vdata = useSelector((store) => store.video.videos);
  useAddvideos();
  return (
    <>
      <div className="m-2 p-2 grid grid-cols-4 gap-8 ">
        {vdata.map((ele) => {
          return (
            <Link key={ele.id} to={"/watch?v=" + ele.id}>
              <Videocard vdata={ele} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Videocontainer;
