import React, { useEffect, useState } from "react";
import PostCard from "../components/post-card";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
//https://jsonplaceholder.typicode.com/posts?_limit=50
const PostList = () => {
  const posts = useLoaderData();
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts?_limit=50",
  //       );
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.log("Error fetching post:", error);
  //     }
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);
  return (
    <div>
      Display all posts here
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export async function postLoader() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=50",
  );
  return response.data;
}

export default PostList;
