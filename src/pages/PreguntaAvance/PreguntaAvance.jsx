// src/pages/PreguntaAvance/PreguntaAvance.jsx
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import logo from "../../assets/blanco.png";
import styles from './PreguntaAvance.module.css';

const PreguntaAvance = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="BibleStreak logo" className={styles.logo} />
          </div>

          <h2 className={styles.question}>
            ¿Tienes algún progreso o avance en la lectura de la Biblia?
          </h2>

          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              <Button onClick={() => navigate("/registro-avance")}>Sí</Button>
            </div>
            <div className={styles.button}>
              <Button onClick={() => navigate("/dashboard")}>No</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntaAvance;