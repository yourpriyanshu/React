import { createContext, useCallback, useReducer, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);
    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "SET_POSTS":
      return action.payload;
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatchPostList({ type: "SET_POSTS", payload: data.posts });
      });
  }, []);

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const deletePost = useCallback((postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
