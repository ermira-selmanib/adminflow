import Footer from "./footer";
import Header from "./header";
import Home from "../Home/home";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>{" "}
      </div>
      <Footer />
    </>
  );
}
