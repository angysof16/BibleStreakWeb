// src/components/Navbar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, BarChart3, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Inicio', path: '/dashboard' },
    { icon: PlusCircle, label: 'Añadir', path: '/anadir-lectura' },
    { icon: BarChart3, label: 'Stats', path: '/estadisticas' },
    { icon: User, label: 'Perfil', path: '/perfil' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#0D1521',
      borderTop: '1px solid rgba(54, 142, 240, 0.2)',
      padding: '0.75rem 0',
      zIndex: 1000,
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.5rem',
                transition: 'all 0.3s ease',
                color: isActive ? '#368EF0' : 'rgba(255, 255, 255, 0.6)'
              }}
              onMouseOver={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                }
              }}
            >
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span style={{
                fontSize: '11px',
                fontWeight: isActive ? '600' : '400'
              }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;