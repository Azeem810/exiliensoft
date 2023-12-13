import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/Theme";
import ExiliensoftRoutes from "./routes/index.routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ExiliensoftRoutes/>
    </ThemeProvider>
  );
}

export default App;
