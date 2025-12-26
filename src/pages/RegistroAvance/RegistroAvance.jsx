// src/pages/RegistroAvance/RegistroAvance.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useReadingStore } from '../../store/readingStore';
import { LIBROS_BIBLICOS, getLibroByNombre } from '../../data/librosBiblicos';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './RegistroAvance.module.css';

const RegistroAvance = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { addMultipleLecturas } = useReadingStore();
  const [avanceList, setAvanceList] = useState([]);
  const [currentAvance, setCurrentAvance] = useState({
    libro: '',
    capituloInicio: 1,
    capituloFin: 1
  });
  const [loading, setLoading] = useState(false);

  const handleAvanceChange = (e) => {
    const { name, value } = e.target;
    setCurrentAvance({
      ...currentAvance,
      [name]: name === 'libro' ? value : parseInt(value) || 1
    });
  };

  const agregarAvance = () => {
    if (currentAvance.libro) {
      const libro = getLibroByNombre(currentAvance.libro);
      setAvanceList([...avanceList, {
        ...currentAvance,
        libro_id: libro.id,
        capituloFin: Math.min(currentAvance.capituloFin, libro.capitulos)
      }]);
      setCurrentAvance({
        libro: '',
        capituloInicio: 1,
        capituloFin: 1
      });
    }
  };

  const eliminarAvance = (index) => {
    setAvanceList(avanceList.filter((_, i) => i !== index));
  };

  const handleContinuar = async () => {
    if (avanceList.length === 0) {
      navigate('/dashboard');
      return;
    }

    setLoading(true);

    // Expandir los rangos de capítulos en lecturas individuales
    const lecturasExpandidas = [];
    
    avanceList.forEach(avance => {
      for (let cap = avance.capituloInicio; cap <= avance.capituloFin; cap++) {
        lecturasExpandidas.push({
          libro_id: avance.libro_id,
          capitulo: cap
        });
      }
    });

    const result = await addMultipleLecturas(user.id, lecturasExpandidas);
    
    if (result.success) {
      navigate('/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Registra tu avance</h1>

          <div className={styles.listContainer}>
            {avanceList.length === 0 ? (
              <p className={styles.emptyMessage}>
                Nada que mostrar...
              </p>
            ) : (
              <div className={styles.list}>
                {avanceList.map((avance, index) => (
                  <div key={index} className={styles.listItem}>
                    <span className={styles.itemText}>
                      {avance.libro} {avance.capituloInicio}-{avance.capituloFin}
                    </span>
                    <button
                      onClick={() => eliminarAvance(index)}
                      className={styles.deleteButton}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.form}>
            <select
              name="libro"
              value={currentAvance.libro}
              onChange={handleAvanceChange}
              className={styles.select}
            >
              <option value="">Selecciona un libro</option>
              {LIBROS_BIBLICOS.map(libro => (
                <option key={libro.id} value={libro.nombre}>
                  {libro.nombre}
                </option>
              ))}
            </select>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Desde capítulo
                </label>
                <Input
                  type="number"
                  name="capituloInicio"
                  value={currentAvance.capituloInicio}
                  onChange={handleAvanceChange}
                  min="1"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Hasta capítulo
                </label>
                <Input
                  type="number"
                  name="capituloFin"
                  value={currentAvance.capituloFin}
                  onChange={handleAvanceChange}
                  min="1"
                />
              </div>
            </div>

            <Button onClick={agregarAvance}>
              <div className={styles.buttonContent}>
                <Plus size={20} />
                Añadir
              </div>
            </Button>

            <Button variant="secondary" onClick={handleContinuar} disabled={loading}>
              {loading ? 'Guardando...' : 'Continuar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroAvance;