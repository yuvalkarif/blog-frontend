import { Wrapper, InfoContainer } from "./post.styles";
import ArrowSVG from "../../svg/arrow";
import CommentSVG from "../../svg/comment";
import { useHistory } from "react-router-dom";
export default function Post({ info }) {
  const history = useHistory();
  const goToPost = () => {
    history.push(`/post/${info._id}`);
  };
  return (
    <Wrapper>
      <h2 onClick={goToPost}>{info.title}</h2>
      <p>{info.body}</p>
      <div className="comments">
        <span>{info.comments.length}</span>
        <CommentSVG />
      </div>
      <InfoContainer>
        <div>
          <span>{info.author}</span>
          <p>{info.datetime}</p>
        </div>
      </InfoContainer>
      <div className="arrow" onClick={goToPost}>
        <ArrowSVG />
      </div>
    </Wrapper>
  );
}
