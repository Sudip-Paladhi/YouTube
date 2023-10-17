import React from "react";
import Comment from "./Comment";
const CommentsPage = () => {
  const commentsData = [
    {
      name: "Kumaresh",
      text: "Super video, found it helpful and nice work bro",
      replies: [
        {
          name: "Sudip",
          text: "I found you everywhere🤣",
          replies: [
            {
              name: "Kumaresh",
              text: "U too 😆, come on bro lets encourage them!!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Sudip",
      text: "never disappoints us!! 👌😍",
      replies: [],
    },
    {
      name: "Partha",
      text: "keet it up and do more work , keep going on brother",
      replies: [
        {
          name: "Sudip",
          text: "Hey you are cricketer right??",
          replies: [
            {
              name: "Partha",
              text: "But not as famous as your namastey javascript 😂",
              replies: [
                {
                  name: "Sudip",
                  text: "😶😎, anyway thank you .",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Kohli",
      text: "Its exactly looks like my Cover Drive, fantastic and good looking 😁",
      replies: [],
    },
    {
      name: "Kevin",
      text: "Super video, found it helpful and nice work bro",
      replies: [
        {
          name: "Mcculum",
          text: "comeon lets play 1 vs 1 in bgmi",
          replies: [],
        },
      ],
    },
    {
      name: "Kumaresh",
      text: "Super video, found it helpful and nice work bro",
      replies: [
        {
          name: "Sudip",
          text: "I found you everywhere🤣",
          replies: [
            {
              name: "Kumaresh",
              text: "U too 😆, come on bro lets encourage them!!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Kumaresh",
      text: "Super video, found it helpful and nice work bro",
      replies: [
        {
          name: "Sudip",
          text: "I found you everywhere🤣",
          replies: [
            {
              name: "Kumaresh",
              text: "U too 😆, come on bro lets encourage them!!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Soumallya",
      text: "keet it up and do more work , keep going on brother",
      replies: [
        {
          name: "Kumaresh",
          text: "Hey you are cricketer right??",
          replies: [
            {
              name: "Rahul",
              text: "But not as famous as your namastey javascript 😂",
              replies: [
                {
                  name: "Partha",
                  text: "😶😎, anyway thank you .",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },

    
  ];

  const CommentList = ({ comments }) => {
    return comments.map((comments, index) => (
        <div key={index}>
      <Comment  data={comments} />
      <div className="pl-10">
      <CommentList comments={comments.replies}/>
      </div>
      </div>
    ));
  };

  return (
    <div className="">
      <h1 className="text-xl font-bold">comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsPage;
