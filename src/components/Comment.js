import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-2">
      <img
        className="md:h-8"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="user"
      />
      <div>
        <p className="ml-4 font-semibold">{name}</p>
        <p className="ml-4">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
