// src/pages/Perfil.jsx
import { useNavigate } from 'react-router-dom';
import { ChevronRight, User as UserIcon } from 'lucide-react';
import Navbar from "../components/NavBar";

const Perfil = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Cuenta', onClick: () => alert('Próximamente: Gestión de cuenta') },
    { label: 'Notificaciones', onClick: () => alert('Próximamente: Configuración de notificaciones') }
  ];

  return (
    <div style={{
      background: 'linear-gradient(180deg, #001937 0%, #000C1A 100%)',
      minHeight: '100vh',
      color: '#FFFFFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      paddingBottom: '80px'
    }}>
      <div style={{
        minHeight: '100vh',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Header  */}
          <div style={{
            background: '#0D1521',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #0D4178 0%, #368EF0 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 15px 40px rgba(54, 142, 240, 0.4)'
            }}>
              <UserIcon size={50} color="white" />
            </div>

            <h2 style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              USUARIO
            </h2>

            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              NOMBRE DEL USUARIO
            </h1>

            <button
              onClick={() => alert('Próximamente: Editar perfil')}
              style={{
                padding: '0.75rem 2rem',
                background: 'transparent',
                border: '1px solid #368EF0',
                borderRadius: '8px',
                color: '#368EF0',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(54, 142, 240, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              EDITAR
            </button>
          </div>

          {/* Opciones de menú */}
          <div style={{
            background: '#0D1521',
            borderRadius: '16px',
            padding: '1rem',
            marginBottom: '2rem'
          }}>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: index < menuItems.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(54, 142, 240, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span>{item.label}</span>
                <ChevronRight size={20} color="rgba(255, 255, 255, 0.5)" />
              </button>
            ))}

            <button
              onClick={() => {
                if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                  navigate('/');
                }
              }}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: '16px',
                transition: 'background 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(54, 142, 240, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Perfil;