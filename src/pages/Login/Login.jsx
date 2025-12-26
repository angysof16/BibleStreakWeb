// src/pages/Login/Login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import logo from "../../assets/blanco.png";
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const { signIn, user } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn(formData.email, formData.password);
    
    if (result.success) {
      navigate("/dashboard");
    }
    
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="BibleStreak logo" className={styles.logo} />
            </div>
            <h1 className={styles.title}>BIBLESTREAK</h1>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? 'Ingresando...' : 'Ingresar'}
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              ¿Aún no tienes una cuenta?{" "}
              <span
                onClick={() => navigate("/register")}
                className={styles.link}
              >
                Regístrate
              </span>
            </p>
            <p className={styles.linkSmall}>
              Recuperar contraseña
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;