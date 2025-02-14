import { useContext, useEffect, useRef } from "react";
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";
import {
  incrementCounter,
  decrementCounter,
} from "../../contexts/CounterProvider/actions";

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      console.log("1");
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
      console.log("postsDispatch");
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter} +
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter} -
      </button>
      <h1>Posts</h1>
      {postsState.loading && <strong>Loading...</strong>}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
