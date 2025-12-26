// src/pages/Dashboard/Dashboard.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useReadingStore } from "../../store/readingStore";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/blanco.png";
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuthStore();
  const { racha, progreso, fetchRacha, fetchProgreso } = useReadingStore();

  useEffect(() => {
    if (user) {
      fetchRacha(user.id);
      fetchProgreso(user.id);
    }
  }, [user, fetchRacha, fetchProgreso]);

  const diasRacha = racha?.dias_consecutivos || 0;
  const progresoGeneral = progreso?.porcentaje_biblia || 0;
  const nombreUsuario = profile?.nombre || 'Usuario';

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.greeting}>¡Hola, {nombreUsuario}!</h1>

          <div className={styles.card}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="BibleStreak logo" className={styles.logo} />
            </div>

            <div className={styles.streakContainer}>
              <span className={styles.streakNumber}>{diasRacha}</span>
              <p className={styles.streakText}>
                días de <span className={styles.highlight}>racha</span>
              </p>
            </div>

            <Button onClick={() => navigate("/anadir-lectura")}>
              Continuar leyendo
            </Button>

            <div className={styles.progressContainer}>
              <p className={styles.progressLabel}>Progreso general</p>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${progresoGeneral}%` }} 
                />
              </div>
              <p className={styles.progressPercentage}>
                {progresoGeneral.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Dashboard;