import { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./constants/theme";
import Loading from "./components/Loading";

function App() {
  const PostPage = lazy(() => import("./components/PostPage"));
  const PostAdd = lazy(() => import("./components/PostAdd"));
  const Feed = lazy(() => import("./components/Feed"));
  const Login = lazy(() => import("./components/Login"));
  const Header = lazy(() => import("./components/Header"));
  const [user, setUser] = useState({ username: "", token: "" });
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
    <Router basename={"/view"}>
      <ThemeProvider theme={Theme}>
        <Redirect to="/" />
        <Switch>
          <Suspense fallback={<Loading />}>
            <Header user={user} setUser={setUser} />
            <Route exact path="/">
              <Feed user={user} />
            </Route>
            <Route exact path="/post/:id">
              <PostPage user={user} />
            </Route>
            <Route exact path="/edit">
              <PostAdd></PostAdd>
            </Route>
            <Route exact path="/admin">
              {user.username && user.token ? (
                <PostAdd user={user} />
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
