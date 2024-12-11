import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_LOADING:
      return { ...state, loading: true };
    case types.POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
  }
  return { ...state };
};
