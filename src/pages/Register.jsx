// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va a ir la lógica de registro
    console.log('Register data:', formData);
    navigate('/pregunta-avance');
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #001937 0%, #000C1A 100%)',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            ¡Crea tu cuenta!
          </h1>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="usuario"
                placeholder="Usuario"
                value={formData.usuario}
                onChange={handleInputChange}
              />
              <Input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Correo"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <div style={{ marginTop: '25px' }}>
              <Button type="submit">
                Registrar
              </Button>
            </div>
          </form>

          <p style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            ¿Ya tienes cuenta?{' '}
            <span
              onClick={() => navigate('/login')}
              style={{
                color: '#368EF0',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
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