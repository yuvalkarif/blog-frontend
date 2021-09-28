import { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import darkTheme from "./constants/darkTheme";
import lightTheme from "./constants/lightTheme";
import Loading from "./components/Loading";
import { createGlobalStyle } from "styled-components";

function App() {
  const PostPage = lazy(() => import("./components/PostPage"));
  const PostAdd = lazy(() => import("./components/PostAdd"));
  const PostMDE = lazy(() => import("./components/PostMDE"));
  const Feed = lazy(() => import("./components/Feed"));
  const Login = lazy(() => import("./components/Login"));
  const Header = lazy(() => import("./components/Header"));
  const [user, setUser] = useState({ username: "", token: "" });
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInToken = localStorage.getItem("token");
    if (loggedInUser && loggedInToken) {
      const foundUser = {
        username: JSON.parse(loggedInUser),
        token: JSON.parse(loggedInToken),
      };
      setUser(foundUser);
    }
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Redirect to="/" />
        <Switch>
          <Suspense fallback={<Loading />}>
            <Header
              user={user}
              setUser={setUser}
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
            />
            <Route exact path="/">
              <Feed user={user} />
            </Route>
            <Route path="/post/:id/edit">
              <PostMDE user={user} />
            </Route>
            <Route exact path="/post/:id">
              <PostPage user={user} />
            </Route>
            <Route exact path="/edit">
              <PostAdd />
            </Route>
            <Route exact path="/admin">
              {user.username || user.token ? (
                // <PostAdd user={user} />
                <PostMDE user={user} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/login">
              <Login setUser={setUser} />
            </Route>
          </Suspense>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${({ theme }) => theme.blockColor};
    h1{
      font-size: 1rem ;
      @media (min-width: 960px) {
        font-size: 2.5rem ;
      }
    }
    h2{
      font-size: 1.25rem ;
      @media (min-width: 960px) {
        font-size: 2.75rem ;
      }
    }
    .body{
      *{
        @media (min-width: 960px) {
        font-size: 1.35rem;
      }
      }
    
    }
  }`;
