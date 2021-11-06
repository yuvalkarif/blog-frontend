import axios from "axios";
export const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:8080";

export const getPosts = async () => {
  let posts;
  try {
    posts = await axios.get(`${url}/api/post/all`);
  } catch (error) {
    return error;
  }

  return await posts.data.posts;
};
export const getPostByID = async (postID) => {
  let post;
  try {
    post = await axios.get(`${url}/api/post/${postID}`);
  } catch (error) {
    return error;
  }
  return await post.data.post;
};
export const createComment = async (postID, comment) => {
  let post;
  const { username, body } = comment;
  try {
    post = await axios.post(`${url}/api/post/${postID}/comment`, {
      username,
      body,
    });
  } catch (error) {
    return error;
  }
  return await post.data;
};
export const deleteComment = async (postID, commentID, user) => {
  const { token } = user;
  let data;
  try {
    data = await axios.delete(`${url}/api/post/${postID}/${commentID}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
  return data;
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
export const updatePost = async (user, post, img) => {
  const { username, token } = user;
  const { body, title, id } = post;
  try {
    if (!body || !title || !id) {
      throw Error("Fill in Title and Body of the Post");
    }
    return await axios.put(
      `${url}/api/post/${id}`,
      {
        body: encodeURIComponent(body),
        title,
        author: username,
        thumbnail: img,
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
export const createPost = async (user, post, img) => {
  const { username, token } = user;
  const { body, title } = post;
  try {
    if (!body || !title) {
      throw Error("Fill in Title and Body of the Post");
    }
    return await axios.post(
      `${url}/api/post`,
      {
        body: encodeURIComponent(body),
        title,
        author: username,
        thumbnail: img,
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

export const uploadThumbnail = async (file) => {
  let formData = new FormData();
  formData.append("thumbnail", file);
  try {
    return await axios.patch(`${url}/api/images/upload`, formData);
  } catch (error) {
    return error;
  }
};
