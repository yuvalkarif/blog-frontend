import axios from "axios";
const url = process.env.REACT_APP_API_URL;
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
    return await axios.post(`${url}/api/login`, {
      username,
      password,
    });
  } catch (error) {
    return error;
  }
};
export const createPost = async (user, post) => {
  const { username, token } = user;
  const { body, title } = post;
  try {
    if (!body || !title) {
      throw Error("Fill in Title and Body of the Post");
    }
    return await axios.post(
      `${url}/api/post`,
      {
        body,
        title,
        author: username,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
};
export const deletePost = async (user, postID) => {
  const { token } = user;
  try {
    return await axios.delete(`${url}/api/post/${postID}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};
