import React, { useEffect } from "react";
import Chatmsg from "./Chatmsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../Utils/Store/chatSlice";

const Livechat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  console.log(chatMessage);

  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
      console.log("Api pooling");
      dispatch(
        addMessage({
          name: "Mahesh Pawar",
          message: "My first comment" + "😊",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[580px] ml-2 p-2 border border-black bg-slate-100 rounded-md shadow-md overflow-y-scroll">
      {chatMessage.map((chat,index) => (
        <Chatmsg key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default Livechat;
