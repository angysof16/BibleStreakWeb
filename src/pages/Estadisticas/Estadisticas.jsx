// src/pages/Estadisticas/Estadisticas.jsx
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { useReadingStore } from '../../store/readingStore';
import Navbar from "../../components/Navbar/Navbar";
import styles from './Estadisticas.module.css';

const Estadisticas = () => {
  const { user } = useAuthStore();
  const { getEstadisticas } = useReadingStore();
  const [stats, setStats] = useState({
    semana: 0,
    mes: 0,
    metaMensual: 50,
    librosProgreso: [],
    diasSemana: ["D", "L", "M", "M", "J", "V", "S"],
    lecturasPorDia: [0, 0, 0, 0, 0, 0, 0],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (user) {
        const result = await getEstadisticas(user.id);
        if (result.success) {
          setStats(prev => ({
            ...prev,
            semana: result.data.semana,
            mes: result.data.mes
          }));
        }
        setLoading(false);
      }
    };

    fetchStats();
  }, [user, getEstadisticas]);

  const porcentajeMeta = (stats.mes / stats.metaMensual) * 100;

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <p style={{ textAlign: 'center', marginTop: '3rem' }}>
              Cargando estadísticas...
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Estadísticas</h1>

          {/* Bloques de Esta Semana y Este Mes */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Esta semana</p>
              <p className={styles.statNumber}>{stats.semana}</p>
              <p className={styles.statSubtext}>capítulos</p>
            </div>

            <div className={styles.statCard}>
              <p className={styles.statLabel}>Este mes</p>
              <p className={styles.statNumber}>{stats.mes}</p>
              <p className={styles.statSubtext}>capítulos</p>
            </div>
          </div>

          {/* Gráfico de Meta Mensual */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p className={styles.cardTitle}>Meta mensual</p>
              <p className={styles.cardSubtitle}>
                {stats.mes}/{stats.metaMensual} capítulos leídos
              </p>
            </div>

            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${porcentajeMeta}%` }} 
              />
            </div>

            {/* Gráfica semanal */}
            <div className={styles.chartContainer}>
              {stats.lecturasPorDia.map((lecturas, index) => {
                const maxLecturas = Math.max(...stats.lecturasPorDia);
                const altura = maxLecturas > 0 ? (lecturas / maxLecturas) * 100 : 0;

                return (
                  <div key={index} className={styles.chartColumn}>
                    <div
                      className={styles.chartBar}
                      style={{
                        height: `${altura}%`,
                        minHeight: lecturas > 0 ? '20px' : '0px'
                      }}
                    />
                    <span className={styles.chartLabel}>
                      {stats.diasSemana[index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lista de Libros en Progreso */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Libros en progreso</h2>

            <div className={styles.booksList}>
              {stats.librosProgreso.map((libro, index) => {
                const porcentaje = (libro.leidos / libro.total) * 100;

                return (
                  <div key={index} className={styles.bookItem}>
                    <div className={styles.bookHeader}>
                      <span className={styles.bookName}>{libro.nombre}</span>
                      <span className={styles.bookProgress}>
                        {libro.leidos}/{libro.total}
                      </span>
                    </div>
                    <div className={styles.bookProgressBar}>
                      <div
                        className={styles.bookProgressFill}
                        style={{ width: `${porcentaje}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Estadisticas;