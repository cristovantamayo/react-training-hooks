import P from "prop-types";
import { useEffect, useState, useMemo, useRef } from "react";
import "./App.css";

const Post = ({ post, handleClick }) => {
  //console.log("Target: " + post.title);
  return (
    <div key={post.id} className="post">
      <p>post</p>
      <h1 onClick={() => handleClick(post.title)} style={{ cursor: "pointer" }}>
        {post.title}
      </h1>
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
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const input = useRef(null);
  const counter = useRef(0);

  console.log("Father rendered!");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h3>Rendered: {counter.current}</h3>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length === 0 && <p>Loading...</p>}
    </div>
  );
}

export default App;
