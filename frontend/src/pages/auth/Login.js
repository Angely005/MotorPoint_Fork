import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Auth.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.email || !formData.password) {
      setMessage("Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.token) {
        setMessage("Inicio de sesión exitoso ");
        if (formData.remember) {
          localStorage.setItem("token", data.token);
        } else {
          sessionStorage.setItem("token", data.token);
        }
        setTimeout(() => navigate("/"), 800);
      } else {
        setMessage(data.message || "Credenciales incorrectas");
      }
    } catch (error) {
      setLoading(false);
      setMessage("Error de conexión con el servidor");
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* 🔹 Link centrado debajo del campo contraseña */}
        <div className="forgot-container">
          <Link to="/forgot-password" className="forgot-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <div className="remember-row">
          <label className="remember-container">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <span>Recuérdame</span>
          </label>
        </div>

        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

        <p className="redirect-text">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="link">
            Regístrate aquí
          </Link>
        </p>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
