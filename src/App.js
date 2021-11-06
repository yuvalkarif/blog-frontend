import { lazy, Suspense, useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import darkTheme from "./constants/darkTheme";
import lightTheme from "./constants/lightTheme";
import Loading from "./components/Loading";
import { createGlobalStyle } from "styled-components";
import UserContext from "./constants/userContext";
import Header from "./components/Header/index";

function App() {
  const PostPage = lazy(() => import("./components/PostPage"));
  const PostAdd = lazy(() => import("./components/PostAdd"));
  const PostMDE = lazy(() => import("./components/PostMDE"));
  const Feed = lazy(() => import("./components/Feed"));
  const Login = lazy(() => import("./components/Login"));

  const [user, setUser] = useState({ username: "", token: "" });
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <UserContext.Provider value={user}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router basename={""}>
          <Header
            setUser={setUser}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
          />
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path="/">
                <Feed />
              </Route>
              <Route path="/post/:id/edit">
                <PostMDE />
              </Route>
              <Route exact path="/post/:id">
                <PostPage />
              </Route>
              <Route exact path="/edit">
                <PostAdd />
              </Route>
              <Route exact path="/admin">
                {user?.username || user?.token ? (
                  <PostMDE />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route exact path="/login">
                <Login setUser={setUser} />
              </Route>
            </Suspense>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    transition: color 150ms ease-in-out; 
    transition: background-color 150ms ease-in-out; 
  }
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
