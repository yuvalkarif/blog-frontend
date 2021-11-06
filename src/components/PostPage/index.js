import CommentSVG from "../../svg/comment";
import TrashSVG from "../../svg/trash";
import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import { createComment, getPostByID, deleteComment } from "../../helpers/api";
import {
  CommentContainer,
  CommentsWrapper,
  FormContainer,
  InfoContainer,
  Wrapper,
} from "./postpage.styles";
import PlusSVG from "../../svg/plus";
import ReactMarkdown from "react-markdown";
import EditSVG from "../../svg/edit";
import useUserContext from "../../constants/useUserContext";
export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [toShowForm, setToShowForm] = useState(false);
  const [empty, setEmpty] = useState(true);
  const history = useHistory();
  const user = useUserContext();
  const [comment, setComment] = useState({
    username: "",
    body: "",
  });
  const handleComment = async (e) => {
    e.preventDefault();
    await createComment(id, comment);
    history.go(0);
  };
  const handleClick = () => {};

  async function handleDelete(commentID) {
    await deleteComment(id, commentID, user);
    history.go(0);
  }

  useEffect(() => {
    setup();
    async function setup() {
      let results = await getPostByID(id);
      setPost(results);
      setEmpty(!!results.comments.length);
    }
  }, [id]);
  const handleEdit = () => {
    history.push(`${id}/edit/`);
  };
  return (
    <>
      {post ? (
        <>
          <Wrapper>
            <h2>{post.title}</h2>
            {user?.username && user?.token && (
              <div className="edit" onClick={handleEdit}>
                <EditSVG />
              </div>
            )}

            <ReactMarkdown className="body">
              {decodeURIComponent(post.body)}
            </ReactMarkdown>

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
                        <div>
                          <span>{comment.username}</span>
                          <p>{comment.datetime}</p>
                        </div>

                        {user?.username && user?.token && (
                          <div
                            className="delete"
                            onClick={() => handleDelete(comment._id)}
                          >
                            <TrashSVG />
                          </div>
                        )}
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
