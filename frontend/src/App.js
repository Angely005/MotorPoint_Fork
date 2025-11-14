import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h1>Bienvenido a MotorPoint</h1>
              <p>
                <Link to="/login">Ir a Login</Link> |{" "}
                <Link to="/register">Ir a Registro</Link>
              </p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
