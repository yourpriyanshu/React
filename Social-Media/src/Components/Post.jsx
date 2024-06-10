import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post is created by {post.reactions} people .
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
