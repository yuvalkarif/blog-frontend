import { Wrapper, InfoContainer } from "./post.styles";
import ArrowSVG from "../../svg/arrow";
import CommentSVG from "../../svg/comment";
import TrashSVG from "../../svg/trash";
import { useHistory } from "react-router-dom";
import { deletePost } from "../../helpers/api";
import useUserContext from "../../constants/useUserContext";

export default function Post({ info }) {
  const history = useHistory();
  const user = useUserContext();
  const goToPost = () => {
    history.push(`/post/${info._id}`);
  };
  const handleDelete = async () => {
    try {
      await deletePost(user, info._id);
    } catch (error) {
      console.error(error);
    }
    history.go(0);
  };
  return (
    <Wrapper thumbnail={info.thumbnail ? `${info.thumbnail}` : ""}>
      <h2 onClick={goToPost}>
        {info.title.length > 35 ? info.title.slice(0, 35) + "..." : info.title}
      </h2>

      <div className="comments">
        <span>{info.comments.length}</span>
        <CommentSVG />
        {user?.username && user?.token && (
          <div className="delete" onClick={handleDelete}>
            <TrashSVG />
          </div>
        )}
      </div>
      <InfoContainer>
        <div>
          <span>{info.author}</span>
          <p>{info.datetime}</p>
        </div>
        <div className="arrow" onClick={goToPost}>
          <ArrowSVG />
        </div>
      </InfoContainer>
    </Wrapper>
  );
}
