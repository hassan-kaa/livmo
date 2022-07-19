

import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserProfile from "./pages/UserProfile";
function App() {
  return (<ThemeProvider theme={theme}>
    <div className="App">
      <UserProfile/>
    </div>
    </ThemeProvider>
  );
}

export default App;
const theme = createTheme({
  palette: {
    primary: {
      main: "#e42651",
    },
    secondary: {
      main: "#000",
    },
  },
});