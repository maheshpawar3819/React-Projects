import React from "react";
import useAddvideos from "../../Utils/Hooks/useAddvideos";
import { useSelector } from "react-redux";

const Videocontainer = () => {
  const vdata = useSelector((store) => store.video.videos);
  useAddvideos();
  return <div>video container</div>;
};

export default Videocontainer;
