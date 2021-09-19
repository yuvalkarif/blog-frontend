import axios from "axios";
export const getPosts = async () => {
  let posts;
  try {
    posts = await axios.get("http://localhost:8080/api/post/all");
  } catch (error) {
    return error;
  }

  return await posts.data.posts;
};
export const getPostByID = async (postID) => {
  let post;
  try {
    post = await axios.get(`http://localhost:8080/api/post/${postID}`);
  } catch (error) {
    return error;
  }
  return await post.data.post;
};
export const createComment = async (postID, comment) => {
  let post;
  const { username, body } = comment;
  try {
    post = await axios.post(
      `http://localhost:8080/api/post/${postID}/comment`,
      { username, body }
    );
  } catch (error) {
    return error;
  }
  return await post.data;
};

export const handleLogin = async (user) => {
  const { username, password } = user;

  try {
    if (!username || !password) {
      throw Error("Fill in your Credentials");
    }
    return await axios.post("http://localhost:8080/api/login", {
      username,
      password,
    });
  } catch (error) {
    return error;
  }
};
