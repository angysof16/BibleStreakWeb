// src/pages/Welcome/Welcome.jsx
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logo from '../../assets/blanco.png';
import styles from './Welcome.module.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.glowEffect} />

        <div className={styles.logoContainer}>
          <img src={logo} alt="BibleStreak logo" className={styles.logo} />
        </div>

        <h1 className={styles.title}>BIBLESTREAK</h1>

        <p className={styles.subtitle}>
          ¡Bienvenido a <span className={styles.highlight}>BibleStreak</span>!
        </p>

        <p className={styles.description}>
          Mantén tu racha de lectura bíblica
        </p>

        <button
          onClick={() => navigate("/login")}
          className={styles.continueButton}
        >
          <ChevronRight size={30} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Welcome;