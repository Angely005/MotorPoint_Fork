import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Auth.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage("Por favor completa todos los campos");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden ❌");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registro exitoso ✅ Redirigiendo...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(data.message || "Error al registrarse ❌");
      }
    } catch (error) {
      setMessage("Error de conexión con el servidor");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

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
          placeholder="Crea una contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repite la contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-button">
          Registrarse
        </button>

        <p className="redirect-text">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="link">
            Inicia sesión
          </Link>
        </p>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Register;
