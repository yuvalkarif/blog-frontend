import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./constants/theme";
import Loading from "./components/Loading";

function App() {
  const PostPage = lazy(() => import("./components/PostPage"));
  const PostAdd = lazy(() => import("./components/PostAdd"));
  const Feed = lazy(() => import("./components/Feed"));
  const Login = lazy(() => import("./components/Login"));
  return (
    <Router className="App" basename={"/view"}>
      <ThemeProvider theme={Theme}>
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/">
              <Feed></Feed>
            </Route>
            <Route exact path="/post/:id">
              <PostPage />
            </Route>
            <Route exact path="/edit">
              <PostAdd></PostAdd>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Suspense>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
