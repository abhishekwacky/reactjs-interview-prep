import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log("wacky", post);
  return (
    <div
      style={{
        height: 150,
        border: "1px solid #acc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2 className="text-wrap">{post.title}</h2>
      <p className="text-wrap">{post.body}</p>
      <Link to={`/posts/${post.id}`}>View comments</Link>
    </div>
  );
};

export default PostCard;
