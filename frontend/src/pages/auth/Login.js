import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener mínimo 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("INICIO DE SESIÓN:", { email, password });
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Volver al inicio
        </button>

        <h2 className="auth-title">Iniciar Sesión</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          <div className="options-row">
            <label className="remember">
              <input type="checkbox" />
              Recuérdame
            </label>

            <Link className="small-link" to="/recover">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button className="auth-btn" type="submit">
            Ingresar
          </button>
        </form>

        <p className="redirect-text">
          ¿No tienes cuenta?
          <Link className="redirect-link" to="/register">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;