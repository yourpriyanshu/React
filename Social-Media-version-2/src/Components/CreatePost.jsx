import { Form, redirect, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    postData.reactions = {
      likes: parseInt(postData.likes, 10) || 0,
      dislikes: parseInt(postData.dislikes, 10) || 0,
    };
    delete postData.likes;
    delete postData.dislikes;

    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const newPost = await response.json();
    addPost(newPost);
    navigate("/");
  };

  return (
    <>
      <Form method="POST" className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            Enter your user ID here
          </label>
          <input
            type="text"
            name="userId"
            className="form-control"
            id="userID"
            placeholder="Your User ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today ..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            name="body"
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="likes" className="form-label">
            Number of likes
          </label>
          <input
            type="text"
            name="likes"
            className="form-control"
            id="likes"
            placeholder="How many people liked this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dislikes" className="form-label">
            Number of dislikes
          </label>
          <input
            type="text"
            name="dislikes"
            className="form-control"
            id="dislikes"
            placeholder="How many people disliked this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export default CreatePost;

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = {
    likes: parseInt(postData.likes, 10) || 0,
    dislikes: parseInt(postData.dislikes, 10) || 0,
  };
  delete postData.likes;
  delete postData.dislikes;

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}
