import { useEffect, useState } from "react";
import { getPosts } from "../../helpers/api";
import Post from "../Post";
import { Wrapper } from "./feed.styles";
const Feed = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((results) => setPosts(results));
  }, []);
  return (
    <Wrapper>
      <div>
        {posts
          ? posts.map((post) => {
              console.log(post.title);
              return <Post info={post} />;
            })
          : null}
      </div>
    </Wrapper>
  );
};

export default Feed;
