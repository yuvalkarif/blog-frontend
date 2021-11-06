import { useEffect, useState } from "react";
import { getPosts } from "../../helpers/api";
import Post from "../Post";
import { PostsContainer, Wrapper } from "./feed.styles";
import Loading from "../Loading/index";

const Feed = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (!posts) {
      getPosts().then((results) => setPosts(results));
    }
  }, [posts]);
  return (
    <Wrapper>
      <PostsContainer>
        {posts?.length ? (
          posts.map((post) => {
            return <Post info={post} key={post._id} />;
          })
        ) : (
          <Loading />
        )}
      </PostsContainer>
    </Wrapper>
  );
};

export default Feed;
