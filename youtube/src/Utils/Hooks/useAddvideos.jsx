import axios from "axios";
import { useEffect } from "react";
import { youtubeApi_key } from "../constants";
const useAddvideos = () => {
  const fetchdata = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
          youtubeApi_key
      )
      .then((response) => {
        console.log(response);
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
