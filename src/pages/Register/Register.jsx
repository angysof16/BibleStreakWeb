// src/pages/Register/Register.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const { signUp, user } = useAuthStore();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: ''
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
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validar longitud mínima de contraseña
    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);

    const result = await signUp(
      formData.email,
      formData.password,
      formData.nombre,
      formData.telefono
    );
    
    if (result.success) {
      navigate('/pregunta-avance');
    }
    
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>¡Crea tu cuenta!</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              type="tel"
              name="telefono"
              placeholder="Teléfono (opcional)"
              value={formData.telefono}
              onChange={handleInputChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña (mínimo 6 caracteres)"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <div className={styles.buttonWrapper}>
              <Button type="submit" disabled={loading}>
                {loading ? 'Creando cuenta...' : 'Registrar'}
              </Button>
            </div>
          </form>

          <p className={styles.footer}>
            ¿Ya tienes cuenta?{' '}
            <span
              onClick={() => navigate('/login')}
              className={styles.link}
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;