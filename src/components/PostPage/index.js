import CommentSVG from "../../svg/comment";
import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import { createComment, getPostByID } from "../../helpers/api";
import {
  CommentContainer,
  CommentsWrapper,
  FormContainer,
  InfoContainer,
  Wrapper,
} from "./postpage.styles";
import PlusSVG from "../../svg/plus";
export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [toShowForm, setToShowForm] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [comment, setComment] = useState({
    username: "",
    body: "",
  });
  const handleComment = async (e) => {
    e.preventDefault();
    const newPost = await createComment(id, comment);
  };
  const handleClick = () => {
    setEmpty(!empty);
  };

  useEffect(() => {
    getPostByID(id).then((results) => {
      setPost(results);
      setEmpty(!!results.comments.length);
    });
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
            <div
              className={`${!empty ? "pulse plus" : "plus"}`}
              onClick={() => {
                handleClick();
                setToShowForm(!toShowForm);
              }}
            >
              <PlusSVG />
            </div>
            {toShowForm && (
              <FormContainer onSubmit={handleComment}>
                <h3>Comment</h3>
                <label htmlFor="username">
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setComment({ ...comment, username: `${e.target.value}` });
                    }}
                  ></input>
                </label>
                <label htmlFor="body">
                  <textarea
                    name="body"
                    placeholder="What were you thinking about?"
                    onChange={(e) => {
                      setComment({ ...comment, body: `${e.target.value}` });
                    }}
                  ></textarea>
                </label>
                <button type="submit">Add Comment</button>
              </FormContainer>
            )}
            {empty ? (
              post.comments
                .map((comment, i) => {
                  return (
                    <CommentContainer>
                      <h3>
                        <span>{comment.username}</span>
                        <p>{comment.datetime}</p>
                      </h3>
                      <p>{comment.body}</p>
                    </CommentContainer>
                  );
                })
                .reverse()
            ) : (
              <span>Look quite empty in here...</span>
            )}
          </CommentsWrapper>
        </>
      ) : null}
    </>
  );
}
