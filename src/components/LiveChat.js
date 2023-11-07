import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomMessage, getRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
   const i = setInterval(() => {
console.log("API CALLING");

dispatch(addMessage({
      name: getRandomName(),
      message: getRandomMessage(25) + ".",
    })
    );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[433px] p-1 rounded border border-black overflow-y-scroll flex flex-col-reverse">
    <div>
      {
        chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
        ))
    }
      </div>
    </div>
  );
};

export default LiveChat;
