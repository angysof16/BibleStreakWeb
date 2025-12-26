// src/components/Navbar/Navbar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, BarChart3, User } from 'lucide-react';
import styles from './Navbar.module.css';

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
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`${styles.navButton} ${isActive ? styles.active : ''}`}
            >
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={styles.label}>
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