import { Wrapper, InfoContainer } from "./post.styles";
import ArrowSVG from "../../svg/arrow";
import CommentSVG from "../../svg/comment";
export default function Post({ info }) {
  return (
    <Wrapper>
      <h2>{info.title}</h2>
      <p>{info.body}</p>
      <InfoContainer>
        <div>
          <span>{info.author}</span>
          <p>{info.datetime}</p>
        </div>
        <div className="comments">
          <span>{info.comments.length}</span>
          <CommentSVG />
        </div>
      </InfoContainer>

      <ArrowSVG />
    </Wrapper>
  );
}
