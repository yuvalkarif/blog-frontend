import { useEffect, useState } from "react";
import { getPosts } from "../../helpers/api";
import Post from "../Post";
import { PostsContainer, Wrapper } from "./feed.styles";
import Loading from "../Loading/index";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((results) => setPosts(results));
  }, []);
  return (
    <Wrapper>
      <PostsContainer>
        {posts?.length ? (
          posts.map((post) => {
            return <Post info={post} user={user} />;
          })
        ) : (
          <Loading />
        )}
      </PostsContainer>
    </Wrapper>
  );
};

export default Feed;
