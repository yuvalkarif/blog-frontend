import axios from "axios";
export const getPosts = async () => {
  let posts;
  try {
    posts = await axios.get("http://localhost:8080/api/post/all");
  } catch (error) {
    return "error";
  }

  return await posts.data.posts;
};

// export const getPosts = () => {
//   let posts = async () => {
//     let data;
//     data = await fetch("http://localhost:8080/api/post/all", {
//       method: "GET",
//     });
//     return await data.json();
//   };
// };
