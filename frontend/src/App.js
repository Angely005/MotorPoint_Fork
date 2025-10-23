import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h1>Bienvenido a MotorPoint</h1>
              <p>
                <a href="/login">Ir a Login</a> |{" "}
                <a href="/register">Ir a Registro</a>
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
