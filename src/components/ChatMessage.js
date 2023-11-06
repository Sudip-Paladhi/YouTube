import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center">
      <img
      className="h-8"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="user"
      />
      <span className="font-semibold p-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
