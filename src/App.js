import Feed from "./components/Feed/index";
import { ThemeProvider } from "styled-components";
import Theme from "./constants/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Feed></Feed>
      </ThemeProvider>
    </div>
  );
}

export default App;
