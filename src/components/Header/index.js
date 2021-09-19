import { Container, Wrapper } from "./Header.styles";
import { useHistory } from "react-router";
export default function Header() {
  const history = useHistory();
  const goToFeed = () => {
    history.push(`/`);
  };
  const goToAdmin = () => {
    history.push(`/admin`);
  };
  return (
    <Wrapper>
      <Container>
        <h1>Blog by Karif</h1>
        <div>
          {" "}
          <span onClick={goToFeed}>Feed</span>
          <span onClick={goToAdmin}>Admin</span>
        </div>
      </Container>
    </Wrapper>
  );
}
