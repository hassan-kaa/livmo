

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Services from "./pages/Services";
// import Dashboard from "./pages/Dashboard";
// import FileImport from "./pages/FileImport";
//import UserProfile from "./pages/UserProfile";

function App() {
  return (<ThemeProvider theme={theme}>
    <div className="App">   
     <Services/>
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