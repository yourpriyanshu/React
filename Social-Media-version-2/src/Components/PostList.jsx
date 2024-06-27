import { useContext } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostList2 } from "../Store/post-list-store";

const PostList = () => {
  const { postList, deletePost } = useContext(PostList2);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))}
    </>
  );
};

export default PostList;

// export const postLoader = () => {
//   return fetch("https://dummyjson.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       return data.posts;
//     });
// };

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
