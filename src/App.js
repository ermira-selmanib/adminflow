import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Grid } from "@mui/material";
import "./App.css";
import Login from "./LogIn/login";

function App() {
  return (
    <div className="App">
      <body>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Router>
              <Routes>
                <Route exact path="/login" element={<Login />} />
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
