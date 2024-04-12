import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LogIn/login";
import Layout from "./Layout/layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
