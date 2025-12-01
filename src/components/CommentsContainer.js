import React from 'react'

const commentsData = [
  {
    name: "Ravi Kumar",
    text: "Great video! Really helped me understand the concept.",
    replies: [],
  },
  {
    name: "Sneha Patel",
    text: "Thanks for the content, very informative.",
    replies: [
      {
        name: "Kunal Verma",
        text: "Totally agree! Explained in a simple way.",
        replies: [],
      },
      {
        name: "Rajesh Singh",
        text: "Also loved how he used visuals to make it easier.",
        replies: [
          {
            name: "Sneha Patel",
            text: "Yes! Visuals made a big difference.",
            replies: [
              {
                name: "Aditi Mehra",
                text: "He should make more videos like this.",
                replies: [
                  {
                    name: "Rajesh Singh",
                    text: "Absolutely. Subscribed right away!",
                    replies: [],
                  },
                ],
              },
              {
                name: "Ankit Sharma",
                text: "This is my go-to channel now.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Neha Joshi",
    text: "Can someone explain the part at 4:35? Got confused there.",
    replies: [
      {
        name: "Arjun Rao",
        text: "Sure, he’s referring to how closures work in JS.",
        replies: [],
      },
    ],
  },
  {
    name: "Manoj Desai",
    text: "Nice explanation. Keep it up bro!",
    replies: [],
  },
  {
    name: "Pooja Nair",
    text: "This deserves more views!",
    replies: [],
  },
  {
    name: "Dev Yadav",
    text: "🔥🔥🔥 Loved it! Super helpful.",
    replies: [],
  },
];


const Comments = ({data}) => {
  const {name, text} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 gap-3'>
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div>
        <div>{name}</div>
        <div>{text}</div>
      </div>
    </div>
  )
}

const CommentsList = ({comments}) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment}/>
      <div className='pl-5 border-l border-l-gray-300 ml-5'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
}

const CommentsContainer = ({comment}) => {
  return (
    <div>
      <h1 className="text-lg font-bold">{comment} comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer