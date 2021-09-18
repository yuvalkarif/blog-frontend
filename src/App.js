import Feed from "./components/Feed/index";
import { ThemeProvider } from "styled-components";
import Theme from "./constants/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
function App() {
  return (
    <Router className="App" basename={"/v"}>
      <ThemeProvider theme={Theme}>
        <Switch>
          <Route exact path="/">
            <Feed></Feed>
          </Route>
          <Route exact path="/post/:id">
            <PostPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
