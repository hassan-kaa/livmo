

import { createTheme, ThemeProvider } from "@mui/material/styles";

import {Banner,MyButton, MyContainer} from "./components/CustomStyled"
import DishForm from "./components/DishForm";
import LodgingForm from "./components/LodgingForm";
import TransportForm from "./components/TransportForm";
// import Dashboard from "./pages/Dashboard";
// import FileImport from "./pages/FileImport";
//import UserProfile from "./pages/UserProfile";

function App() {
  return (<ThemeProvider theme={theme}>
    <div className="App"> 

    <Banner>
        <img
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="banner"
        />
        <h1>Transport edit :</h1>
      </Banner>
      <MyContainer>
      <DishForm  />
      <LodgingForm  />
      <TransportForm  />
      <span>
          <MyButton>Cancel</MyButton>
          <MyButton confirm>Confirm</MyButton>
        </span>
      </MyContainer>
      


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