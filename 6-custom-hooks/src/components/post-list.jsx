import { useFetch } from "../hooks/use-fetch";
import { useMemo } from "react";

const PostList = () => {
  // https://jsonplaceholder.typicode.com/posts
  const options = useMemo(() => ({ method: "GET" }), []);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    options,
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>Post List</h1>
      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
