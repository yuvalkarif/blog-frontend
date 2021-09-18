import CommentSVG from "../../svg/comment";
import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import { getPostByID } from "../../helpers/api";
import {
  CommentContainer,
  CommentsWrapper,
  InfoContainer,
  Wrapper,
} from "./postpage.styles";
import PlusSVG from "../../svg/plus";
export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [toShowForm, setToShowForm] = useState(false);

  useEffect(() => {
    getPostByID(id).then((results) => setPost(results));
  }, [id]);
  return (
    <>
      {post ? (
        <>
          <Wrapper>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <InfoContainer>
              <h2>
                Posted by <span>{post.author}</span>
              </h2>
              <p>{post.datetime}</p>

              <span>{post.comments.length}</span>
              <CommentSVG />
            </InfoContainer>
          </Wrapper>
          <CommentsWrapper>
            <div className="plus" onClick={() => setToShowForm(!toShowForm)}>
              <PlusSVG />
            </div>
            {toShowForm && <div>FORM</div>}
            {post.comments.map((comment, i) => {
              return (
                <CommentContainer>
                  <h3>
                    <span>{comment.username}</span>
                    <p>{comment.datetime}</p>
                  </h3>
                  <p>{comment.body}</p>
                </CommentContainer>
              );
            })}{" "}
          </CommentsWrapper>
        </>
      ) : null}
    </>
  );
}
