import React from "react";
import Commentslist from "./Commentslist";

const Commentscontainer = ({ countcomment }) => {
  const commentsdata = [
    {
      name: "Mahesh Pawar",
      text: "Nice video",
      replies: [
        {
          name: "Mahesh Pawar",
          text: "Nice video",
          replies: [
            {
              name: "Mahesh Pawar",
              text: "Nice video",
              replies: [
                {
                  name: "Mahesh Pawar",
                  text: "Nice video",
                  replies: [
                    {
                      name: "Mahesh Pawar",
                      text: "Nice video",
                      replies: [
                        {
                          name: "Mahesh Pawar",
                          text: "Nice video",
                          replies: [
                            {
                              name: "Mahesh Pawar",
                              text: "Nice video",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
      ],
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
      replies: [
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
        {
          name: "Mahesh Pawar",
          text: "Nice video",
        },
      ],
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
    {
      name: "Mahesh Pawar",
      text: "Nice video",
    },
  ];

  // console.log(commentsdata);

  return (
    <div>
      <div className="pl-4 py-1 text-xl font-bold text-gray-700">
        {countcomment} comments
      </div>
      <Commentslist data={commentsdata} />
    </div>
  );
};

export default Commentscontainer;
