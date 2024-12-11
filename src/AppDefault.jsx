import P from "prop-types";
import { useEffect, useState, useMemo } from "react";
import "./App.css";

const Post = ({ post }) => {
  console.log("Target: " + post.title);
  return (
    <div key={post.id} className="post">
      <p>post</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  console.log("Father rendered!");

  useEffect(() => {
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} z />;
          })
        );
      }, [posts])}

      {posts.length === 0 && <p>Loading...</p>}
    </div>
  );
}

export default App;
