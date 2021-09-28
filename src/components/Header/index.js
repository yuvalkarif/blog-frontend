import { Container, Wrapper } from "./Header.styles";
import { useHistory } from "react-router";
import DarkModeToggle from "react-dark-mode-toggle";
export default function Header({ user, setUser, setIsDarkMode, isDarkMode }) {
  const history = useHistory();
  const goToFeed = () => {
    history.push(`/`);
  };
  const goToAdmin = () => {
    history.push(`/admin`);
  };
  function handleLogOut() {
    setUser({ username: "", token: "" });
    localStorage.clear();
  }
  return (
    <Wrapper>
      <Container>
        <h1>Blog by Karif</h1>
        <div>
          {" "}
          <span onClick={goToFeed}>Feed</span>
          <span onClick={goToAdmin}>Admin</span>
          {user.username && user.token && (
            <span className="logout" onClick={() => handleLogOut()}>
              Log Out
            </span>
          )}
          <DarkModeToggle
            className="toggle"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
          />
        </div>
      </Container>
    </Wrapper>
  );
}
