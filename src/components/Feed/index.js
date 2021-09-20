import { useEffect, useState } from "react";
import { getPosts } from "../../helpers/api";
import Post from "../Post";
import { Wrapper } from "./feed.styles";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((results) => setPosts(results));
  }, []);
  return (
    <Wrapper>
      <div>
        {posts
          ? posts.map((post) => {
              return <Post info={post} user={user} />;
            })
          : null}
      </div>
    </Wrapper>
  );
};

export default Feed;
