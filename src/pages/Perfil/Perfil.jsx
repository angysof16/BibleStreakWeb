// src/pages/Perfil/Perfil.jsx
import { useNavigate } from 'react-router-dom';
import { ChevronRight, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Navbar from "../../components/Navbar/Navbar";
import styles from './Perfil.module.css';

const Perfil = () => {
  const navigate = useNavigate();
  const { profile, signOut } = useAuthStore();

  const menuItems = [
    { label: 'Cuenta', onClick: () => alert('Próximamente: Gestión de cuenta') },
    { label: 'Notificaciones', onClick: () => alert('Próximamente: Configuración de notificaciones') }
  ];

  const handleLogout = async () => {
    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      await signOut();
      navigate('/');
    }
  };

  const nombreUsuario = profile?.nombre || 'Usuario';

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          {/* Header del perfil */}
          <div className={styles.profileCard}>
            <div className={styles.avatarContainer}>
              <UserIcon size={50} color="white" />
            </div>

            <h2 className={styles.userLabel}>USUARIO</h2>
            <h1 className={styles.userName}>{nombreUsuario.toUpperCase()}</h1>

            <button
              onClick={() => alert('Próximamente: Editar perfil')}
              className={styles.editButton}
            >
              EDITAR
            </button>
          </div>

          {/* Opciones de menú */}
          <div className={styles.menuCard}>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`${styles.menuItem} ${
                  index < menuItems.length - 1 ? styles.menuItemBorder : ''
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight size={20} className={styles.menuIcon} />
              </button>
            ))}

            <button onClick={handleLogout} className={styles.menuItem}>
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