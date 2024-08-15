import React, { useEffect, useState } from "react";
import Chatmsg from "./Chatmsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../Utils/Store/chatSlice";
import {
  generateRandomName,
  makeRandomMessage,
} from "../../../Utils/Store/helper";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  //   console.log(chatMessage);

  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
      //   console.log("Api pooling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "😊🚩🇮🇳",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[580px] ml-2 p-2  bg-slate-100 rounded-md shadow-md overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((chat, index) => (
            <Chatmsg key={index} name={chat.name} message={chat.message} />
          ))}
          <div className="w-full p-2 ml-2 border border-black rounded-md">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addMessage({
                    name: "Mahesh Pawar",
                    message: liveMessage,
                  })
                );
                setLiveMessage("");
              }}
            >
              <input
                type="text"
                placeholder="Chat..."
                className="p-1 w-2/3 ml-8 broder border-black rounded-md tracking-widest bg bg-gray-100"
                value={liveMessage}
                onChange={(e) => {
                  setLiveMessage(e.target.value);
                }}
              />
              <button className="p-1 ml-4 bg-gray-400 rounded-md px-3 hover:bg-gray-300 tracking-widest">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livechat;
