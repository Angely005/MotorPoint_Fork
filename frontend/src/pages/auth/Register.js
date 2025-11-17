import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!form.password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (form.password.length < 6) {
      newErrors.password =
        "La contraseña debe tener mínimo 6 caracteres";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("REGISTRO:", form);
    navigate("/login");
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="auth-container">
      <div className="auth-card">

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Volver al inicio
        </button>

        <h2 className="auth-title">Crear Cuenta</h2>

        <form className="auth-form" onSubmit={handleRegister}>
          <label>Nombre completo</label>
          <input
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          {errors.nombre && (
            <p className="error-message">{errors.nombre}</p>
          )}

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}

          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          <label>Confirmar contraseña</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Repite tu contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}

          <button className="auth-btn" type="submit">
            Registrarse
          </button>
        </form>

        <p className="redirect-text">
          ¿Ya tienes cuenta?
          <Link className="redirect-link" to="/login">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
