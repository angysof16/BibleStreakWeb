// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuarioEmail: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va a ir la lógica de autenticación - pendiente
    console.log('Login data:', formData);
    navigate('/dashboard');
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
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #0D4178 0%, #368EF0 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              margin: '0 auto 1.5rem',
              boxShadow: '0 15px 40px rgba(54, 142, 240, 0.4)'
            }}>
              📖
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              letterSpacing: '1px'
            }}>
              BIBLESTREAK
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <Input
                type="text"
                name="usuarioEmail"
                placeholder="Usuario o Correo"
                value={formData.usuarioEmail}
                onChange={handleInputChange}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <Button type="submit">
              Ingresar
            </Button>
          </form>

          <div style={{
            textAlign: 'center',
            marginTop: '20px'
          }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '10px' }}>
              ¿Aún no tienes una cuenta?{' '}
              <span
                onClick={() => navigate('/register')}
                style={{
                  color: '#368EF0',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Regístrate
              </span>
            </p>
            <p
              style={{
                color: '#368EF0',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Recuperar contraseña
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;