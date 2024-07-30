import axios from "axios";
import { useEffect } from "react";
import { youtubeApi_key } from "../constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../Store/videosSlice";
const useAddvideos = () => {
  const dispatch = useDispatch();
  const fetchdata = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
          youtubeApi_key
      )
      .then((response) => {
        console.log(response);
        dispatch(addVideos(response?.data?.items || []));
      })
      .catch((error) => {
        console.log(error, "something wrong");
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
};

export default useAddvideos;
